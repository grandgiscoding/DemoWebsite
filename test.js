// Mobile nav toggle
const toggle = document.getElementById('mobile-menu-toggle');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => navbar.classList.toggle('open'));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form handler (prevents real submit)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for your message! We’ll get back to you soon.');
  e.target.reset();
});