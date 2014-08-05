var $ = require('jquery');

exports.width = function() {
  "use strict";

  return $(document).width();
};

exports.height = function() {
  "use strict";

  return $(document).height();
};
