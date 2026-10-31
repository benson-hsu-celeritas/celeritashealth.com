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

// Color mode: system preference by default; the choice is kept locally. The control reads "Light / Dark" with the active word underlined.
document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  const sync = () => {
    const dark = document.documentElement.dataset.theme === 'dark' ||
      (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    btn.dataset.active = dark ? 'dark' : 'light';
    document.querySelector('meta[data-theme-color]')?.setAttribute('content', dark ? '#161616' : '#F6F4EE');
    btn.setAttribute('aria-label', `Light / Dark. Color mode is ${dark ? 'dark' : 'light'}; switch to ${dark ? 'light' : 'dark'}.`);
  };
  btn.hidden = false;
  sync();
  btn.addEventListener('click', () => {
    const next = btn.dataset.active === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
    sync();
  });
});
