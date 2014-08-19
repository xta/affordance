var $           = require('jquery');
var dimensions  = require('./../../../../minimap/assets/js/lib/dimensions');

exports.update_bg = function() {
  "use strict";

  var $bg = $('body'),
      current_dimensions = dimensions.current(),
      updated_bg_image = ["url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANElEQVQYV2NkIBIwEqmOgTyFd+/e/Q+zQVlZGcUQFA5IIUgBjEZ2FoZCokzE5zHyPEMVEwFV+xALbUfg9AAAAABJRU5ErkJggg==)"],
      left_img    = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAALklEQVQYV2NkIBIwEqmOgTSF9bf//29UZcSriZEYRSDngU0hRjFpbiTG59Q3EQBNLgwL/S+ddQAAAABJRU5ErkJggg==)",
      right_img   = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAALElEQVQYV2NkIBIwEqmOgToK62///9+oygg2jKCJMMV4FZJkIsyzBK2mnUIADR8MC0u33qIAAAAASUVORK5CYII=)",
      top_img     = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAKUlEQVQYV2NkQAP1t///b1RlZEQXRxGAKcKmGEMnukkw/qhCXCEDFgcAFYgMC1dHANoAAAAASUVORK5CYII=)",
      bottom_img  = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAKUlEQVQYV2NkIBIwEqmOYfgqrL/9/3+jKiMjjEYOEQxfY1ME0kB08AAARMUMC++l2MkAAAAASUVORK5CYII=)";

console.log(current_dimensions);

  var world_width   = current_dimensions.world_width,
      world_height  = current_dimensions.world_height,
      view_width    = current_dimensions.view_width,
      view_height   = current_dimensions.view_height,
      scroll_top    = current_dimensions.view_scroll_top,
      scroll_left   = current_dimensions.view_scroll_left;

  // left available to scroll?
  if(scroll_left > 0) {
    updated_bg_image.push(left_img);
  }

  // right available to scroll?
  if((scroll_left + view_width) < world_width ) {
    updated_bg_image.push(right_img);
  }

  // top available to scroll?
  if(scroll_top > 0) {
    updated_bg_image.push(top_img);
  }

  // bottom available to scroll?
  if((scroll_top + view_height) < world_height) {
    updated_bg_image.push(bottom_img);
  }

  // update bg image
  $bg.css("background-image", updated_bg_image.join(','));
};
