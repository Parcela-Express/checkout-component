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
    describe('CreatePaymentLinkDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.CreatePaymentLinkDto();
      });

      it('should create an instance of CreatePaymentLinkDto', function() {
        // TODO: update the code to test CreatePaymentLinkDto
        expect(instance).to.be.a(ParcelaExpressApi.CreatePaymentLinkDto);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property expiresIn (base name: "expires_in")', function() {
        // TODO: update the code to test the property expiresIn
        expect(instance).to.have.property('expiresIn');
        // expect(instance.expiresIn).to.be(expectedValueLiteral);
      });

      it('should have the property sellerId (base name: "seller_id")', function() {
        // TODO: update the code to test the property sellerId
        expect(instance).to.have.property('sellerId');
        // expect(instance.sellerId).to.be(expectedValueLiteral);
      });

      it('should have the property payer (base name: "payer")', function() {
        // TODO: update the code to test the property payer
        expect(instance).to.have.property('payer');
        // expect(instance.payer).to.be(expectedValueLiteral);
      });

      it('should have the property paymentMethods (base name: "payment_methods")', function() {
        // TODO: update the code to test the property paymentMethods
        expect(instance).to.have.property('paymentMethods');
        // expect(instance.paymentMethods).to.be(expectedValueLiteral);
      });

      it('should have the property preCapture (base name: "pre_capture")', function() {
        // TODO: update the code to test the property preCapture
        expect(instance).to.have.property('preCapture');
        // expect(instance.preCapture).to.be(expectedValueLiteral);
      });

      it('should have the property metadata (base name: "metadata")', function() {
        // TODO: update the code to test the property metadata
        expect(instance).to.have.property('metadata');
        // expect(instance.metadata).to.be(expectedValueLiteral);
      });

    });
  });

}));