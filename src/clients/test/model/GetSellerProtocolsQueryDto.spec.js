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
    instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
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

  describe('GetSellerProtocolsQueryDto', function() {
    it('should create an instance of GetSellerProtocolsQueryDto', function() {
      // uncomment below and update the code to test GetSellerProtocolsQueryDto
      //var instane = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetSellerProtocolsQueryDto);
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property current_page (base name: "current_page")', function() {
      // uncomment below and update the code to test the property current_page
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property status_date_start (base name: "status_date_start")', function() {
      // uncomment below and update the code to test the property status_date_start
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property status_date_end (base name: "status_date_end")', function() {
      // uncomment below and update the code to test the property status_date_end
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property creation_date_start (base name: "creation_date_start")', function() {
      // uncomment below and update the code to test the property creation_date_start
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property creation_date_end (base name: "creation_date_end")', function() {
      // uncomment below and update the code to test the property creation_date_end
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property alert_date_start (base name: "alert_date_start")', function() {
      // uncomment below and update the code to test the property alert_date_start
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property alert_date_end (base name: "alert_date_end")', function() {
      // uncomment below and update the code to test the property alert_date_end
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property due_date_start (base name: "due_date_start")', function() {
      // uncomment below and update the code to test the property due_date_start
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property due_date_end (base name: "due_date_end")', function() {
      // uncomment below and update the code to test the property due_date_end
      //var instance = new ParcelaExpressApi.GetSellerProtocolsQueryDto();
      //expect(instance).to.be();
    });

  });

}));