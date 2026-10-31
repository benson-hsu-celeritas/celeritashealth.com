// Signatures draw once on entry; sections rise once. Nothing runs under reduced motion.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = document.querySelectorAll<HTMLElement>('.sig, [data-rise]');
if (reduced || !('IntersectionObserver' in window)) {
  targets.forEach((t) => t.classList.add('in'));
} else {
  const io = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 });
  targets.forEach((t) => io.observe(t));
}

// Theme toggle (system preference by default; the choice is kept locally).
document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  const sync = () => {
    const dark = document.documentElement.dataset.theme === 'dark' ||
      (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    btn.setAttribute('aria-pressed', String(dark));
    btn.querySelector('[data-label]')!.textContent = dark ? 'Light mode' : 'Dark mode';
  };
  btn.hidden = false;
  sync();
  btn.addEventListener('click', () => {
    const dark = btn.getAttribute('aria-pressed') === 'true';
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
    sync();
  });
});
