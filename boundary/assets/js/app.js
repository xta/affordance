var $         = require('jquery');
var boundary  = require('./lib/boundary');

$(function() {

  boundary.update_bg();

  $(window).scroll(function() {
    boundary.update_bg();
  });

});
