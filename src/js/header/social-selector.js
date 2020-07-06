import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  const $socialSelector = $('.header-navigation__social-share');
  const $socialContent = $('.header-navigation__social-list');

  tippy($socialSelector[0], {
    content: $socialContent[0].innerHTML,
    allowHTML: true,
    interactive: true,
    theme: 'light-border',
  });

});
