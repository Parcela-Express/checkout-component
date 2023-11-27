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
    instance = new ParcelaExpressApi.CreateGoalDto();
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

  describe('CreateGoalDto', function() {
    it('should create an instance of CreateGoalDto', function() {
      // uncomment below and update the code to test CreateGoalDto
      //var instane = new ParcelaExpressApi.CreateGoalDto();
      //expect(instance).to.be.a(ParcelaExpressApi.CreateGoalDto);
    });

    it('should have the property reference_date (base name: "reference_date")', function() {
      // uncomment below and update the code to test the property reference_date
      //var instance = new ParcelaExpressApi.CreateGoalDto();
      //expect(instance).to.be();
    });

    it('should have the property business_days (base name: "business_days")', function() {
      // uncomment below and update the code to test the property business_days
      //var instance = new ParcelaExpressApi.CreateGoalDto();
      //expect(instance).to.be();
    });

    it('should have the property overall_goal (base name: "overall_goal")', function() {
      // uncomment below and update the code to test the property overall_goal
      //var instance = new ParcelaExpressApi.CreateGoalDto();
      //expect(instance).to.be();
    });

    it('should have the property responsibles (base name: "responsibles")', function() {
      // uncomment below and update the code to test the property responsibles
      //var instance = new ParcelaExpressApi.CreateGoalDto();
      //expect(instance).to.be();
    });

  });

}));