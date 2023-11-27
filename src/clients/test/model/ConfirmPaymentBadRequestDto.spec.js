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
    instance = new ParcelaExpressApi.ConfirmPaymentBadRequestDto();
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

  describe('ConfirmPaymentBadRequestDto', function() {
    it('should create an instance of ConfirmPaymentBadRequestDto', function() {
      // uncomment below and update the code to test ConfirmPaymentBadRequestDto
      //var instane = new ParcelaExpressApi.ConfirmPaymentBadRequestDto();
      //expect(instance).to.be.a(ParcelaExpressApi.ConfirmPaymentBadRequestDto);
    });

    it('should have the property notFoundSales (base name: "notFoundSales")', function() {
      // uncomment below and update the code to test the property notFoundSales
      //var instance = new ParcelaExpressApi.ConfirmPaymentBadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property alreadyConfirmedSales (base name: "alreadyConfirmedSales")', function() {
      // uncomment below and update the code to test the property alreadyConfirmedSales
      //var instance = new ParcelaExpressApi.ConfirmPaymentBadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property pendingSales (base name: "pendingSales")', function() {
      // uncomment below and update the code to test the property pendingSales
      //var instance = new ParcelaExpressApi.ConfirmPaymentBadRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property invalidSales (base name: "invalidSales")', function() {
      // uncomment below and update the code to test the property invalidSales
      //var instance = new ParcelaExpressApi.ConfirmPaymentBadRequestDto();
      //expect(instance).to.be();
    });

  });

}));