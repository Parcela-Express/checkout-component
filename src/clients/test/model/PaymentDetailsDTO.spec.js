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
    describe('PaymentDetailsDTO', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.PaymentDetailsDTO();
      });

      it('should create an instance of PaymentDetailsDTO', function() {
        // TODO: update the code to test PaymentDetailsDTO
        expect(instance).to.be.a(ParcelaExpressApi.PaymentDetailsDTO);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property paRes (base name: "PaRes")', function() {
        // TODO: update the code to test the property paRes
        expect(instance).to.have.property('paRes');
        // expect(instance.paRes).to.be(expectedValueLiteral);
      });

      it('should have the property MD (base name: "MD")', function() {
        // TODO: update the code to test the property MD
        expect(instance).to.have.property('MD');
        // expect(instance.MD).to.be(expectedValueLiteral);
      });

      it('should have the property paReq (base name: "PaReq")', function() {
        // TODO: update the code to test the property paReq
        expect(instance).to.have.property('paReq');
        // expect(instance.paReq).to.be(expectedValueLiteral);
      });

    });
  });

}));