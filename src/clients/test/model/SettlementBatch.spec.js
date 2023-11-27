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
    instance = new ParcelaExpressApi.SettlementBatch();
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

  describe('SettlementBatch', function() {
    it('should create an instance of SettlementBatch', function() {
      // uncomment below and update the code to test SettlementBatch
      //var instane = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be.a(ParcelaExpressApi.SettlementBatch);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property seller (base name: "seller")', function() {
      // uncomment below and update the code to test the property seller
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property seller_id (base name: "seller_id")', function() {
      // uncomment below and update the code to test the property seller_id
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property seller_name (base name: "seller_name")', function() {
      // uncomment below and update the code to test the property seller_name
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property seller_document (base name: "seller_document")', function() {
      // uncomment below and update the code to test the property seller_document
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property merchant (base name: "merchant")', function() {
      // uncomment below and update the code to test the property merchant
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property merchant_id (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchant_id
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property settlement_day (base name: "settlement_day")', function() {
      // uncomment below and update the code to test the property settlement_day
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property settlement_date (base name: "settlement_date")', function() {
      // uncomment below and update the code to test the property settlement_date
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property discount_bank_account_id (base name: "discount_bank_account_id")', function() {
      // uncomment below and update the code to test the property discount_bank_account_id
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property discount_bank_account (base name: "discount_bank_account")', function() {
      // uncomment below and update the code to test the property discount_bank_account
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property total_spread (base name: "total_spread")', function() {
      // uncomment below and update the code to test the property total_spread
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property cnab_id (base name: "cnab_id")', function() {
      // uncomment below and update the code to test the property cnab_id
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property cnab_filename (base name: "cnab_filename")', function() {
      // uncomment below and update the code to test the property cnab_filename
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property is_retry (base name: "is_retry")', function() {
      // uncomment below and update the code to test the property is_retry
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

    it('should have the property registered_omie (base name: "registered_omie")', function() {
      // uncomment below and update the code to test the property registered_omie
      //var instance = new ParcelaExpressApi.SettlementBatch();
      //expect(instance).to.be();
    });

  });

}));