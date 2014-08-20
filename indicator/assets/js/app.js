var $         = require('jquery');
var indicator = require('./lib/indicator');

$(function() {

  indicator.update_bg();

  $(window).scroll(function() {
    indicator.update_bg();
  });

});
