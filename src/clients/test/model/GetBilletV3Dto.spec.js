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
    instance = new ParcelaExpressApi.GetBilletV3Dto();
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

  describe('GetBilletV3Dto', function() {
    it('should create an instance of GetBilletV3Dto', function() {
      // uncomment below and update the code to test GetBilletV3Dto
      //var instane = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetBilletV3Dto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property sale_id (base name: "sale_id")', function() {
      // uncomment below and update the code to test the property sale_id
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property acquirer_reference (base name: "acquirer_reference")', function() {
      // uncomment below and update the code to test the property acquirer_reference
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property expires_at (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expires_at
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property barcode (base name: "barcode")', function() {
      // uncomment below and update the code to test the property barcode
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property formatted_type (base name: "formatted_type")', function() {
      // uncomment below and update the code to test the property formatted_type
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property formatted_description (base name: "formatted_description")', function() {
      // uncomment below and update the code to test the property formatted_description
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property original_amount (base name: "original_amount")', function() {
      // uncomment below and update the code to test the property original_amount
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property seller_name (base name: "seller_name")', function() {
      // uncomment below and update the code to test the property seller_name
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property seller_document (base name: "seller_document")', function() {
      // uncomment below and update the code to test the property seller_document
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property payer_name (base name: "payer_name")', function() {
      // uncomment below and update the code to test the property payer_name
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property payer_email (base name: "payer_email")', function() {
      // uncomment below and update the code to test the property payer_email
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property payer_document (base name: "payer_document")', function() {
      // uncomment below and update the code to test the property payer_document
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property payer_address (base name: "payer_address")', function() {
      // uncomment below and update the code to test the property payer_address
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property billet_data (base name: "billet_data")', function() {
      // uncomment below and update the code to test the property billet_data
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property has_split_rules (base name: "has_split_rules")', function() {
      // uncomment below and update the code to test the property has_split_rules
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property split_rules (base name: "split_rules")', function() {
      // uncomment below and update the code to test the property split_rules
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new ParcelaExpressApi.GetBilletV3Dto();
      //expect(instance).to.be();
    });

  });

}));
