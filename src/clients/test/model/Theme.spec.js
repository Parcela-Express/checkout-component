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
    instance = new ParcelaExpressApi.Theme();
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

  describe('Theme', function() {
    it('should create an instance of Theme', function() {
      // uncomment below and update the code to test Theme
      //var instane = new ParcelaExpressApi.Theme();
      //expect(instance).to.be.a(ParcelaExpressApi.Theme);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ParcelaExpressApi.Theme();
      //expect(instance).to.be();
    });

    it('should have the property primary_color (base name: "primary_color")', function() {
      // uncomment below and update the code to test the property primary_color
      //var instance = new ParcelaExpressApi.Theme();
      //expect(instance).to.be();
    });

    it('should have the property secondary_color (base name: "secondary_color")', function() {
      // uncomment below and update the code to test the property secondary_color
      //var instance = new ParcelaExpressApi.Theme();
      //expect(instance).to.be();
    });

    it('should have the property default_color (base name: "default_color")', function() {
      // uncomment below and update the code to test the property default_color
      //var instance = new ParcelaExpressApi.Theme();
      //expect(instance).to.be();
    });

    it('should have the property text_color (base name: "text_color")', function() {
      // uncomment below and update the code to test the property text_color
      //var instance = new ParcelaExpressApi.Theme();
      //expect(instance).to.be();
    });

    it('should have the property menu_text_color (base name: "menu_text_color")', function() {
      // uncomment below and update the code to test the property menu_text_color
      //var instance = new ParcelaExpressApi.Theme();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ParcelaExpressApi.Theme();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new ParcelaExpressApi.Theme();
      //expect(instance).to.be();
    });

  });

}));
