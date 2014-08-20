var $           = require('jquery');
var dimensions  = require('./../../../../minimap/assets/js/lib/dimensions');

exports.update_bg = function() {
  "use strict";

  var $bg = $('body'),
      current_dimensions = dimensions.current();

  var world_width   = current_dimensions.world_width,
      world_height  = current_dimensions.world_height,
      view_width    = current_dimensions.view_width,
      view_height   = current_dimensions.view_height,
      scroll_top    = current_dimensions.view_scroll_top,
      scroll_left   = current_dimensions.view_scroll_left;

  var open_width    = '0px',
      closed_width  = '30px',
      border_color  = '#FF4136';

  // left border
  if(scroll_left > 0) {
    $bg.css('border-left', 'solid ' + open_width + ' ' + border_color);
  } else {
    $bg.css('border-left', 'solid ' + closed_width + ' ' + border_color);
  }

  // right border
  if((scroll_left + view_width) < world_width ) {
    $bg.css('border-right', 'solid ' + open_width + ' ' + border_color);
  } else {
    $bg.css('border-right', 'solid ' + closed_width + ' ' + border_color);
  }

  // top border
  if(scroll_top > 0) {
    $bg.css('border-top', 'solid ' + open_width + ' ' + border_color);
  } else {
    $bg.css('border-top', 'solid ' + closed_width + ' ' + border_color);
  }

  // bottom border
  if((scroll_top + view_height) < world_height) {
    $bg.css('border-bottom', 'solid ' + open_width + ' ' + border_color);
  } else {
    $bg.css('border-bottom', 'solid ' + closed_width + ' ' + border_color);
  }
};
