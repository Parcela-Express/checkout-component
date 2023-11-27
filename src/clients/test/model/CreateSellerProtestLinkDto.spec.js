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
    instance = new ParcelaExpressApi.CreateSellerProtestLinkDto();
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

  describe('CreateSellerProtestLinkDto', function() {
    it('should create an instance of CreateSellerProtestLinkDto', function() {
      // uncomment below and update the code to test CreateSellerProtestLinkDto
      //var instane = new ParcelaExpressApi.CreateSellerProtestLinkDto();
      //expect(instance).to.be.a(ParcelaExpressApi.CreateSellerProtestLinkDto);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ParcelaExpressApi.CreateSellerProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new ParcelaExpressApi.CreateSellerProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.CreateSellerProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property expires_in (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expires_in
      //var instance = new ParcelaExpressApi.CreateSellerProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property payer (base name: "payer")', function() {
      // uncomment below and update the code to test the property payer
      //var instance = new ParcelaExpressApi.CreateSellerProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property payment_methods (base name: "payment_methods")', function() {
      // uncomment below and update the code to test the property payment_methods
      //var instance = new ParcelaExpressApi.CreateSellerProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property pre_capture (base name: "pre_capture")', function() {
      // uncomment below and update the code to test the property pre_capture
      //var instance = new ParcelaExpressApi.CreateSellerProtestLinkDto();
      //expect(instance).to.be();
    });

  });

}));