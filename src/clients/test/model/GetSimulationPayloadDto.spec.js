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
    instance = new ParcelaExpressApi.GetSimulationPayloadDto();
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

  describe('GetSimulationPayloadDto', function() {
    it('should create an instance of GetSimulationPayloadDto', function() {
      // uncomment below and update the code to test GetSimulationPayloadDto
      //var instane = new ParcelaExpressApi.GetSimulationPayloadDto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetSimulationPayloadDto);
    });

    it('should have the property amount_cents (base name: "amount_cents")', function() {
      // uncomment below and update the code to test the property amount_cents
      //var instance = new ParcelaExpressApi.GetSimulationPayloadDto();
      //expect(instance).to.be();
    });

    it('should have the property splitRules (base name: "splitRules")', function() {
      // uncomment below and update the code to test the property splitRules
      //var instance = new ParcelaExpressApi.GetSimulationPayloadDto();
      //expect(instance).to.be();
    });

  });

}));
