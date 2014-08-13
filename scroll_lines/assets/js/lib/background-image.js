function BackgroundImage(old_properties) {
  this.old_properties = old_properties;
}

BackgroundImage.prototype.new_background_image = function(new_degree){

  var property_prefix       = "repeating-linear-gradient(";
  var properties            = this.old_properties.split('deg');
  var last_property_element = properties[ properties.length - 1 ];

  return property_prefix + new_degree + "deg" + last_property_element;
};

module.exports = BackgroundImage;
