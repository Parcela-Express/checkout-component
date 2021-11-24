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
    describe('GetSplitRulesEntity', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.GetSplitRulesEntity();
      });

      it('should create an instance of GetSplitRulesEntity', function() {
        // TODO: update the code to test GetSplitRulesEntity
        expect(instance).to.be.a(ParcelaExpressApi.GetSplitRulesEntity);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property mainSellerId (base name: "main_seller_id")', function() {
        // TODO: update the code to test the property mainSellerId
        expect(instance).to.have.property('mainSellerId');
        // expect(instance.mainSellerId).to.be(expectedValueLiteral);
      });

      it('should have the property mainSellerName (base name: "main_seller_name")', function() {
        // TODO: update the code to test the property mainSellerName
        expect(instance).to.have.property('mainSellerName');
        // expect(instance.mainSellerName).to.be(expectedValueLiteral);
      });

      it('should have the property mainSellerDocument (base name: "main_seller_document")', function() {
        // TODO: update the code to test the property mainSellerDocument
        expect(instance).to.have.property('mainSellerDocument');
        // expect(instance.mainSellerDocument).to.be(expectedValueLiteral);
      });

      it('should have the property mainSellerCode (base name: "main_seller_code")', function() {
        // TODO: update the code to test the property mainSellerCode
        expect(instance).to.have.property('mainSellerCode');
        // expect(instance.mainSellerCode).to.be(expectedValueLiteral);
      });

      it('should have the property mainSaleId (base name: "main_sale_id")', function() {
        // TODO: update the code to test the property mainSaleId
        expect(instance).to.have.property('mainSaleId');
        // expect(instance.mainSaleId).to.be(expectedValueLiteral);
      });

      it('should have the property isSplited (base name: "is_splited")', function() {
        // TODO: update the code to test the property isSplited
        expect(instance).to.have.property('isSplited');
        // expect(instance.isSplited).to.be(expectedValueLiteral);
      });

      it('should have the property splits (base name: "splits")', function() {
        // TODO: update the code to test the property splits
        expect(instance).to.have.property('splits');
        // expect(instance.splits).to.be(expectedValueLiteral);
      });

    });
  });

}));