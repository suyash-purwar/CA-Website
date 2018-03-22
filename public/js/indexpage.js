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

(function() {
   $('.dropdown-button').dropdown({
      stopPropagating: false,
      belowOrigin: true,
      constrainWidth: false,
      inDuration: 200
   })

   $('.services-subsection-1').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: ($('.dropdown-content').width()*3)/2.5 + 5, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    });

    $('.services-subsection-2').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: ($('.dropdown-content').width()*3)/2.5 + 5, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    });

    $('.services-subsection-3').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: ($('.dropdown-content').width()*3)/2.5 + 5, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    });
})()

// For search modal
$('#modal1').modal({
  endingTop: '20%',
  inDuration: 500,
  outDuration: 300
});

// Function for showing thw navbar after some scrolling
window.onscroll = function() {
   navbarViewEngine()
}
 
function navbarViewEngine() {
   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      $('#large-screen-nav').css('display', 'block');
   } else {
      $('#large-screen-nav').css('display', 'none');
   }
}
