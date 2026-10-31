const RE = /\bTBD\b(?::\s*(?:[^.;()\n]|\([^()\n]*\))*)?/g;

export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Escapes a plain string and wraps TBD tokens as visible markers. Use with set:html. */
export function tbd(s: string): string {
  return escapeHtml(s).replace(RE, (m) => `<mark class="tbd" title="Placeholder: not yet supplied">${m}</mark>`);
}

/** Same, applied to the text segments of an HTML string (tags untouched). */
export function tbdHtml(html: string): string {
  return html.replace(/(^|>)([^<]+)/g, (_, pre, text) =>
    pre + text.replace(RE, (m: string) => `<mark class="tbd" title="Placeholder: not yet supplied">${m}</mark>`),
  );
}

export const isTbd = (s: string | undefined): boolean => !!s && /\bTBD\b/.test(s);
