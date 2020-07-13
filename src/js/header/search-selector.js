import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  const $searchSelector = $('.header-navigation__search');
  const $searchContent = $('.header-navigation__search-content');

  tippy($searchSelector[0], {
    content: $searchContent[0].innerHTML,
    allowHTML: true,
    interactive: true,
    theme: 'light-border',
    placement: 'bottom',
  });

});
