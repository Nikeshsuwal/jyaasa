//= require jquery
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
   var scroll_start = 000
   var startchange = $('#startchange')
   var offset = startchange.offset()
    if (startchange.length){
  }
})
 $(document).scroll(function() { 
    scroll_start = $(this).scrollTop()                                                                                                                                                                                                                                                        
    if(scroll_start > offset.top) {
        $(".menu-link").css('background-color', '#fff')
     } else {
        $('.menu.link').css('background-color', '#000')
     }
  })