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
    describe('IncludeAcquirerDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.IncludeAcquirerDto();
      });

      it('should create an instance of IncludeAcquirerDto', function() {
        // TODO: update the code to test IncludeAcquirerDto
        expect(instance).to.be.a(ParcelaExpressApi.IncludeAcquirerDto);
      });

      it('should have the property acquirerId (base name: "acquirer_id")', function() {
        // TODO: update the code to test the property acquirerId
        expect(instance).to.have.property('acquirerId');
        // expect(instance.acquirerId).to.be(expectedValueLiteral);
      });

    });
  });

}));
