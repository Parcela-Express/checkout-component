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
    instance = new ParcelaExpressApi.SettlementBatchTransactionsReport();
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

  describe('SettlementBatchTransactionsReport', function() {
    it('should create an instance of SettlementBatchTransactionsReport', function() {
      // uncomment below and update the code to test SettlementBatchTransactionsReport
      //var instane = new ParcelaExpressApi.SettlementBatchTransactionsReport();
      //expect(instance).to.be.a(ParcelaExpressApi.SettlementBatchTransactionsReport);
    });

    it('should have the property report (base name: "report")', function() {
      // uncomment below and update the code to test the property report
      //var instance = new ParcelaExpressApi.SettlementBatchTransactionsReport();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new ParcelaExpressApi.SettlementBatchTransactionsReport();
      //expect(instance).to.be();
    });

    it('should have the property denied_fields (base name: "denied_fields")', function() {
      // uncomment below and update the code to test the property denied_fields
      //var instance = new ParcelaExpressApi.SettlementBatchTransactionsReport();
      //expect(instance).to.be();
    });

    it('should have the property allowed_fields (base name: "allowed_fields")', function() {
      // uncomment below and update the code to test the property allowed_fields
      //var instance = new ParcelaExpressApi.SettlementBatchTransactionsReport();
      //expect(instance).to.be();
    });

  });

}));