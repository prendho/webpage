(function ($) {
  var pageTotal = parseInt($('#page-total').html());
  var pageCurrent = parseInt($('#page-current').html());
  var totalElements = parseInt($('#total-elements').html());
  
  if (totalElements === 0) {
    $('#pagination-list').hide();
  }else{
    for (var i = 1; i <= pageTotal; i++) {
      var $pageNode = $('<li />'),
      $link = $('<a />', { text: i, href: '/tag/blog/page/' + i});
      if (pageCurrent == i) {
        $link.attr('class', 'active');
      }
      $pageNode.append($link);
      $pageNode.insertBefore($('#pagination-list li:last'));
    }
  }

  $(".breadcrumb #blog").html("All");
})(jQuery);
