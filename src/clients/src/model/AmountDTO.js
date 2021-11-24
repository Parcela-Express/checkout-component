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
import {ApiClient} from '../ApiClient';

/**
 * The AmountDTO model module.
 * @module model/AmountDTO
 * @version 1.0
 */
export class AmountDTO {
  /**
   * Constructs a new <code>AmountDTO</code>.
   * @alias module:model/AmountDTO
   * @class
   * @param currency {String} 
   * @param value {Number} 
   */
  constructor(currency, value) {
    this.currency = currency;
    this.value = value;
  }

  /**
   * Constructs a <code>AmountDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AmountDTO} obj Optional instance to populate.
   * @return {module:model/AmountDTO} The populated <code>AmountDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AmountDTO();
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} currency
 */
AmountDTO.prototype.currency = undefined;

/**
 * @member {Number} value
 */
AmountDTO.prototype.value = undefined;
