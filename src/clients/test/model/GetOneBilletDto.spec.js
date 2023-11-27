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
    instance = new ParcelaExpressApi.GetOneBilletDto();
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

  describe('GetOneBilletDto', function() {
    it('should create an instance of GetOneBilletDto', function() {
      // uncomment below and update the code to test GetOneBilletDto
      //var instane = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetOneBilletDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property sale (base name: "sale")', function() {
      // uncomment below and update the code to test the property sale
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property expires_at (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expires_at
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property barcode (base name: "barcode")', function() {
      // uncomment below and update the code to test the property barcode
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property payer_name (base name: "payer_name")', function() {
      // uncomment below and update the code to test the property payer_name
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property payer_email (base name: "payer_email")', function() {
      // uncomment below and update the code to test the property payer_email
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property payer_document (base name: "payer_document")', function() {
      // uncomment below and update the code to test the property payer_document
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property payer_address (base name: "payer_address")', function() {
      // uncomment below and update the code to test the property payer_address
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

    it('should have the property billet_data (base name: "billet_data")', function() {
      // uncomment below and update the code to test the property billet_data
      //var instance = new ParcelaExpressApi.GetOneBilletDto();
      //expect(instance).to.be();
    });

  });

}));
