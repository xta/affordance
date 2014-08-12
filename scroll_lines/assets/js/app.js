var $           = require('jquery');
var dimensions  = require('./../../../minimap/assets/js/lib/dimensions');

$(function() {

  "use strict";

  // on scroll
  $(window).scroll(function() {

    var $bg = $('body');
    var current_dimensions = dimensions.current();

    var base_unit     = 90,
        world_height  = current_dimensions.world_height,
        view_height   = current_dimensions.view_height,
        scroll_top    = current_dimensions.view_scroll_top,
        degree        = base_unit - ((scroll_top / (world_height - view_height)) * base_unit);

    $bg.css("background-image", "repeating-linear-gradient(" + degree + "deg, rgb(0, 0, 0), rgb(0, 0, 0) 10px, rgb(51, 51, 51) 10px, rgb(51, 51, 51) 20px)");
  });

});
