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
    describe('CreateSaleAutoGeneratePaymentLinkDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.CreateSaleAutoGeneratePaymentLinkDto();
      });

      it('should create an instance of CreateSaleAutoGeneratePaymentLinkDto', function() {
        // TODO: update the code to test CreateSaleAutoGeneratePaymentLinkDto
        expect(instance).to.be.a(ParcelaExpressApi.CreateSaleAutoGeneratePaymentLinkDto);
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

      it('should have the property protocol (base name: "protocol")', function() {
        // TODO: update the code to test the property protocol
        expect(instance).to.have.property('protocol');
        // expect(instance.protocol).to.be(expectedValueLiteral);
      });

      it('should have the property payer (base name: "payer")', function() {
        // TODO: update the code to test the property payer
        expect(instance).to.have.property('payer');
        // expect(instance.payer).to.be(expectedValueLiteral);
      });

    });
  });

}));
