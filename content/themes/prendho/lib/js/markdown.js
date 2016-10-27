$(function(){
  var $tables   = $('body').find('.table'),
      tableMarkdown,
      tableContent;

  /* Set Options */
  if($tables.length > 0){
    var converter = new showdown.Converter();
        converter.setOption('tables', true);

    $tables.map(function(i, table){
      tableContent = $(table).text();
      tableMarkdown = converter.makeHtml(tableContent);
      $(table)
        .empty()
        .append(tableMarkdown);
    });
  }
});
