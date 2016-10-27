$(function(){
  var converter = new showdown.Converter(),
      $tables   = $('body').find('.tableMarkdown'),
      tableMarkdown,
      tableContent;

  /* Set Options */
  converter.setOption('tables', true);

  $tables.map(function(i, table){
    tableContent = $(table).text();
    tableMarkdown = converter.makeHtml(tableContent);
    $(table)
      .empty()
      .append(tableMarkdown);
  });
})
