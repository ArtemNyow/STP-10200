const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const navLinks = document.querySelectorAll('.mobile-nav-item-link');

openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'close';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'close';
  });
});
