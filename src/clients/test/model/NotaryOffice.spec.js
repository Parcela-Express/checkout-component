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
    instance = new ParcelaExpressApi.NotaryOffice();
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

  describe('NotaryOffice', function() {
    it('should create an instance of NotaryOffice', function() {
      // uncomment below and update the code to test NotaryOffice
      //var instane = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be.a(ParcelaExpressApi.NotaryOffice);
    });

    it('should have the property cns (base name: "cns")', function() {
      // uncomment below and update the code to test the property cns
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property assignment (base name: "assignment")', function() {
      // uncomment below and update the code to test the property assignment
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property secondary_phone (base name: "secondary_phone")', function() {
      // uncomment below and update the code to test the property secondary_phone
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property zipcode (base name: "zipcode")', function() {
      // uncomment below and update the code to test the property zipcode
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property address_number (base name: "address_number")', function() {
      // uncomment below and update the code to test the property address_number
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property district (base name: "district")', function() {
      // uncomment below and update the code to test the property district
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property responsible (base name: "responsible")', function() {
      // uncomment below and update the code to test the property responsible
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

    it('should have the property invoicing (base name: "invoicing")', function() {
      // uncomment below and update the code to test the property invoicing
      //var instance = new ParcelaExpressApi.NotaryOffice();
      //expect(instance).to.be();
    });

  });

}));
