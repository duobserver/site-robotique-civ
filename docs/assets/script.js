var navBar = document.getElementById("navbar");
var scrollTop = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
window.onload = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
    navBar.classList.add("shadow");
  } else {
    scrollTop.style.display = "none";
    navBar.classList.remove("shadow");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.owl-carousel').owlCarousel({
  items: 6,
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  autoWidth: true,
  autoplay:true,
  autoplayTimeout:2500,
});