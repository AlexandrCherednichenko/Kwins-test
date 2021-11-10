const upScroll = document.querySelector('.arrow-up');

upScroll.addEventListener('click', backToTop);

function backToTop() {
   if (window.pageYOffset > 0) {
      window.scrollBy(0, -40);
      setTimeout(backToTop, 0);
   }
}