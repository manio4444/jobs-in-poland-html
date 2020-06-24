import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'slick-carousel';


$(document).ready(function() {

  const sliderDestkop = $('.home_slider--init.desktop');
  const sliderMobile = $('.home_slider--init.mobile');

  // if (window.matchMedia("(orientation: portrait)").matches) {
  //   const sliderToShow = sliderMobile;
  //   sliderDestkop.hide();
  // } else {
  //   const sliderToShow = sliderDestkop;
  //   sliderMobile.hide();
  // }
  const sliderToShow = sliderDestkop; //temp

  sliderToShow.slick({
    // centerMode: true,
    // variableWidth:true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: sliderToShow.attr('data-interval'),
    rows: 0, // fix for not adding <div> wrapper inside slide's
    // infinite: false,
    // asNavFor: $('#section_realization .r_slider_sub'),
    // focusOnSelect: true,
  });

});
