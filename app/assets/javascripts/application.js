//= require jquery
//= require bootstrap-sprockets
//= require classie
//= require showRight
//= require slide


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



$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > $(window).height()){
        $(".menu-link").css({"color":"#000"});   
    }
    else{
      $(".menu-link").css({"color":"#fff"});   
    }

  });
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});