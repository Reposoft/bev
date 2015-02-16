
function MyObject() {

  this.myFn = function() {
  }

};

require('bev').mixin(MyObject.prototype);

module.exports = MyObject;
