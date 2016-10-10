$(document).ready(function () {
  $('#header-carousel .items-wrapper').slick(
    $.extend({}, window.prendhoHelpers.defaultSlickOptions, {
      appendArrows: '.carousel-controls'
    })
  );
});
