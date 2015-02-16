
var _ = require('underscore');
var Backbone = require('backbone');

module.exports.mixin = function(o) {
  return _.extend(o, Backbone.Events);
}
