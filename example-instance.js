
function MyObject() {
  require('bev').mixin(this);

  this.myFn = function() {
  }
};

// You rarely export an instance, but this required for the unit test
module.exports = new MyObject();
