const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

year.textContent = new Date().getFullYear();

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const service = formData.get('service');
  const message = formData.get('message');

  const subject = encodeURIComponent(`New website project request from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService Needed: ${service}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:hello@youragency.com?subject=${subject}&body=${body}`;
});
