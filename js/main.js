$(document).ready(function () {
  $(".invest").hover(function () {
    $(this).toggleClass("invest__active");
  });
  let widthCarousel = window.innerWidth;
  if (widthCarousel < 739) {
    $(".owl-carousel").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 1,
      nav: false,
      dots: false
    });
  }
});

(function () {
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };
  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function (e) { hamburger.doToggle(e); });
}());

