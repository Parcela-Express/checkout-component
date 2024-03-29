/*
 * Parcela Express API
 * Parcela Express API
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ParcelaExpressApi);
  }
}(this, function(expect, ParcelaExpressApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetUserLoginSellerDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.GetUserLoginSellerDto();
      });

      it('should create an instance of GetUserLoginSellerDto', function() {
        // TODO: update the code to test GetUserLoginSellerDto
        expect(instance).to.be.a(ParcelaExpressApi.GetUserLoginSellerDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property document (base name: "document")', function() {
        // TODO: update the code to test the property document
        expect(instance).to.have.property('document');
        // expect(instance.document).to.be(expectedValueLiteral);
      });

      it('should have the property stateRegistration (base name: "state_registration")', function() {
        // TODO: update the code to test the property stateRegistration
        expect(instance).to.have.property('stateRegistration');
        // expect(instance.stateRegistration).to.be(expectedValueLiteral);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property absorbCosts (base name: "absorb_costs")', function() {
        // TODO: update the code to test the property absorbCosts
        expect(instance).to.have.property('absorbCosts');
        // expect(instance.absorbCosts).to.be(expectedValueLiteral);
      });

      it('should have the property settlementType (base name: "settlement_type")', function() {
        // TODO: update the code to test the property settlementType
        expect(instance).to.have.property('settlementType');
        // expect(instance.settlementType).to.be(expectedValueLiteral);
      });

      it('should have the property acquirers (base name: "acquirers")', function() {
        // TODO: update the code to test the property acquirers
        expect(instance).to.have.property('acquirers');
        // expect(instance.acquirers).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property bankAccount (base name: "bank_account")', function() {
        // TODO: update the code to test the property bankAccount
        expect(instance).to.have.property('bankAccount');
        // expect(instance.bankAccount).to.be(expectedValueLiteral);
      });

      it('should have the property isSplit (base name: "is_split")', function() {
        // TODO: update the code to test the property isSplit
        expect(instance).to.have.property('isSplit');
        // expect(instance.isSplit).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property merchant (base name: "merchant")', function() {
        // TODO: update the code to test the property merchant
        expect(instance).to.have.property('merchant');
        // expect(instance.merchant).to.be(expectedValueLiteral);
      });

      it('should have the property salePlan (base name: "sale_plan")', function() {
        // TODO: update the code to test the property salePlan
        expect(instance).to.have.property('salePlan');
        // expect(instance.salePlan).to.be(expectedValueLiteral);
      });

      it('should have the property pixPos (base name: "pix_pos")', function() {
        // TODO: update the code to test the property pixPos
        expect(instance).to.have.property('pixPos');
        // expect(instance.pixPos).to.be(expectedValueLiteral);
      });

      it('should have the property billetProvider (base name: "billet_provider")', function() {
        // TODO: update the code to test the property billetProvider
        expect(instance).to.have.property('billetProvider');
        // expect(instance.billetProvider).to.be(expectedValueLiteral);
      });

      it('should have the property noPaymentMethods (base name: "no_payment_methods")', function() {
        // TODO: update the code to test the property noPaymentMethods
        expect(instance).to.have.property('noPaymentMethods');
        // expect(instance.noPaymentMethods).to.be(expectedValueLiteral);
      });

      it('should have the property logo (base name: "logo")', function() {
        // TODO: update the code to test the property logo
        expect(instance).to.have.property('logo');
        // expect(instance.logo).to.be(expectedValueLiteral);
      });

      it('should have the property theme (base name: "theme")', function() {
        // TODO: update the code to test the property theme
        expect(instance).to.have.property('theme');
        // expect(instance.theme).to.be(expectedValueLiteral);
      });

      it('should have the property hasSplitRules (base name: "has_split_rules")', function() {
        // TODO: update the code to test the property hasSplitRules
        expect(instance).to.have.property('hasSplitRules');
        // expect(instance.hasSplitRules).to.be(expectedValueLiteral);
      });

    });
  });

}));
