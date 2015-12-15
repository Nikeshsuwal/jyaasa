//= require jquery
//= require bootstrap-sprockets
//= require classie
//= require showRight
//= require slide
//= require owl.carousel



$('.js-nav').on('click', function(){
  $('.js-nav-move').toggleClass('nav-open');
});



$(document).ready(function () {
      var bigSlideAPI = ($('.menu-link').bigSlide({
          side: 'right',
          menuWidth: "320px"
      })).bigSlideAPI;
      $('.menu-close').click(function() {
        bigSlideAPI.view.toggleClose();
      });
  $(".arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#what-we-do").offset().top
    }, 2000);
  });
  $(".arrow-up").click(function() {
    $('html, body').animate({
        scrollTop: $("html, body").offset().top
    }, 2000);
  });
});



// $(document).ready(function(){
//   $(window).scroll(function(){
//     if($(window).scrollTop() > $(window).height()){
//         $(".menu-link").css({"color":"#000"});   
//     }
//     else{
//       $(".menu-link").css({"color":"#fff"});   
//     }

//   });
// });



$(document).ready(function() {
 $("#owl-demo").owlCarousel({
     navigation : true, // Show next and prev buttons
     slideSpeed : 300,
     paginationSpeed : 400,
     singleItem:true
     // "singleItem:true" is a shortcut for:
     // items : 1, 
     // itemsDesktop : false,
     // itemsDesktopSmall : false,
     // itemsTablet: false,
     // itemsMobile : false
  });
});


$(function(){
  $('.main-menu ul').hide()
  $('.nav-toggle').on('click',function(){
    $('.main-menu ul').toggle();
    $('.main-menu').toggleClass('open');
  });
})