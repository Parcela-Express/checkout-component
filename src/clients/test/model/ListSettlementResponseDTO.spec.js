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
    describe('ListSettlementResponseDTO', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.ListSettlementResponseDTO();
      });

      it('should create an instance of ListSettlementResponseDTO', function() {
        // TODO: update the code to test ListSettlementResponseDTO
        expect(instance).to.be.a(ParcelaExpressApi.ListSettlementResponseDTO);
      });

      it('should have the property settlementDay (base name: "settlement_day")', function() {
        // TODO: update the code to test the property settlementDay
        expect(instance).to.have.property('settlementDay');
        // expect(instance.settlementDay).to.be(expectedValueLiteral);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property sellerDocument (base name: "seller_document")', function() {
        // TODO: update the code to test the property sellerDocument
        expect(instance).to.have.property('sellerDocument');
        // expect(instance.sellerDocument).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property seller (base name: "seller")', function() {
        // TODO: update the code to test the property seller
        expect(instance).to.have.property('seller');
        // expect(instance.seller).to.be(expectedValueLiteral);
      });

    });
  });

}));
