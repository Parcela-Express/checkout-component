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
    instance = new ParcelaExpressApi.CreateMerchantTablesPermissionsDto();
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

  describe('CreateMerchantTablesPermissionsDto', function() {
    it('should create an instance of CreateMerchantTablesPermissionsDto', function() {
      // uncomment below and update the code to test CreateMerchantTablesPermissionsDto
      //var instane = new ParcelaExpressApi.CreateMerchantTablesPermissionsDto();
      //expect(instance).to.be.a(ParcelaExpressApi.CreateMerchantTablesPermissionsDto);
    });

    it('should have the property sales_history (base name: "sales_history")', function() {
      // uncomment below and update the code to test the property sales_history
      //var instance = new ParcelaExpressApi.CreateMerchantTablesPermissionsDto();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch_sale (base name: "settlement_batch_sale")', function() {
      // uncomment below and update the code to test the property settlement_batch_sale
      //var instance = new ParcelaExpressApi.CreateMerchantTablesPermissionsDto();
      //expect(instance).to.be();
    });

  });

}));
