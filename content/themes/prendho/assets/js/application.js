!function(){var i=function(i){this.$el=i,this.initialize()};i.prototype.initialize=function(){this.$el.slick({autoplay:!0,slidesToShow:3,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]})},$(document).ready(function(){$(".responsive-carousel").each(function(){new i($(this))})})}();