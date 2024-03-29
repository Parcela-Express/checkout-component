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
 * The CreateFileExportRequestDto model module.
 * @module model/CreateFileExportRequestDto
 * @version 1.0
 */
export class CreateFileExportRequestDto {
  /**
   * Constructs a new <code>CreateFileExportRequestDto</code>.
   * @alias module:model/CreateFileExportRequestDto
   * @class
   * @param type {module:model/CreateFileExportRequestDto.TypeEnum} 
   * @param extension {module:model/CreateFileExportRequestDto.ExtensionEnum} 
   * @param startDate {String} 
   * @param endDate {String} 
   * @param querystring {String} 
   * @param sellerId {String} 
   */
  constructor(type, extension, startDate, endDate, querystring, sellerId) {
    this.type = type;
    this.extension = extension;
    this.startDate = startDate;
    this.endDate = endDate;
    this.querystring = querystring;
    this.sellerId = sellerId;
  }

  /**
   * Constructs a <code>CreateFileExportRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFileExportRequestDto} obj Optional instance to populate.
   * @return {module:model/CreateFileExportRequestDto} The populated <code>CreateFileExportRequestDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateFileExportRequestDto();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('extension'))
        obj.extension = ApiClient.convertToType(data['extension'], 'String');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'String');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'String');
      if (data.hasOwnProperty('querystring'))
        obj.querystring = ApiClient.convertToType(data['querystring'], 'String');
      if (data.hasOwnProperty('seller_id'))
        obj.sellerId = ApiClient.convertToType(data['seller_id'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateFileExportRequestDto.TypeEnum = {
  /**
   * value: "sales"
   * @const
   */
  sales: "sales",

  /**
   * value: "sales_concil"
   * @const
   */
  salesConcil: "sales_concil",

  /**
   * value: "payments"
   * @const
   */
  payments: "payments",

  /**
   * value: "settlement"
   * @const
   */
  settlement: "settlement",

  /**
   * value: "settlement_transactions"
   * @const
   */
  settlementTransactions: "settlement_transactions",

  /**
   * value: "settlements_batch_transactions"
   * @const
   */
  settlementsBatchTransactions: "settlements_batch_transactions"
};
/**
 * @member {module:model/CreateFileExportRequestDto.TypeEnum} type
 */
CreateFileExportRequestDto.prototype.type = undefined;

/**
 * Allowed values for the <code>extension</code> property.
 * @enum {String}
 * @readonly
 */
CreateFileExportRequestDto.ExtensionEnum = {
  /**
   * value: "xls"
   * @const
   */
  xls: "xls",

  /**
   * value: "csv"
   * @const
   */
  csv: "csv",

  /**
   * value: "json"
   * @const
   */
  json: "json"
};
/**
 * @member {module:model/CreateFileExportRequestDto.ExtensionEnum} extension
 */
CreateFileExportRequestDto.prototype.extension = undefined;

/**
 * @member {String} startDate
 */
CreateFileExportRequestDto.prototype.startDate = undefined;

/**
 * @member {String} endDate
 */
CreateFileExportRequestDto.prototype.endDate = undefined;

/**
 * @member {String} querystring
 */
CreateFileExportRequestDto.prototype.querystring = undefined;

/**
 * @member {String} sellerId
 */
CreateFileExportRequestDto.prototype.sellerId = undefined;

