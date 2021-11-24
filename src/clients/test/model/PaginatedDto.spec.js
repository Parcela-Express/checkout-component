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
    describe('PaginatedDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.PaginatedDto();
      });

      it('should create an instance of PaginatedDto', function() {
        // TODO: update the code to test PaginatedDto
        expect(instance).to.be.a(ParcelaExpressApi.PaginatedDto);
      });

      it('should have the property currentPage (base name: "current_page")', function() {
        // TODO: update the code to test the property currentPage
        expect(instance).to.have.property('currentPage');
        // expect(instance.currentPage).to.be(expectedValueLiteral);
      });

      it('should have the property totalPages (base name: "total_pages")', function() {
        // TODO: update the code to test the property totalPages
        expect(instance).to.have.property('totalPages');
        // expect(instance.totalPages).to.be(expectedValueLiteral);
      });

      it('should have the property limit (base name: "limit")', function() {
        // TODO: update the code to test the property limit
        expect(instance).to.have.property('limit');
        // expect(instance.limit).to.be(expectedValueLiteral);
      });

      it('should have the property start (base name: "start")', function() {
        // TODO: update the code to test the property start
        expect(instance).to.have.property('start');
        // expect(instance.start).to.be(expectedValueLiteral);
      });

      it('should have the property end (base name: "end")', function() {
        // TODO: update the code to test the property end
        expect(instance).to.have.property('end');
        // expect(instance.end).to.be(expectedValueLiteral);
      });

      it('should have the property totalItems (base name: "total_items")', function() {
        // TODO: update the code to test the property totalItems
        expect(instance).to.have.property('totalItems');
        // expect(instance.totalItems).to.be(expectedValueLiteral);
      });

      it('should have the property hasMore (base name: "has_more")', function() {
        // TODO: update the code to test the property hasMore
        expect(instance).to.have.property('hasMore');
        // expect(instance.hasMore).to.be(expectedValueLiteral);
      });

      it('should have the property results (base name: "results")', function() {
        // TODO: update the code to test the property results
        expect(instance).to.have.property('results');
        // expect(instance.results).to.be(expectedValueLiteral);
      });

      it('should have the property additionalData (base name: "additional_data")', function() {
        // TODO: update the code to test the property additionalData
        expect(instance).to.have.property('additionalData');
        // expect(instance.additionalData).to.be(expectedValueLiteral);
      });

    });
  });

}));