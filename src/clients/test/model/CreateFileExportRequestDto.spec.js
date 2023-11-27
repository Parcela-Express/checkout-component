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
    instance = new ParcelaExpressApi.CreateFileExportRequestDto();
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

  describe('CreateFileExportRequestDto', function() {
    it('should create an instance of CreateFileExportRequestDto', function() {
      // uncomment below and update the code to test CreateFileExportRequestDto
      //var instane = new ParcelaExpressApi.CreateFileExportRequestDto();
      //expect(instance).to.be.a(ParcelaExpressApi.CreateFileExportRequestDto);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ParcelaExpressApi.CreateFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property extension (base name: "extension")', function() {
      // uncomment below and update the code to test the property extension
      //var instance = new ParcelaExpressApi.CreateFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property start_date (base name: "start_date")', function() {
      // uncomment below and update the code to test the property start_date
      //var instance = new ParcelaExpressApi.CreateFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property end_date (base name: "end_date")', function() {
      // uncomment below and update the code to test the property end_date
      //var instance = new ParcelaExpressApi.CreateFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property querystring (base name: "querystring")', function() {
      // uncomment below and update the code to test the property querystring
      //var instance = new ParcelaExpressApi.CreateFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property seller_id (base name: "seller_id")', function() {
      // uncomment below and update the code to test the property seller_id
      //var instance = new ParcelaExpressApi.CreateFileExportRequestDto();
      //expect(instance).to.be();
    });

  });

}));
