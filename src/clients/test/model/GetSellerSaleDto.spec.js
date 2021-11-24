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
    describe('GetSellerSaleDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.GetSellerSaleDto();
      });

      it('should create an instance of GetSellerSaleDto', function() {
        // TODO: update the code to test GetSellerSaleDto
        expect(instance).to.be.a(ParcelaExpressApi.GetSellerSaleDto);
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

      it('should have the property originalAmount (base name: "original_amount")', function() {
        // TODO: update the code to test the property originalAmount
        expect(instance).to.have.property('originalAmount');
        // expect(instance.originalAmount).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property paymentType (base name: "payment_type")', function() {
        // TODO: update the code to test the property paymentType
        expect(instance).to.have.property('paymentType');
        // expect(instance.paymentType).to.be(expectedValueLiteral);
      });

      it('should have the property payer (base name: "payer")', function() {
        // TODO: update the code to test the property payer
        expect(instance).to.have.property('payer');
        // expect(instance.payer).to.be(expectedValueLiteral);
      });

      it('should have the property billet (base name: "billet")', function() {
        // TODO: update the code to test the property billet
        expect(instance).to.have.property('billet');
        // expect(instance.billet).to.be(expectedValueLiteral);
      });

    });
  });

}));
