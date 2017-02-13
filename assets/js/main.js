'use strict'

  $(window).on('load', function(){
   $(".preloader").delay(3500).fadeOut();
 });





 //isotope Image Gallery

 $('.grid').isotope({
     // set itemSelector so .grid-sizer is not used in layout
     itemSelector: '.grid-item',
     percentPosition: true,
     masonry: {
         // use element for option
         columnWidth: '.grid-sizer'
     }
 });

 // init Isotope
 var $grid = $('.grid').isotope({
     // options...
 });

 $('.portfolio_list ul li').on('click', function() {
     var bto = $(this).attr('data-filter');
     $('.grid').isotope({
         filter: bto
     });
 });






 /*************************************/ //Testimonial Carousel

 $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     smartSpeed: 1500,
     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 1
         },
         1000: {
             items: 1
         }
     }
 })
 var owl = $('.owl-carousel');
 owl.owlCarousel();

 $('.owl-next').click(function() {
     owl.trigger('next.owl.carousel');
 })
 // Go to the previous item
 $('.owl-prev').click(function() {
     // With optional speed parameter
     // Parameters has to be in square bracket '[]'
     owl.trigger('prev.owl.carousel', [300]);
 })


 /////////////////////////////////
 // Menu Item

 $(".menu-item").click(function() {
     $(this).toggleClass("m_active");
     $(".menu-content").toggleClass("over");

 });



 ////////////////////////////////////////////////
 $(window).scroll(function() {
     var sticky = $('.header_top'),
         scroll = $(window).scrollTop();

     if (scroll >= 5) sticky.addClass('fixed');
     else sticky.removeClass('fixed');
 });




 ///////////////////////////////////////////////
 //Animated text
 $(function() {
     $(".animated_heading").typed({
         strings: ["", "THIS IS, PAUL PLANKER"],
         typeSpeed: 200,
     });
 });




 /////////////////////////////////////////
 smoothScroll.init({
     selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
     selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
     speed: 500, // Integer. How fast to complete the scroll in milliseconds
     easing: 'easeInOutCubic', // Easing pattern to use
     offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
     callback: function(anchor, toggle) {} // Function to run after scrolling
 });




 $(".menu_nav>li").click(function() {
     $(".menu-content").removeClass("over");
     $(".menu-item").removeClass("m_active");
 });





 /*************************************/
 var wow = new WOW({
     boxClass: 'wow', // animated element css class (default is wow)
     animateClass: 'animated', // animation css class (default is animated)
     offset: 0, // distance to the element when triggering the animation (default is 0)
     mobile: true, // trigger animations on mobile devices (default is true)
     live: true, // act on asynchronously loaded content (default is true)
     callback: function(box) {
         // the callback is fired every time an animation is started
         // the argument that is passed in is the DOM node being animated
     },
     scrollContainer: null // optional scroll container selector, otherwise use window
 });
 wow.init();
