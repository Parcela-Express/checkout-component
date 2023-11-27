/**
 * Parcela Express API
 * Parcela Express API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ParcelaExpressApi);
  }
}(this, function(expect, ParcelaExpressApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetSaleSummaryChartDto', function() {
    it('should create an instance of GetSaleSummaryChartDto', function() {
      // uncomment below and update the code to test GetSaleSummaryChartDto
      //var instane = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetSaleSummaryChartDto);
    });

    it('should have the property sales_progression (base name: "sales_progression")', function() {
      // uncomment below and update the code to test the property sales_progression
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property months_progression (base name: "months_progression")', function() {
      // uncomment below and update the code to test the property months_progression
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property average_ticket (base name: "average_ticket")', function() {
      // uncomment below and update the code to test the property average_ticket
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property total_sales (base name: "total_sales")', function() {
      // uncomment below and update the code to test the property total_sales
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property total_payers (base name: "total_payers")', function() {
      // uncomment below and update the code to test the property total_payers
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property financial_success_sale (base name: "financial_success_sale")', function() {
      // uncomment below and update the code to test the property financial_success_sale
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property financial_canceled_sale (base name: "financial_canceled_sale")', function() {
      // uncomment below and update the code to test the property financial_canceled_sale
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property financial_pending_sale (base name: "financial_pending_sale")', function() {
      // uncomment below and update the code to test the property financial_pending_sale
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property sales_day_progression (base name: "sales_day_progression")', function() {
      // uncomment below and update the code to test the property sales_day_progression
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property day_progression (base name: "day_progression")', function() {
      // uncomment below and update the code to test the property day_progression
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property ticket_day_progression (base name: "ticket_day_progression")', function() {
      // uncomment below and update the code to test the property ticket_day_progression
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property ticket_month_progression (base name: "ticket_month_progression")', function() {
      // uncomment below and update the code to test the property ticket_month_progression
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property sales_total_day_progression (base name: "sales_total_day_progression")', function() {
      // uncomment below and update the code to test the property sales_total_day_progression
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

    it('should have the property sales_total_month_progression (base name: "sales_total_month_progression")', function() {
      // uncomment below and update the code to test the property sales_total_month_progression
      //var instance = new ParcelaExpressApi.GetSaleSummaryChartDto();
      //expect(instance).to.be();
    });

  });

}));
