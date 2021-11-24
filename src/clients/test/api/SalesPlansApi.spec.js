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

  beforeEach(function() {
    instance = new ParcelaExpressApi.SalesPlansApi();
  });

  describe('(package)', function() {
    describe('SalesPlansApi', function() {
      describe('addPaymentType', function() {
        it('should call addPaymentType successfully', function(done) {
          // TODO: uncomment, update parameter values for addPaymentType call and complete the assertions
          /*

          instance.addPaymentType(body, salePlanId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ParcelaExpressApi.GetSalePlanDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createSalesPlan', function() {
        it('should call createSalesPlan successfully', function(done) {
          // TODO: uncomment, update parameter values for createSalesPlan call and complete the assertions
          /*

          instance.createSalesPlan(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ParcelaExpressApi.GetSalePlanDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listAllSalePlan', function() {
        it('should call listAllSalePlan successfully', function(done) {
          // TODO: uncomment, update parameter values for listAllSalePlan call and complete the assertions
          /*
          var opts = {};

          instance.listAllSalePlan(limit, currentPage, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ParcelaExpressApi.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listSalePlan', function() {
        it('should call listSalePlan successfully', function(done) {
          // TODO: uncomment listSalePlan call and complete the assertions
          /*

          instance.listSalePlan(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ParcelaExpressApi.GetSalePlanDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listSalePlanPaymentTypes', function() {
        it('should call listSalePlanPaymentTypes successfully', function(done) {
          // TODO: uncomment, update parameter values for listSalePlanPaymentTypes call and complete the assertions
          /*

          instance.listSalePlanPaymentTypes(salePlanId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ParcelaExpressApi.GetPaymentTypeDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
