'use strict';

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const subscribeForm = document.getElementById('subscribeForm');
const langBtn = document.querySelector('.header__lang');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    menuBtn.setAttribute('aria-expanded', isOpen.toString());
    nav.setAttribute('aria-hidden', (!isOpen).toString());
  });

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
    });
  });
}

if (langBtn) {
  langBtn.addEventListener('click', () => {
    const isUa = langBtn.textContent.trim() === 'UA-';

    langBtn.textContent = isUa ? 'EN-' : 'UA-';
  });
}

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = subscribeForm.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
      emailInput.focus();

      return;
    }

    subscribeForm.reset();
  });
}
