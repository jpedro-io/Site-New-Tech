// New Tech — interações leves (sem dependências)
const nav = document.querySelector('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });

// Revelação em scroll com stagger automático (respeita prefers-reduced-motion via CSS)
const alvos = document.querySelectorAll('section, .stats .stat, .rows .row, .tl .ev, .grid3 .col, .pf .pc, .steps .step, .float, footer .social a, .cta .btn');
const io = new IntersectionObserver(entradas => entradas.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.15 });
alvos.forEach((el, i) => { el.style.setProperty('--d', (i % 6) * 70 + 'ms'); el.classList.add('reveal'); io.observe(el); });
