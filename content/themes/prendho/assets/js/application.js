!function(){window.prendhoHelpers||(window.prendhoHelpers={}),prendhoHelpers.defaultSlickOptions={prevArrow:'<span class="glyphicon glyphicon-menu-left"></span><span class="separator"></span>',nextArrow:'<span class="glyphicon glyphicon-menu-right"></span>'}}();
!function(){var t=function(){this.$gscInput=null,this.iconSelector=".gcse-fedes-search .glyphicon",this.inputSelector=".gcse-fedes-search input[type=search]",this.formSelector=".gcse-fedes-search form",this.gscBtnSelector=".gsc-search-button input",this.gscInputSelector=".gsc-input-box input",this.listeners()};t.prototype.listeners=function(){$(document).on("keyup",this.inputSelector,$.proxy(this.updateGscInput,this)),$(document).on("click",this.iconSelector,$.proxy(this.triggerAndSearch,this)),$(document).on("submit",this.formSelector,$.proxy(this.triggerAndSearch,this))},t.prototype.updateGscInput=function(t){this.gscInput()&&this.gscInput().val(t.currentTarget.value)},t.prototype.gscInput=function(){return!this.$gscInput&&$(this.gscInputSelector).length>0&&(this.$gscInput=$(this.gscInputSelector)),this.$gscInput},t.prototype.triggerAndSearch=function(){return this.triggerInputChange(),this.performSearch()},t.prototype.triggerInputChange=function(){$(this.inputSelector).trigger("keyup")},t.prototype.performSearch=function(){return $(this.gscBtnSelector).trigger("click"),!1},new t}();
$(document).ready(function(){$("#header-carousel .items-wrapper").slick($.extend({},window.prendhoHelpers.defaultSlickOptions,{appendArrows:".carousel-controls"}))});
$(function(){var t,e,n=$("body").find(".table");if(n.length>0){var a=new showdown.Converter;a.setOption("tables",!0),n.map(function(n,o){e=$(o).text(),t=a.makeHtml(e),$(o).empty().append(t)})}});
!function(t){var a=parseInt(t("#page-total").html()),e=parseInt(t("#page-current").html()),l=parseInt(t("#total-elements").html());if(0===l)t("#pagination-list").hide();else for(var r=1;r<=a;r++){var i=t("<li />"),n=t("<a />",{text:r,href:"/tag/blog/page/"+r});e==r&&n.attr("class","active"),i.append(n),i.insertBefore(t("#pagination-list li:last"))}t(".breadcrumb #blog").html("All")}(jQuery);
!function(){var i=function(i){this.$el=i,this.initialize()};i.prototype.initialize=function(){this.$el.slick($.extend({},window.prendhoHelpers.defaultSlickOptions,{autoplay:!0,slidesToShow:3,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}))},$(document).ready(function(){$(".responsive-carousel").each(function(){new i($(this))})})}();
$(function(){$(".socialNetworks a").on("click",function(){return window.open(this.href,"share","width=550,height=300"),!1})});