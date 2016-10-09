var hbs = require('express-hbs');

module.exports = function () {
  hbs.registerHelper(
    'gallery-post-split-title',
    function (title) {
      var parts = title.split(' '),
          output = '<h2>' + parts.splice(0, 1) + '</h2>';

      if (parts.length > 0) {
        output += '<h3>' + parts.join(' ') + '</h3>';
      }

      return new hbs.SafeString(output);
  });
};
