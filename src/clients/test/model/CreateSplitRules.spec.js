/**
 * Parcela Express API
 * Parcela Express API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ParcelaExpressApi);
  }
}(this, function(expect, ParcelaExpressApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ParcelaExpressApi.CreateSplitRules();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateSplitRules', function() {
    it('should create an instance of CreateSplitRules', function() {
      // uncomment below and update the code to test CreateSplitRules
      //var instane = new ParcelaExpressApi.CreateSplitRules();
      //expect(instance).to.be.a(ParcelaExpressApi.CreateSplitRules);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ParcelaExpressApi.CreateSplitRules();
      //expect(instance).to.be();
    });

    it('should have the property seller_id (base name: "seller_id")', function() {
      // uncomment below and update the code to test the property seller_id
      //var instance = new ParcelaExpressApi.CreateSplitRules();
      //expect(instance).to.be();
    });

    it('should have the property sale_id (base name: "sale_id")', function() {
      // uncomment below and update the code to test the property sale_id
      //var instance = new ParcelaExpressApi.CreateSplitRules();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.CreateSplitRules();
      //expect(instance).to.be();
    });

    it('should have the property no_cost (base name: "no_cost")', function() {
      // uncomment below and update the code to test the property no_cost
      //var instance = new ParcelaExpressApi.CreateSplitRules();
      //expect(instance).to.be();
    });

  });

}));
