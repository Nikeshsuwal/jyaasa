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
   });
