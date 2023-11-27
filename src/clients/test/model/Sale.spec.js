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
    instance = new ParcelaExpressApi.Sale();
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

  describe('Sale', function() {
    it('should create an instance of Sale', function() {
      // uncomment below and update the code to test Sale
      //var instane = new ParcelaExpressApi.Sale();
      //expect(instance).to.be.a(ParcelaExpressApi.Sale);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property acquirer_reference (base name: "acquirer_reference")', function() {
      // uncomment below and update the code to test the property acquirer_reference
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property acquirer_code (base name: "acquirer_code")', function() {
      // uncomment below and update the code to test the property acquirer_code
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property acquirer_document (base name: "acquirer_document")', function() {
      // uncomment below and update the code to test the property acquirer_document
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property original_amount (base name: "original_amount")', function() {
      // uncomment below and update the code to test the property original_amount
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property absorb_costs (base name: "absorb_costs")', function() {
      // uncomment below and update the code to test the property absorb_costs
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_status (base name: "settlement_status")', function() {
      // uncomment below and update the code to test the property settlement_status
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property form_payment (base name: "form_payment")', function() {
      // uncomment below and update the code to test the property form_payment
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property seller (base name: "seller")', function() {
      // uncomment below and update the code to test the property seller
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property merchant (base name: "merchant")', function() {
      // uncomment below and update the code to test the property merchant
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property sale_plan (base name: "sale_plan")', function() {
      // uncomment below and update the code to test the property sale_plan
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property cost_plan (base name: "cost_plan")', function() {
      // uncomment below and update the code to test the property cost_plan
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_day (base name: "settlement_day")', function() {
      // uncomment below and update the code to test the property settlement_day
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payment_type (base name: "payment_type")', function() {
      // uncomment below and update the code to test the property payment_type
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payment_type_id (base name: "payment_type_id")', function() {
      // uncomment below and update the code to test the property payment_type_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payer (base name: "payer")', function() {
      // uncomment below and update the code to test the property payer
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payer_id (base name: "payer_id")', function() {
      // uncomment below and update the code to test the property payer_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch (base name: "settlement_batch")', function() {
      // uncomment below and update the code to test the property settlement_batch
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch_id (base name: "settlement_batch_id")', function() {
      // uncomment below and update the code to test the property settlement_batch_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property billet (base name: "billet")', function() {
      // uncomment below and update the code to test the property billet
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property billet_id (base name: "billet_id")', function() {
      // uncomment below and update the code to test the property billet_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property is_summed (base name: "is_summed")', function() {
      // uncomment below and update the code to test the property is_summed
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property is_visible (base name: "is_visible")', function() {
      // uncomment below and update the code to test the property is_visible
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property installments (base name: "installments")', function() {
      // uncomment below and update the code to test the property installments
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property seller_id (base name: "seller_id")', function() {
      // uncomment below and update the code to test the property seller_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property seller_name (base name: "seller_name")', function() {
      // uncomment below and update the code to test the property seller_name
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property seller_document (base name: "seller_document")', function() {
      // uncomment below and update the code to test the property seller_document
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property seller_description (base name: "seller_description")', function() {
      // uncomment below and update the code to test the property seller_description
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property merchant_id (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchant_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property merchant_name (base name: "merchant_name")', function() {
      // uncomment below and update the code to test the property merchant_name
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property merchant_document (base name: "merchant_document")', function() {
      // uncomment below and update the code to test the property merchant_document
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payment_type_code (base name: "payment_type_code")', function() {
      // uncomment below and update the code to test the property payment_type_code
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payment_type_description (base name: "payment_type_description")', function() {
      // uncomment below and update the code to test the property payment_type_description
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payment_type_installments (base name: "payment_type_installments")', function() {
      // uncomment below and update the code to test the property payment_type_installments
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payer_name (base name: "payer_name")', function() {
      // uncomment below and update the code to test the property payer_name
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payer_email (base name: "payer_email")', function() {
      // uncomment below and update the code to test the property payer_email
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payer_document (base name: "payer_document")', function() {
      // uncomment below and update the code to test the property payer_document
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payer_phone (base name: "payer_phone")', function() {
      // uncomment below and update the code to test the property payer_phone
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payer_address (base name: "payer_address")', function() {
      // uncomment below and update the code to test the property payer_address
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property sale_plan_id (base name: "sale_plan_id")', function() {
      // uncomment below and update the code to test the property sale_plan_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property sale_plan_name (base name: "sale_plan_name")', function() {
      // uncomment below and update the code to test the property sale_plan_name
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property cost_plan_name (base name: "cost_plan_name")', function() {
      // uncomment below and update the code to test the property cost_plan_name
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property cost_plan_options (base name: "cost_plan_options")', function() {
      // uncomment below and update the code to test the property cost_plan_options
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property created_by_user_name (base name: "created_by_user_name")', function() {
      // uncomment below and update the code to test the property created_by_user_name
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property created_by_user_email (base name: "created_by_user_email")', function() {
      // uncomment below and update the code to test the property created_by_user_email
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property created_at_unix_time (base name: "created_at_unix_time")', function() {
      // uncomment below and update the code to test the property created_at_unix_time
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property created_at_time (base name: "created_at_time")', function() {
      // uncomment below and update the code to test the property created_at_time
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property pre_capture (base name: "pre_capture")', function() {
      // uncomment below and update the code to test the property pre_capture
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_status_cancellation (base name: "settlement_status_cancellation")', function() {
      // uncomment below and update the code to test the property settlement_status_cancellation
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_day_cancellation (base name: "settlement_day_cancellation")', function() {
      // uncomment below and update the code to test the property settlement_day_cancellation
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch_cancellation (base name: "settlement_batch_cancellation")', function() {
      // uncomment below and update the code to test the property settlement_batch_cancellation
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch_cancellation_id (base name: "settlement_batch_cancellation_id")', function() {
      // uncomment below and update the code to test the property settlement_batch_cancellation_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch_retry (base name: "settlement_batch_retry")', function() {
      // uncomment below and update the code to test the property settlement_batch_retry
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch_retry_id (base name: "settlement_batch_retry_id")', function() {
      // uncomment below and update the code to test the property settlement_batch_retry_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch_retry_status (base name: "settlement_batch_retry_status")', function() {
      // uncomment below and update the code to test the property settlement_batch_retry_status
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property settlement_batch_retry_day (base name: "settlement_batch_retry_day")', function() {
      // uncomment below and update the code to test the property settlement_batch_retry_day
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payment_day (base name: "payment_day")', function() {
      // uncomment below and update the code to test the property payment_day
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property payment_day_time (base name: "payment_day_time")', function() {
      // uncomment below and update the code to test the property payment_day_time
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property order_number (base name: "order_number")', function() {
      // uncomment below and update the code to test the property order_number
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property has_split_rules (base name: "has_split_rules")', function() {
      // uncomment below and update the code to test the property has_split_rules
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property split_rules (base name: "split_rules")', function() {
      // uncomment below and update the code to test the property split_rules
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property split_rules_id (base name: "split_rules_id")', function() {
      // uncomment below and update the code to test the property split_rules_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property card_number (base name: "card_number")', function() {
      // uncomment below and update the code to test the property card_number
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property card_brand (base name: "card_brand")', function() {
      // uncomment below and update the code to test the property card_brand
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property card_holder_name (base name: "card_holder_name")', function() {
      // uncomment below and update the code to test the property card_holder_name
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property success_return_url (base name: "success_return_url")', function() {
      // uncomment below and update the code to test the property success_return_url
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property error_return_url (base name: "error_return_url")', function() {
      // uncomment below and update the code to test the property error_return_url
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property confirmation_required (base name: "confirmation_required")', function() {
      // uncomment below and update the code to test the property confirmation_required
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property confirmation_day (base name: "confirmation_day")', function() {
      // uncomment below and update the code to test the property confirmation_day
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property risk_active (base name: "risk_active")', function() {
      // uncomment below and update the code to test the property risk_active
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property is_capture (base name: "is_capture")', function() {
      // uncomment below and update the code to test the property is_capture
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property split_description (base name: "split_description")', function() {
      // uncomment below and update the code to test the property split_description
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property extract_identification (base name: "extract_identification")', function() {
      // uncomment below and update the code to test the property extract_identification
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property terminal_id (base name: "terminal_id")', function() {
      // uncomment below and update the code to test the property terminal_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property service_id (base name: "service_id")', function() {
      // uncomment below and update the code to test the property service_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property spread (base name: "spread")', function() {
      // uncomment below and update the code to test the property spread
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property supportResponsible (base name: "supportResponsible")', function() {
      // uncomment below and update the code to test the property supportResponsible
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property commercialResponsible (base name: "commercialResponsible")', function() {
      // uncomment below and update the code to test the property commercialResponsible
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property qrcode_data (base name: "qrcode_data")', function() {
      // uncomment below and update the code to test the property qrcode_data
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property three_ds_active (base name: "three_ds_active")', function() {
      // uncomment below and update the code to test the property three_ds_active
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property celcoin_id (base name: "celcoin_id")', function() {
      // uncomment below and update the code to test the property celcoin_id
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property write_off_file_generated (base name: "write_off_file_generated")', function() {
      // uncomment below and update the code to test the property write_off_file_generated
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

    it('should have the property celcoin (base name: "celcoin")', function() {
      // uncomment below and update the code to test the property celcoin
      //var instance = new ParcelaExpressApi.Sale();
      //expect(instance).to.be();
    });

  });

}));
