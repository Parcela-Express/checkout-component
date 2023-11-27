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
    instance = new ParcelaExpressApi.GetProtestLinkDto();
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

  describe('GetProtestLinkDto', function() {
    it('should create an instance of GetProtestLinkDto', function() {
      // uncomment below and update the code to test GetProtestLinkDto
      //var instane = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetProtestLinkDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property payer (base name: "payer")', function() {
      // uncomment below and update the code to test the property payer
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property formatted_status (base name: "formatted_status")', function() {
      // uncomment below and update the code to test the property formatted_status
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property generated_by_payer (base name: "generated_by_payer")', function() {
      // uncomment below and update the code to test the property generated_by_payer
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property formatted_generated_by_payer (base name: "formatted_generated_by_payer")', function() {
      // uncomment below and update the code to test the property formatted_generated_by_payer
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property sale (base name: "sale")', function() {
      // uncomment below and update the code to test the property sale
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property seller (base name: "seller")', function() {
      // uncomment below and update the code to test the property seller
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property expires_in (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expires_in
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property billet_payment_is_permitted (base name: "billet_payment_is_permitted")', function() {
      // uncomment below and update the code to test the property billet_payment_is_permitted
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property qrcode_payment_is_permitted (base name: "qrcode_payment_is_permitted")', function() {
      // uncomment below and update the code to test the property qrcode_payment_is_permitted
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property card_payment_is_permitted (base name: "card_payment_is_permitted")', function() {
      // uncomment below and update the code to test the property card_payment_is_permitted
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property qrcode_url (base name: "qrcode_url")', function() {
      // uncomment below and update the code to test the property qrcode_url
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property payment_methods (base name: "payment_methods")', function() {
      // uncomment below and update the code to test the property payment_methods
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property pre_capture (base name: "pre_capture")', function() {
      // uncomment below and update the code to test the property pre_capture
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

    it('should have the property theme (base name: "theme")', function() {
      // uncomment below and update the code to test the property theme
      //var instance = new ParcelaExpressApi.GetProtestLinkDto();
      //expect(instance).to.be();
    });

  });

}));
