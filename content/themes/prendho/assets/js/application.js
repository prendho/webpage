!function(){window.prendhoHelpers||(window.prendhoHelpers={}),prendhoHelpers.defaultSlickOptions={prevArrow:'<span class="glyphicon glyphicon-menu-left"></span><span class="separator"></span>',nextArrow:'<span class="glyphicon glyphicon-menu-right"></span>'}}();
$(document).ready(function(){$("#header-carousel .items-wrapper").slick($.extend({},window.prendhoHelpers.defaultSlickOptions,{appendArrows:".carousel-controls"}))});
!function(){var i=function(i){this.$el=i,this.initialize()};i.prototype.initialize=function(){this.$el.slick($.extend({},window.prendhoHelpers.defaultSlickOptions,{autoplay:!0,slidesToShow:3,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}))},$(document).ready(function(){$(".responsive-carousel").each(function(){new i($(this))})})}();