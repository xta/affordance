var $           = require('jquery');
var dimensions  = require('./../../../minimap/assets/js/lib/dimensions');
var colorFlip   = require('./lib/color-flip');

$(function() {

  "use strict";

  var initial_body_bg   = $('body').css('background-color');
  var initial_h1_color  = $('h1').css('color');
  var initial_p_color   = $('p').css('color');

  $(window).scroll(function() {

    var current_dimensions  = dimensions.current(),
        world_height        = current_dimensions.world_height,
        view_height         = current_dimensions.view_height,
        scroll_top          = current_dimensions.view_scroll_top,
        percentage          = (scroll_top / (world_height - view_height)),

        new_bg              = colorFlip.flip( initial_body_bg, percentage ),
        new_h1              = colorFlip.flip( initial_h1_color, percentage ),
        new_p               = colorFlip.flip( initial_p_color, percentage );

    $('body').css('background-color', new_bg);
    $('h1').css('color', new_h1);
    $('p').css('color', new_p);
  });

});
