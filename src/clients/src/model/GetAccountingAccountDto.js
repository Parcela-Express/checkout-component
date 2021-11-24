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
import {AccountingAccountDto} from './AccountingAccountDto';

/**
 * The GetAccountingAccountDto model module.
 * @module model/GetAccountingAccountDto
 * @version 1.0
 */
export class GetAccountingAccountDto {
  /**
   * Constructs a new <code>GetAccountingAccountDto</code>.
   * @alias module:model/GetAccountingAccountDto
   * @class
   * @param total {Number} 
   * @param limit {Number} 
   * @param offset {Number} 
   * @param items {Array.<module:model/AccountingAccountDto>} 
   */
  constructor(total, limit, offset, items) {
    this.total = total;
    this.limit = limit;
    this.offset = offset;
    this.items = items;
  }

  /**
   * Constructs a <code>GetAccountingAccountDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAccountingAccountDto} obj Optional instance to populate.
   * @return {module:model/GetAccountingAccountDto} The populated <code>GetAccountingAccountDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAccountingAccountDto();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [AccountingAccountDto]);
    }
    return obj;
  }
}

/**
 * @member {Number} total
 */
GetAccountingAccountDto.prototype.total = undefined;

/**
 * @member {Number} limit
 */
GetAccountingAccountDto.prototype.limit = undefined;

/**
 * @member {Number} offset
 */
GetAccountingAccountDto.prototype.offset = undefined;

/**
 * @member {Array.<module:model/AccountingAccountDto>} items
 */
GetAccountingAccountDto.prototype.items = undefined;
