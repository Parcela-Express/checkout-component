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
 * The Splits model module.
 * @module model/Splits
 * @version 1.0
 */
export class Splits {
  /**
   * Constructs a new <code>Splits</code>.
   * @alias module:model/Splits
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Splits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Splits} obj Optional instance to populate.
   * @return {module:model/Splits} The populated <code>Splits</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Splits();
    }
    return obj;
  }
}
