var world   = require('./document-dimensions');
var view    = require('./window-dimensions');

exports.current = function() {
  "use strict";

  return {
    'world_width':  world.width(),
    'world_height': world.height(),
    'view_width':   view.width(),
    'view_height':  view.height(),
    'view_scroll_top': view.scroll_top(),
    'view_scroll_left': view.scroll_left()
  };
};
