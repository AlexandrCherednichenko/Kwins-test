const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
   burgerBtn.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});

// const upScroll = document.querySelector('.arrow-up');

// upScroll.addEventListener('click', backToTop);
// function backToTop() {
//    if (window.pageYOffset > 0) {
//       window.scrollBy(0, -40);
//       setTimeout(backToTop, 0);
//    }
// }

const scrollUp = () => {

   const upBtn = document.querySelector('.arrow-up');

   function trackScroll() {
      const scrolled = window.pageYOffset;

      if (scrolled > 520) {
         upBtn.style.display = 'block';
      } else {
         upBtn.style.display = 'none';
      }
   }

   function backToTop() {
      if (window.pageYOffset > 0) {
         window.scrollBy(0, -60);
         setTimeout(backToTop, 0);
      }
   }

   window.addEventListener('scroll', trackScroll);
   upBtn.addEventListener('click', backToTop);

};

scrollUp();