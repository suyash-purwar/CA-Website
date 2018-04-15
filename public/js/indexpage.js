// Initialization for scrollreveal plugin
window.sr = ScrollReveal({reset: true});

// Code for carousel
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

// Code for dropdown button in nav
(function() {
   $('.dropdown-button').dropdown({
      stopPropagating: false,
      belowOrigin: true,
      constrainWidth: false,
      inDuration: 200,
      hover: true
   })

   $('.services-subsection-1').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false,
      hover: true,
      gutter: ($('.dropdown-content').width()*3)/2.5 + 5,
      belowOrigin: true,
      alignment: 'right'
    });
})()

// For sidenav
// Code for side nav to show up on dragging or clicking
$('.button-collapse').sideNav({
  menuWidth: 250,
  edge: 'right',
  draggable: true
});

// Function for showing thw navbar after some scrolling
window.onscroll = function() {
   navbarViewEngineForLargeScreens();
   navbarViewEngineForSmallScreens();
}
 
function navbarViewEngineForLargeScreens() {
   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      $('#large-screen-nav').css('display', 'block');
   } else {
      $('#large-screen-nav').css('display', 'none');
   }
}

function navbarViewEngineForSmallScreens() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $('#small-screen-nav').css('background-color', 'rgb(22, 34, 49)');
  } else {
    $('#small-screen-nav').css('background-color', 'rgba(128, 128, 128, 0.39)');
  }
}

// These animations are only applied on home page
// These animations are made with scrollreveal plugin
// For animations
sr.reveal('.welcome-section', {
  duration: 2000,
  origin: 'bottom'
});

sr.reveal('#quality-card', {
  duration: 1000,
  // rotate: {x: 30, y: 30, z: 0}
  origin: 'bottom'
}, 200);

sr.reveal('.QA-section-header', {
  duration: 1000,
  origin: 'top',
  distance: '40px'
});

sr.reveal('.question-container-1', {
  duration: 1000,
  origin: 'left'
});

sr.reveal('.question-container-2', {
  duration: 1000,
  origin: 'right'
});

sr.reveal('.question-container-3', {
  duration: 1000,
  origin: 'left'
});

sr.reveal('.services-section-header', {
  duration: 1000,
  origin: 'top'
});

sr.reveal('.service', {
  duration: 1500,
  origin: 'top'
}, 100);

sr.reveal('.map-header', {
  duration: 1000,
  origin: 'top'
});

sr.reveal('.map-wrapper > div:nth-child(1)', {
  duration: 1000,
  origin: 'left'
});

sr.reveal('.map-wrapper > div:nth-child(2)', {
  duration: 1000,
  origin: 'right'
});

// Animations for form
sr.reveal('.contactus-header', {
  origin: 'top',
  duration: 1000
});

sr.reveal('.contact-form', {
  duration: 2000
});