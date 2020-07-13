import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {

  $('#backtotop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    },'slow');
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $("#backtotop").css("display", "flex").fadeIn();
    } else {
      $("#backtotop").fadeOut();
    }
  });

});
