module.exports = function() {
  [
    'gallery-post-split-title'
  ].forEach(function (helper) {
    require('./' + helper)();
  });
};
