// Header NavBar Scrolled
$(document).ready(function () {
  $(window).scroll(function () {
    var y = window.scrollY;
    if (y >= 100) {
      $("#navbar").addClass("header-scrolled");
    } else {
      $("#navbar").removeClass("header-scrolled");
    }
  });
});
// Header NavBar Scrolled End

// PreLoader Start
$(window).on("load", function () {
  $(".preloader").delay(1000).fadeOut("slow");
  $(".pre-div").delay(1000).fadeOut("slow");
});
// Preloader End

// Pure Counters Init
$(document).ready(function () {
  new PureCounter();
});

// AOS.js Init
// $(document).ready(function () {
// });
AOS.init();
