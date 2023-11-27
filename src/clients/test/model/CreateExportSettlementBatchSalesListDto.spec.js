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
    instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
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

  describe('CreateExportSettlementBatchSalesListDto', function() {
    it('should create an instance of CreateExportSettlementBatchSalesListDto', function() {
      // uncomment below and update the code to test CreateExportSettlementBatchSalesListDto
      //var instane = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be.a(ParcelaExpressApi.CreateExportSettlementBatchSalesListDto);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

    it('should have the property original_amount (base name: "original_amount")', function() {
      // uncomment below and update the code to test the property original_amount
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

    it('should have the property form_payment (base name: "form_payment")', function() {
      // uncomment below and update the code to test the property form_payment
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

    it('should have the property extension (base name: "extension")', function() {
      // uncomment below and update the code to test the property extension
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

    it('should have the property seller_id (base name: "seller_id")', function() {
      // uncomment below and update the code to test the property seller_id
      //var instance = new ParcelaExpressApi.CreateExportSettlementBatchSalesListDto();
      //expect(instance).to.be();
    });

  });

}));
