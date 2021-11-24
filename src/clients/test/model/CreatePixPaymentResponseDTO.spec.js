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
    describe('CreatePixPaymentResponseDTO', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.CreatePixPaymentResponseDTO();
      });

      it('should create an instance of CreatePixPaymentResponseDTO', function() {
        // TODO: update the code to test CreatePixPaymentResponseDTO
        expect(instance).to.be.a(ParcelaExpressApi.CreatePixPaymentResponseDTO);
      });

      it('should have the property resultCode (base name: "resultCode")', function() {
        // TODO: update the code to test the property resultCode
        expect(instance).to.have.property('resultCode');
        // expect(instance.resultCode).to.be(expectedValueLiteral);
      });

      it('should have the property qrCodeData (base name: "qrCodeData")', function() {
        // TODO: update the code to test the property qrCodeData
        expect(instance).to.have.property('qrCodeData');
        // expect(instance.qrCodeData).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

    });
  });

}));
