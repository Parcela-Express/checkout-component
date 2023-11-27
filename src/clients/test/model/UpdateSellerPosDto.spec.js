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
    instance = new ParcelaExpressApi.UpdateSellerPosDto();
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

  describe('UpdateSellerPosDto', function() {
    it('should create an instance of UpdateSellerPosDto', function() {
      // uncomment below and update the code to test UpdateSellerPosDto
      //var instane = new ParcelaExpressApi.UpdateSellerPosDto();
      //expect(instance).to.be.a(ParcelaExpressApi.UpdateSellerPosDto);
    });

    it('should have the property seller_id (base name: "seller_id")', function() {
      // uncomment below and update the code to test the property seller_id
      //var instance = new ParcelaExpressApi.UpdateSellerPosDto();
      //expect(instance).to.be();
    });

    it('should have the property terminal_id (base name: "terminal_id")', function() {
      // uncomment below and update the code to test the property terminal_id
      //var instance = new ParcelaExpressApi.UpdateSellerPosDto();
      //expect(instance).to.be();
    });

    it('should have the property acquirer_id (base name: "acquirer_id")', function() {
      // uncomment below and update the code to test the property acquirer_id
      //var instance = new ParcelaExpressApi.UpdateSellerPosDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.UpdateSellerPosDto();
      //expect(instance).to.be();
    });

  });

}));
