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
    describe('GetSaleSummaryDto', function() {
      beforeEach(function() {
        instance = new ParcelaExpressApi.GetSaleSummaryDto();
      });

      it('should create an instance of GetSaleSummaryDto', function() {
        // TODO: update the code to test GetSaleSummaryDto
        expect(instance).to.be.a(ParcelaExpressApi.GetSaleSummaryDto);
      });

      it('should have the property totalFinancialVolume (base name: "total_financial_volume")', function() {
        // TODO: update the code to test the property totalFinancialVolume
        expect(instance).to.have.property('totalFinancialVolume');
        // expect(instance.totalFinancialVolume).to.be(expectedValueLiteral);
      });

      it('should have the property totalGrossVolume (base name: "total_gross_volume")', function() {
        // TODO: update the code to test the property totalGrossVolume
        expect(instance).to.have.property('totalGrossVolume');
        // expect(instance.totalGrossVolume).to.be(expectedValueLiteral);
      });

      it('should have the property totalSalesNumber (base name: "total_sales_number")', function() {
        // TODO: update the code to test the property totalSalesNumber
        expect(instance).to.have.property('totalSalesNumber');
        // expect(instance.totalSalesNumber).to.be(expectedValueLiteral);
      });

      it('should have the property averageTicket (base name: "average_ticket")', function() {
        // TODO: update the code to test the property averageTicket
        expect(instance).to.have.property('averageTicket');
        // expect(instance.averageTicket).to.be(expectedValueLiteral);
      });

      it('should have the property totalSellers (base name: "total_sellers")', function() {
        // TODO: update the code to test the property totalSellers
        expect(instance).to.have.property('totalSellers');
        // expect(instance.totalSellers).to.be(expectedValueLiteral);
      });

      it('should have the property financialSuccessSale (base name: "financial_success_sale")', function() {
        // TODO: update the code to test the property financialSuccessSale
        expect(instance).to.have.property('financialSuccessSale');
        // expect(instance.financialSuccessSale).to.be(expectedValueLiteral);
      });

      it('should have the property financialCanceledSale (base name: "financial_canceled_sale")', function() {
        // TODO: update the code to test the property financialCanceledSale
        expect(instance).to.have.property('financialCanceledSale');
        // expect(instance.financialCanceledSale).to.be(expectedValueLiteral);
      });

      it('should have the property financialPendingSale (base name: "financial_pending_sale")', function() {
        // TODO: update the code to test the property financialPendingSale
        expect(instance).to.have.property('financialPendingSale');
        // expect(instance.financialPendingSale).to.be(expectedValueLiteral);
      });

      it('should have the property types (base name: "types")', function() {
        // TODO: update the code to test the property types
        expect(instance).to.have.property('types');
        // expect(instance.types).to.be(expectedValueLiteral);
      });

    });
  });

}));
