var color = require('onecolor');

exports.flip = function(old_bg_color_property, percentage) {
  "use strict";

  var myColor     = color(old_bg_color_property),
      degrees     = 0.5, // 180 degrees in onecolor
      conversion  = percentage * degrees;

  return myColor.hue(conversion, true).css();
};
