(function () {
  var ResponsiveCarousel = function ($el) {
    this.$el = $el;
    this.initialize();
  };

  ResponsiveCarousel.prototype.initialize = function () {
    this.$el.slick({
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  };

  $(document).ready(function () {
    $(".responsive-carousel").each(function () {
      new ResponsiveCarousel( $(this) );
    });
  });
})();
