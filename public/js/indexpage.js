window.sr = ScrollReveal({reset: true});


let i = 0;
$('.carousel.carousel-slider').carousel({
   fullWidth: true,
   indicators: true
});

function next() {
   $('.carousel').carousel('next', 1);
}

setInterval(next, 10000)
