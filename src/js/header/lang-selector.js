import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  const $langSelector = $('.header-navigation__lang-current');
  const $langContent = $('.header-navigation__lang-list');

  tippy($langSelector[0], {
    content: $langContent[0].innerHTML,
    allowHTML: true,
    interactive: true,
    theme: 'light-border',
    placement: 'bottom-end',
  });

});
