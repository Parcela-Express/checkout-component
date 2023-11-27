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
    instance = new ParcelaExpressApi.GetMerchantDto();
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

  describe('GetMerchantDto', function() {
    it('should create an instance of GetMerchantDto', function() {
      // uncomment below and update the code to test GetMerchantDto
      //var instane = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetMerchantDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property is_active (base name: "is_active")', function() {
      // uncomment below and update the code to test the property is_active
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property payment_by_link_url (base name: "payment_by_link_url")', function() {
      // uncomment below and update the code to test the property payment_by_link_url
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property payment_url (base name: "payment_url")', function() {
      // uncomment below and update the code to test the property payment_url
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property accounting_account_spread_id (base name: "accounting_account_spread_id")', function() {
      // uncomment below and update the code to test the property accounting_account_spread_id
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property financial_emails (base name: "financial_emails")', function() {
      // uncomment below and update the code to test the property financial_emails
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property pre_capture (base name: "pre_capture")', function() {
      // uncomment below and update the code to test the property pre_capture
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property risk_active (base name: "risk_active")', function() {
      // uncomment below and update the code to test the property risk_active
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property min_risk (base name: "min_risk")', function() {
      // uncomment below and update the code to test the property min_risk
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property merchant_api_key (base name: "merchant_api_key")', function() {
      // uncomment below and update the code to test the property merchant_api_key
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property merchant_account (base name: "merchant_account")', function() {
      // uncomment below and update the code to test the property merchant_account
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property theme (base name: "theme")', function() {
      // uncomment below and update the code to test the property theme
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property merchant_subjects (base name: "merchant_subjects")', function() {
      // uncomment below and update the code to test the property merchant_subjects
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property seller_subjects (base name: "seller_subjects")', function() {
      // uncomment below and update the code to test the property seller_subjects
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property reports_permissions (base name: "reports_permissions")', function() {
      // uncomment below and update the code to test the property reports_permissions
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property tables_permissions (base name: "tables_permissions")', function() {
      // uncomment below and update the code to test the property tables_permissions
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property three_ds_active (base name: "three_ds_active")', function() {
      // uncomment below and update the code to test the property three_ds_active
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property min_three_ds (base name: "min_three_ds")', function() {
      // uncomment below and update the code to test the property min_three_ds
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property three_ds_value (base name: "three_ds_value")', function() {
      // uncomment below and update the code to test the property three_ds_value
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property risk_value (base name: "risk_value")', function() {
      // uncomment below and update the code to test the property risk_value
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ParcelaExpressApi.GetMerchantDto();
      //expect(instance).to.be();
    });

  });

}));
