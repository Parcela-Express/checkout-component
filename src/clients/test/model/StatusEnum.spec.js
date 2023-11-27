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
    describe('StatusEnum', function() {
      beforeEach(function() {
        instance = ParcelaExpressApi.StatusEnum;
      });

      it('should create an instance of StatusEnum', function() {
        // TODO: update the code to test StatusEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property succeeded', function() {
        expect(instance).to.have.property('succeeded');
        expect(instance.succeeded).to.be("succeeded");
      });

      it('should have the property pendingCapture', function() {
        expect(instance).to.have.property('pendingCapture');
        expect(instance.pendingCapture).to.be("pending_capture");
      });

      it('should have the property canceled', function() {
        expect(instance).to.have.property('canceled');
        expect(instance.canceled).to.be("canceled");
      });

      it('should have the property refunded', function() {
        expect(instance).to.have.property('refunded');
        expect(instance.refunded).to.be("refunded");
      });

    });
  });

}));
