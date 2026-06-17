// Shared nav behaviour
document.addEventListener('DOMContentLoaded', () => {
  // Scrolled class
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

  // Mobile toggle
  const ham = document.querySelector('.nav-hamburger');
  const mob = document.querySelector('.mobile-nav');
  if (ham && mob) ham.addEventListener('click', () => mob.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (mob && mob.classList.contains('open') && !mob.contains(e.target) && !ham.contains(e.target))
      mob.classList.remove('open');
  });

  // Active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a[data-page]').forEach(a => {
    if (a.getAttribute('href') === path || (path === 'index.html' && a.getAttribute('href') === 'index.html'))
      a.classList.add('active');
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });

  // Contact form
  const form = document.querySelector('.contact-form-js');
  if (form) {
    form.querySelector('.form-submit').addEventListener('click', () => {
      const name  = form.querySelector('#fname')?.value.trim();
      const email = form.querySelector('#femail')?.value.trim();
      if (!name || !email) { alert('Please fill in your name and email address.'); return; }
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending…'; btn.disabled = true;
      setTimeout(() => {
        btn.style.display = 'none';
        form.querySelector('.success-msg').style.display = 'block';
      }, 900);
    });
  }
});
