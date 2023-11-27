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
    instance = new ParcelaExpressApi.GetSessionDto();
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

  describe('GetSessionDto', function() {
    it('should create an instance of GetSessionDto', function() {
      // uncomment below and update the code to test GetSessionDto
      //var instane = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetSessionDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property form_payment (base name: "form_payment")', function() {
      // uncomment below and update the code to test the property form_payment
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property recurrence_day (base name: "recurrence_day")', function() {
      // uncomment below and update the code to test the property recurrence_day
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property installments (base name: "installments")', function() {
      // uncomment below and update the code to test the property installments
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property card_token (base name: "card_token")', function() {
      // uncomment below and update the code to test the property card_token
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property confirmation_required (base name: "confirmation_required")', function() {
      // uncomment below and update the code to test the property confirmation_required
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property service_id (base name: "service_id")', function() {
      // uncomment below and update the code to test the property service_id
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property split_rules (base name: "split_rules")', function() {
      // uncomment below and update the code to test the property split_rules
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property main_sales_created (base name: "main_sales_created")', function() {
      // uncomment below and update the code to test the property main_sales_created
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property payer_name (base name: "payer_name")', function() {
      // uncomment below and update the code to test the property payer_name
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property payer_email (base name: "payer_email")', function() {
      // uncomment below and update the code to test the property payer_email
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property payer_document (base name: "payer_document")', function() {
      // uncomment below and update the code to test the property payer_document
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property payer_phone (base name: "payer_phone")', function() {
      // uncomment below and update the code to test the property payer_phone
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property seller_id (base name: "seller_id")', function() {
      // uncomment below and update the code to test the property seller_id
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new ParcelaExpressApi.GetSessionDto();
      //expect(instance).to.be();
    });

  });

}));
