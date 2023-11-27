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
    instance = new ParcelaExpressApi.PaymentsSplitsDto();
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

  describe('PaymentsSplitsDto', function() {
    it('should create an instance of PaymentsSplitsDto', function() {
      // uncomment below and update the code to test PaymentsSplitsDto
      //var instane = new ParcelaExpressApi.PaymentsSplitsDto();
      //expect(instance).to.be.a(ParcelaExpressApi.PaymentsSplitsDto);
    });

    it('should have the property saleId (base name: "saleId")', function() {
      // uncomment below and update the code to test the property saleId
      //var instance = new ParcelaExpressApi.PaymentsSplitsDto();
      //expect(instance).to.be();
    });

    it('should have the property sellerId (base name: "sellerId")', function() {
      // uncomment below and update the code to test the property sellerId
      //var instance = new ParcelaExpressApi.PaymentsSplitsDto();
      //expect(instance).to.be();
    });

    it('should have the property sellerName (base name: "sellerName")', function() {
      // uncomment below and update the code to test the property sellerName
      //var instance = new ParcelaExpressApi.PaymentsSplitsDto();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ParcelaExpressApi.PaymentsSplitsDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.PaymentsSplitsDto();
      //expect(instance).to.be();
    });

  });

}));