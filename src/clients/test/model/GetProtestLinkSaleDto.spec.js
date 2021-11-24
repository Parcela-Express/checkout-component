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
    describe('GetProtestLinkSaleDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.GetProtestLinkSaleDto();
      });

      it('should create an instance of GetProtestLinkSaleDto', function() {
        // TODO: update the code to test GetProtestLinkSaleDto
        expect(instance).to.be.a(ParcelaExpressApi.GetProtestLinkSaleDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property originalAmount (base name: "original_amount")', function() {
        // TODO: update the code to test the property originalAmount
        expect(instance).to.have.property('originalAmount');
        // expect(instance.originalAmount).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property fee (base name: "fee")', function() {
        // TODO: update the code to test the property fee
        expect(instance).to.have.property('fee');
        // expect(instance.fee).to.be(expectedValueLiteral);
      });

      it('should have the property absorbCosts (base name: "absorb_costs")', function() {
        // TODO: update the code to test the property absorbCosts
        expect(instance).to.have.property('absorbCosts');
        // expect(instance.absorbCosts).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property formPayment (base name: "form_payment")', function() {
        // TODO: update the code to test the property formPayment
        expect(instance).to.have.property('formPayment');
        // expect(instance.formPayment).to.be(expectedValueLiteral);
      });

      it('should have the property formattedFormPayment (base name: "formatted_form_payment")', function() {
        // TODO: update the code to test the property formattedFormPayment
        expect(instance).to.have.property('formattedFormPayment');
        // expect(instance.formattedFormPayment).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));
