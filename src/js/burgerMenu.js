const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const navList = document.querySelectorAll('.mobile-nav-item-link');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
});

navList.forEach(link => {
  link.addEventListener('click', () => { 
    burgerMenuEl.dataset.visible = 'close';
  })
})
