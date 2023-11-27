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
    instance = new ParcelaExpressApi.GetFileExportRequestDto();
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

  describe('GetFileExportRequestDto', function() {
    it('should create an instance of GetFileExportRequestDto', function() {
      // uncomment below and update the code to test GetFileExportRequestDto
      //var instane = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be.a(ParcelaExpressApi.GetFileExportRequestDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property formatted_status (base name: "formatted_status")', function() {
      // uncomment below and update the code to test the property formatted_status
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property formatted_type (base name: "formatted_type")', function() {
      // uncomment below and update the code to test the property formatted_type
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property extension (base name: "extension")', function() {
      // uncomment below and update the code to test the property extension
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property start_date (base name: "start_date")', function() {
      // uncomment below and update the code to test the property start_date
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property end_date (base name: "end_date")', function() {
      // uncomment below and update the code to test the property end_date
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property seller (base name: "seller")', function() {
      // uncomment below and update the code to test the property seller
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new ParcelaExpressApi.GetFileExportRequestDto();
      //expect(instance).to.be();
    });

  });

}));
