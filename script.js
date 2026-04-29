const header = document.querySelector('.site-header');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav a');

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
