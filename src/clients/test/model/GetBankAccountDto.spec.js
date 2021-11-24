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
    describe('GetBankAccountDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.GetBankAccountDto();
      });

      it('should create an instance of GetBankAccountDto', function() {
        // TODO: update the code to test GetBankAccountDto
        expect(instance).to.be.a(ParcelaExpressApi.GetBankAccountDto);
      });

      it('should have the property bankCode (base name: "bank_code")', function() {
        // TODO: update the code to test the property bankCode
        expect(instance).to.have.property('bankCode');
        // expect(instance.bankCode).to.be(expectedValueLiteral);
      });

      it('should have the property agencyNumber (base name: "agency_number")', function() {
        // TODO: update the code to test the property agencyNumber
        expect(instance).to.have.property('agencyNumber');
        // expect(instance.agencyNumber).to.be(expectedValueLiteral);
      });

      it('should have the property agencyDigit (base name: "agency_digit")', function() {
        // TODO: update the code to test the property agencyDigit
        expect(instance).to.have.property('agencyDigit');
        // expect(instance.agencyDigit).to.be(expectedValueLiteral);
      });

      it('should have the property accountNumber (base name: "account_number")', function() {
        // TODO: update the code to test the property accountNumber
        expect(instance).to.have.property('accountNumber');
        // expect(instance.accountNumber).to.be(expectedValueLiteral);
      });

      it('should have the property accountDigit (base name: "account_digit")', function() {
        // TODO: update the code to test the property accountDigit
        expect(instance).to.have.property('accountDigit');
        // expect(instance.accountDigit).to.be(expectedValueLiteral);
      });

      it('should have the property typeAccount (base name: "type_account")', function() {
        // TODO: update the code to test the property typeAccount
        expect(instance).to.have.property('typeAccount');
        // expect(instance.typeAccount).to.be(expectedValueLiteral);
      });

      it('should have the property pixKey (base name: "pix_key")', function() {
        // TODO: update the code to test the property pixKey
        expect(instance).to.have.property('pixKey');
        // expect(instance.pixKey).to.be(expectedValueLiteral);
      });

    });
  });

}));
