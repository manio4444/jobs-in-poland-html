import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'jquery.mmenu';

$(document).ready(function() {
  const $hamburger = $('.header-navigation__hamburger');
  const $mobileContent = $('.header-navigation__menu-mobile');
  let mmenu = $($mobileContent).mmenu();

  $hamburger.click(function () {
    if ($hamburger.hasClass('close')) {
      mmenu.data("mmenu").close();
      $hamburger.removeClass('close');
    } else {
      mmenu.data("mmenu").open();
      $hamburger.addClass('close');
    }
  });

  $('#mm-blocker').click(function () {
    mmenu.data("mmenu").close();
    $hamburger.removeClass('close');
  });
});
