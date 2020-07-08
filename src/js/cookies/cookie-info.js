import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'jquery.cookie';

$(document).ready(function() {
  const cookieName = 'cookie_notice';
  const myCookie = $.cookie(cookieName);
  const cookieDiv = $('#cookieinfo');
  const footerDiv = $('footer#section_footer');
  const cookieOnClick = $('#cookieinfo .close');

  if (myCookie != 'yes') {
    cookieDiv.removeClass('hidden');
    footerDiv.addClass('cookable');
  }

  cookieOnClick.click(function(){
    cookieDiv.slideUp();
    footerDiv.removeClass('cookable');
    $.cookie(cookieName, 'yes', { expires: 365 });
  });
});
