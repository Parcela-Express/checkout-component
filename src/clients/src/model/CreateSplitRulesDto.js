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
 * The CreateSplitRulesDto model module.
 * @module model/CreateSplitRulesDto
 * @version 1.0
 */
export class CreateSplitRulesDto {
  /**
   * Constructs a new <code>CreateSplitRulesDto</code>.
   * @alias module:model/CreateSplitRulesDto
   * @class
   * @param amount {Number} 
   * @param sellerId {String} 
   */
  constructor(amount, sellerId) {
    this.amount = amount;
    this.sellerId = sellerId;
  }

  /**
   * Constructs a <code>CreateSplitRulesDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSplitRulesDto} obj Optional instance to populate.
   * @return {module:model/CreateSplitRulesDto} The populated <code>CreateSplitRulesDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateSplitRulesDto();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('seller_id'))
        obj.sellerId = ApiClient.convertToType(data['seller_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} amount
 */
CreateSplitRulesDto.prototype.amount = undefined;

/**
 * @member {String} sellerId
 */
CreateSplitRulesDto.prototype.sellerId = undefined;

