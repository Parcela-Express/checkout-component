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
    describe('UserLoginResponseDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.UserLoginResponseDto();
      });

      it('should create an instance of UserLoginResponseDto', function() {
        // TODO: update the code to test UserLoginResponseDto
        expect(instance).to.be.a(ParcelaExpressApi.UserLoginResponseDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property seller (base name: "seller")', function() {
        // TODO: update the code to test the property seller
        expect(instance).to.have.property('seller');
        // expect(instance.seller).to.be(expectedValueLiteral);
      });

      it('should have the property merchant (base name: "merchant")', function() {
        // TODO: update the code to test the property merchant
        expect(instance).to.have.property('merchant');
        // expect(instance.merchant).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property refreshToken (base name: "refresh_token")', function() {
        // TODO: update the code to test the property refreshToken
        expect(instance).to.have.property('refreshToken');
        // expect(instance.refreshToken).to.be(expectedValueLiteral);
      });

      it('should have the property idToken (base name: "id_token")', function() {
        // TODO: update the code to test the property idToken
        expect(instance).to.have.property('idToken');
        // expect(instance.idToken).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property theme (base name: "theme")', function() {
        // TODO: update the code to test the property theme
        expect(instance).to.have.property('theme');
        // expect(instance.theme).to.be(expectedValueLiteral);
      });

      it('should have the property logo (base name: "logo")', function() {
        // TODO: update the code to test the property logo
        expect(instance).to.have.property('logo');
        // expect(instance.logo).to.be(expectedValueLiteral);
      });

    });
  });

}));