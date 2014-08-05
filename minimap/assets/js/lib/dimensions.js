var world   = require('./document-dimensions');
var view    = require('./window-dimensions');

var world_width   = world.width(),
    world_height  = world.height(),
    view_width    = view.width(),
    view_height   = view.height();

exports.current = function() {
  "use strict";

  return {
    'world_width':  world_width,
    'world_height': world_height,
    'view_width':   view_width,
    'view_height':  view_height
  };
};
