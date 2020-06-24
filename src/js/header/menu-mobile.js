import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  const $hamburger = $('.header-navigation__hamburger');
  const $mobile_overlay = $('.mobile-overlay');

  $hamburger.click(function () {
    $mobile_overlay.toggleClass('is-active');
  });

});
