(function($) {
  var $window = $(window),
        $body = $('body');
  "use strict"; // Start of use strict
jQuery(document).ready(function($){
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
 // Hamburguer X icon function
  $('#navbarSupportedContent').on('hide.bs.collapse', function () {
     $('.navbar-toggler').removeClass('open');
   })
   $('#navbarSupportedContent').on('show.bs.collapse', function () {
     $('.navbar-toggler').addClass('open');
   })

   /*=============================
              Sticky header
  ==============================*/
      $window.on('scroll', function() {

        if ($("nav").offset().top > 100) {

          $('nav').addClass('navbar-shadow');

            }
             else {
              $('nav').removeClass('navbar-shadow');
            }
      });

});
})(jQuery); // End of use strict
