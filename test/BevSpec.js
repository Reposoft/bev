'use strict';

var expect = require('chai').expect;

describe("bev", function() {

  it("Adds all Backbone.js's event methods to the object", function() {

    var MyObject = require('../example-constructor.js');
    var instance = new MyObject();

    expect(instance.on).to.be.a('function');
    expect(instance.once).to.be.a('function');
    expect(instance.off).to.be.a('function');
    expect(instance.trigger).to.be.a('function');
    expect(instance.listenTo).to.be.a('function');
    expect(instance.listenToOnce).to.be.a('function');
    expect(instance.stopListening).to.be.a('function');

  });

  it("Adds all Backbone.js's event methods at any time", function() {

    var instance = require('../example-instance.js');

    expect(instance.on).to.be.a('function');
    expect(instance.once).to.be.a('function');
    expect(instance.off).to.be.a('function');
    expect(instance.trigger).to.be.a('function');
    expect(instance.listenTo).to.be.a('function');
    expect(instance.listenToOnce).to.be.a('function');
    expect(instance.stopListening).to.be.a('function');

  });

  it("Returns the object for chaining", function() {

    var bev = require('bev');
    var localObject = {};
    var chainable = bev.mixin(localObject);
    expect(localObject.on).to.be.a('function');
    expect(chainable).to.exist;
    expect(chainable).to.equal(localObject);
    expect(chainable === localObject).to.be.true;
    
  });

});
