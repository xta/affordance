var $           = require('jquery');
var dimensions  = require('./lib/dimensions');
var minimap     = require('./lib/minimap');

$(function() {

  "use strict";

  var $map_element  = $('.world'),
      $view_element = $('.view');

  // setup globals
  window.MINIMAP  = window.MINIMAP || {};
  MINIMAP.map     = new minimap($map_element, $view_element);

  var sync_map = function() {
    // pass current dimensions into minimap (which updates minimap)
    MINIMAP.map.sync( dimensions.current() );
  };

  // on window resize

  // on browser portrait to landscape swap

  // on scroll, show width & height status on logo
  $(window).scroll(function() {
    sync_map();
  });

  // page init
  sync_map();
});
