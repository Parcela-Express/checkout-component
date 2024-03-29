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
import {IncludePaymentTypeDto} from './IncludePaymentTypeDto';

/**
 * The IncludePaymentTypesDto model module.
 * @module model/IncludePaymentTypesDto
 * @version 1.0
 */
export class IncludePaymentTypesDto {
  /**
   * Constructs a new <code>IncludePaymentTypesDto</code>.
   * @alias module:model/IncludePaymentTypesDto
   * @class
   * @param items {Array.<module:model/IncludePaymentTypeDto>} 
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * Constructs a <code>IncludePaymentTypesDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludePaymentTypesDto} obj Optional instance to populate.
   * @return {module:model/IncludePaymentTypesDto} The populated <code>IncludePaymentTypesDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludePaymentTypesDto();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [IncludePaymentTypeDto]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/IncludePaymentTypeDto>} items
 */
IncludePaymentTypesDto.prototype.items = undefined;

