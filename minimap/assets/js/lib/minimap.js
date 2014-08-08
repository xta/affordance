var $ = require('jquery');

function Minimap(map_element, view_element) {
  this.map_element  = map_element;
  this.view_element = view_element;
}

Minimap.prototype.sync = function(dimensions){

  console.log('syncing...' + new Date() );

  var base_unit     = 100,
      world_width   = dimensions.world_width,
      world_height  = dimensions.world_height,
      view_width    = dimensions.view_width,
      view_height   = dimensions.view_height,
      max_width     = base_unit * (world_width / world_height),
      max_height    = base_unit * (world_height / world_width),
      width_ratio   = view_width / world_width,
      height_ratio  = view_height / world_height,
      scroll_top    = dimensions.view_scroll_top,
      scroll_left   = dimensions.view_scroll_left,
      top_offset    = (scroll_top / world_height) * base_unit,
      left_offset   = (scroll_left / world_width) * base_unit;

  // set width & height on container
  this.map_element.width( max_width );
  this.map_element.height( max_height );

  // set width & height on subsection (relatively)
  this.view_element.width( width_ratio * max_width );
  this.view_element.height( height_ratio * max_height );

  // place subsection in container based on scroll position
  this.view_element.css({top: top_offset, left: left_offset});
};

module.exports = Minimap;
