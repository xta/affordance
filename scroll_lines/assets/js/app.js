var $           = require('jquery');
var dimensions  = require('./../../../minimap/assets/js/lib/dimensions');
var bgImage     = require('./lib/background-image');

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
        degree        = base_unit - ((scroll_top / (world_height - view_height)) * base_unit),
        body_bg       = new bgImage( $bg.css("background-image") ),
        new_body_bg   = body_bg.new_background_image( degree );

    $bg.css("background-image", new_body_bg);
  });

});
