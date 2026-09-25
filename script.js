const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .project, .skill-card, .extra-card, .timeline-item, .github-banner')
  .forEach((el) => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
