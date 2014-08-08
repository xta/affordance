exports.width = function() {
  "use strict";

  return window.innerWidth;
};

exports.height = function() {
  "use strict";

  return window.innerHeight;
};

exports.scroll_top = function() {
  "use strict";

  return document.body.scrollTop;
};

exports.scroll_left = function() {
  "use strict";

  return document.body.scrollLeft;
};
