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
    describe('CancelPaymentResponseDTO', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.CancelPaymentResponseDTO();
      });

      it('should create an instance of CancelPaymentResponseDTO', function() {
        // TODO: update the code to test CancelPaymentResponseDTO
        expect(instance).to.be.a(ParcelaExpressApi.CancelPaymentResponseDTO);
      });

      it('should have the property pspReference (base name: "pspReference")', function() {
        // TODO: update the code to test the property pspReference
        expect(instance).to.have.property('pspReference');
        // expect(instance.pspReference).to.be(expectedValueLiteral);
      });

      it('should have the property response (base name: "response")', function() {
        // TODO: update the code to test the property response
        expect(instance).to.have.property('response');
        // expect(instance.response).to.be(expectedValueLiteral);
      });

    });
  });

}));