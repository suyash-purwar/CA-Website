// Code for dropdowns in nav
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
      constrain_width: false,
      hover: true,
      gutter: ($('.dropdown-content').width()*3)/2.5 + 5,
      belowOrigin: true,
      alignment: 'right'
    });
})()

// For sidenav
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
   if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
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