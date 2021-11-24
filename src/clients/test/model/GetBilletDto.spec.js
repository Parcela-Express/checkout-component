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
    describe('GetBilletDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.GetBilletDto();
      });

      it('should create an instance of GetBilletDto', function() {
        // TODO: update the code to test GetBilletDto
        expect(instance).to.be.a(ParcelaExpressApi.GetBilletDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property saleId (base name: "sale_id")', function() {
        // TODO: update the code to test the property saleId
        expect(instance).to.have.property('saleId');
        // expect(instance.saleId).to.be(expectedValueLiteral);
      });

      it('should have the property expiresAt (base name: "expires_at")', function() {
        // TODO: update the code to test the property expiresAt
        expect(instance).to.have.property('expiresAt');
        // expect(instance.expiresAt).to.be(expectedValueLiteral);
      });

      it('should have the property barcode (base name: "barcode")', function() {
        // TODO: update the code to test the property barcode
        expect(instance).to.have.property('barcode');
        // expect(instance.barcode).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property payerName (base name: "payer_name")', function() {
        // TODO: update the code to test the property payerName
        expect(instance).to.have.property('payerName');
        // expect(instance.payerName).to.be(expectedValueLiteral);
      });

      it('should have the property payerEmail (base name: "payer_email")', function() {
        // TODO: update the code to test the property payerEmail
        expect(instance).to.have.property('payerEmail');
        // expect(instance.payerEmail).to.be(expectedValueLiteral);
      });

      it('should have the property payerDocument (base name: "payer_document")', function() {
        // TODO: update the code to test the property payerDocument
        expect(instance).to.have.property('payerDocument');
        // expect(instance.payerDocument).to.be(expectedValueLiteral);
      });

      it('should have the property payerAddress (base name: "payer_address")', function() {
        // TODO: update the code to test the property payerAddress
        expect(instance).to.have.property('payerAddress');
        // expect(instance.payerAddress).to.be(expectedValueLiteral);
      });

      it('should have the property billetData (base name: "billet_data")', function() {
        // TODO: update the code to test the property billetData
        expect(instance).to.have.property('billetData');
        // expect(instance.billetData).to.be(expectedValueLiteral);
      });

      it('should have the property hasSplitRules (base name: "has_split_rules")', function() {
        // TODO: update the code to test the property hasSplitRules
        expect(instance).to.have.property('hasSplitRules');
        // expect(instance.hasSplitRules).to.be(expectedValueLiteral);
      });

      it('should have the property splitRules (base name: "split_rules")', function() {
        // TODO: update the code to test the property splitRules
        expect(instance).to.have.property('splitRules');
        // expect(instance.splitRules).to.be(expectedValueLiteral);
      });

      it('should have the property metadata (base name: "metadata")', function() {
        // TODO: update the code to test the property metadata
        expect(instance).to.have.property('metadata');
        // expect(instance.metadata).to.be(expectedValueLiteral);
      });

    });
  });

}));
