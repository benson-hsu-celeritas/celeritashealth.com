import { visit } from 'unist-util-visit';

// Wraps every TBD token (and its clause, up to the sentence end, parentheses balanced) in <mark class="tbd">
// so a placeholder is never invisible, and links every CH-nnn reference to its write-up.
const RE = /\bTBD\b(?::\s*(?:[^.;()\n]|\([^()\n]*\))*)?|\bCH-\d{3}\b/g;

export function rehypeTbd() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || parent.tagName === 'mark' || parent.tagName === 'a') return;
      RE.lastIndex = 0;
      if (!RE.test(node.value)) return;
      RE.lastIndex = 0;
      const out = [];
      let last = 0;
      for (const m of node.value.matchAll(RE)) {
        if (m.index > last) out.push({ type: 'text', value: node.value.slice(last, m.index) });
        if (m[0].startsWith('CH-')) {
          out.push({ type: 'element', tagName: 'a', properties: { href: `/lab/${m[0].toLowerCase()}/`, className: ['xref'] }, children: [{ type: 'text', value: m[0] }] });
        } else {
          out.push({ type: 'element', tagName: 'mark', properties: { className: ['tbd'], title: 'Placeholder: not yet supplied' }, children: [{ type: 'text', value: m[0] }] });
        }
        last = m.index + m[0].length;
      }
      if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
      return index + out.length;
    });
  };
}
