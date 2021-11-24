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
    describe('CreateSplitRulesDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.CreateSplitRulesDto();
      });

      it('should create an instance of CreateSplitRulesDto', function() {
        // TODO: update the code to test CreateSplitRulesDto
        expect(instance).to.be.a(ParcelaExpressApi.CreateSplitRulesDto);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property sellerId (base name: "seller_id")', function() {
        // TODO: update the code to test the property sellerId
        expect(instance).to.have.property('sellerId');
        // expect(instance.sellerId).to.be(expectedValueLiteral);
      });

    });
  });

}));
