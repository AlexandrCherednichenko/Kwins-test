const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
   burgerBtn.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});

const upScroll = document.querySelector('.arrow-up');

upScroll.addEventListener('click', backToTop);
function backToTop() {
   if (window.pageYOffset > 0) {
      window.scrollBy(0, -40);
      setTimeout(backToTop, 0);
   }
}