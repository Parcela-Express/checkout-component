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
    describe('CancelPaymentDTO', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.CancelPaymentDTO();
      });

      it('should create an instance of CancelPaymentDTO', function() {
        // TODO: update the code to test CancelPaymentDTO
        expect(instance).to.be.a(ParcelaExpressApi.CancelPaymentDTO);
      });

      it('should have the property acquirerReference (base name: "acquirer_reference")', function() {
        // TODO: update the code to test the property acquirerReference
        expect(instance).to.have.property('acquirerReference');
        // expect(instance.acquirerReference).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

    });
  });

}));