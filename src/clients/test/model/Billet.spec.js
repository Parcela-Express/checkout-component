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
    instance = new ParcelaExpressApi.Billet();
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

  describe('Billet', function() {
    it('should create an instance of Billet', function() {
      // uncomment below and update the code to test Billet
      //var instane = new ParcelaExpressApi.Billet();
      //expect(instance).to.be.a(ParcelaExpressApi.Billet);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property barcode (base name: "barcode")', function() {
      // uncomment below and update the code to test the property barcode
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property expires_at (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expires_at
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale (base name: "sale")', function() {
      // uncomment below and update the code to test the property sale
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale_id (base name: "sale_id")', function() {
      // uncomment below and update the code to test the property sale_id
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale_type (base name: "sale_type")', function() {
      // uncomment below and update the code to test the property sale_type
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale_acquirer_reference (base name: "sale_acquirer_reference")', function() {
      // uncomment below and update the code to test the property sale_acquirer_reference
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale_status (base name: "sale_status")', function() {
      // uncomment below and update the code to test the property sale_status
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property payer (base name: "payer")', function() {
      // uncomment below and update the code to test the property payer
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property payer_id (base name: "payer_id")', function() {
      // uncomment below and update the code to test the property payer_id
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property seller (base name: "seller")', function() {
      // uncomment below and update the code to test the property seller
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property seller_id (base name: "seller_id")', function() {
      // uncomment below and update the code to test the property seller_id
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property seller_name (base name: "seller_name")', function() {
      // uncomment below and update the code to test the property seller_name
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property seller_document (base name: "seller_document")', function() {
      // uncomment below and update the code to test the property seller_document
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale_description (base name: "sale_description")', function() {
      // uncomment below and update the code to test the property sale_description
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property seller_type (base name: "seller_type")', function() {
      // uncomment below and update the code to test the property seller_type
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale_created_at (base name: "sale_created_at")', function() {
      // uncomment below and update the code to test the property sale_created_at
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property created_at_time (base name: "created_at_time")', function() {
      // uncomment below and update the code to test the property created_at_time
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property created_at_unix_time (base name: "created_at_unix_time")', function() {
      // uncomment below and update the code to test the property created_at_unix_time
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale_original_amount (base name: "sale_original_amount")', function() {
      // uncomment below and update the code to test the property sale_original_amount
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property payer_document (base name: "payer_document")', function() {
      // uncomment below and update the code to test the property payer_document
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property payer_name (base name: "payer_name")', function() {
      // uncomment below and update the code to test the property payer_name
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property payer_email (base name: "payer_email")', function() {
      // uncomment below and update the code to test the property payer_email
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property payer_address (base name: "payer_address")', function() {
      // uncomment below and update the code to test the property payer_address
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property sale_amount (base name: "sale_amount")', function() {
      // uncomment below and update the code to test the property sale_amount
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property qrcode_url (base name: "qrcode_url")', function() {
      // uncomment below and update the code to test the property qrcode_url
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property payment_link_url (base name: "payment_link_url")', function() {
      // uncomment below and update the code to test the property payment_link_url
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

    it('should have the property instructions (base name: "instructions")', function() {
      // uncomment below and update the code to test the property instructions
      //var instance = new ParcelaExpressApi.Billet();
      //expect(instance).to.be();
    });

  });

}));