# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready ->
  $(window).scroll -> 
    console.log('hello')
    sticky = $('.sticky-header')
    scroll = $(window).scrollTop()
    if scroll > 100

      sticky.addClass 'fixed'
    else
      sticky.removeClass 'fixed'