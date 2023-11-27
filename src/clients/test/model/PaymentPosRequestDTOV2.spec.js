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
    instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
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

  describe('PaymentPosRequestDTOV2', function() {
    it('should create an instance of PaymentPosRequestDTOV2', function() {
      // uncomment below and update the code to test PaymentPosRequestDTOV2
      //var instane = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be.a(ParcelaExpressApi.PaymentPosRequestDTOV2);
    });

    it('should have the property terminal_id (base name: "terminal_id")', function() {
      // uncomment below and update the code to test the property terminal_id
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property is_debit (base name: "is_debit")', function() {
      // uncomment below and update the code to test the property is_debit
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property instalments (base name: "instalments")', function() {
      // uncomment below and update the code to test the property instalments
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property is_pix (base name: "is_pix")', function() {
      // uncomment below and update the code to test the property is_pix
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property has_split_rules (base name: "has_split_rules")', function() {
      // uncomment below and update the code to test the property has_split_rules
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property split_rules (base name: "split_rules")', function() {
      // uncomment below and update the code to test the property split_rules
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property confirmation_required (base name: "confirmation_required")', function() {
      // uncomment below and update the code to test the property confirmation_required
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

    it('should have the property service_id (base name: "service_id")', function() {
      // uncomment below and update the code to test the property service_id
      //var instance = new ParcelaExpressApi.PaymentPosRequestDTOV2();
      //expect(instance).to.be();
    });

  });

}));
