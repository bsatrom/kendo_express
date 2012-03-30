
/*
 * GET home page.
*/

(function() {

  exports.index = function(req, res) {
    return res.render('index', {
      title: 'Express with CoffeeScript!'
    });
  };

}).call(this);
