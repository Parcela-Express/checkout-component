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
 * The GetOneBilletSaleDto model module.
 * @module model/GetOneBilletSaleDto
 * @version 1.0
 */
export class GetOneBilletSaleDto {
  /**
   * Constructs a new <code>GetOneBilletSaleDto</code>.
   * @alias module:model/GetOneBilletSaleDto
   * @class
   * @param id {String} 
   * @param description {String} 
   * @param originalAmount {Number} 
   * @param amount {Number} 
   * @param status {String} 
   * @param updatedAt {String} 
   */
  constructor(id, description, originalAmount, amount, status, updatedAt) {
    this.id = id;
    this.description = description;
    this.originalAmount = originalAmount;
    this.amount = amount;
    this.status = status;
    this.updatedAt = updatedAt;
  }

  /**
   * Constructs a <code>GetOneBilletSaleDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOneBilletSaleDto} obj Optional instance to populate.
   * @return {module:model/GetOneBilletSaleDto} The populated <code>GetOneBilletSaleDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetOneBilletSaleDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('original_amount'))
        obj.originalAmount = ApiClient.convertToType(data['original_amount'], 'Number');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetOneBilletSaleDto.prototype.id = undefined;

/**
 * @member {String} description
 */
GetOneBilletSaleDto.prototype.description = undefined;

/**
 * @member {Number} originalAmount
 */
GetOneBilletSaleDto.prototype.originalAmount = undefined;

/**
 * @member {Number} amount
 */
GetOneBilletSaleDto.prototype.amount = undefined;

/**
 * @member {String} status
 */
GetOneBilletSaleDto.prototype.status = undefined;

/**
 * @member {String} updatedAt
 */
GetOneBilletSaleDto.prototype.updatedAt = undefined;

