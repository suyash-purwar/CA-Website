window.sr = ScrollReveal({reset: true});

(function () {
   $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
   });

   function next() {
      $('.carousel').carousel('next', 1);
   }

   setInterval(next, 10000);
})();

// Function for showing thw navbar after some scrolling
window.onscroll = function() {
   navbarViewEngine()
}
 
function navbarViewEngine() {
   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      $('#large-screen-nav').css('background-color', '#1A2A5A');
   } else {
      $('#large-screen-nav').css('background-color', 'transparent');
   }
}
