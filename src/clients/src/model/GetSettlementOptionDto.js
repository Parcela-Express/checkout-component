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
 * The GetSettlementOptionDto model module.
 * @module model/GetSettlementOptionDto
 * @version 1.0
 */
export class GetSettlementOptionDto {
  /**
   * Constructs a new <code>GetSettlementOptionDto</code>.
   * @alias module:model/GetSettlementOptionDto
   * @class
   * @param id {String} 
   * @param description {String} 
   * @param code {module:model/GetSettlementOptionDto.CodeEnum} 
   * @param type {module:model/GetSettlementOptionDto.TypeEnum} 
   * @param days {Number} 
   */
  constructor(id, description, code, type, days) {
    this.id = id;
    this.description = description;
    this.code = code;
    this.type = type;
    this.days = days;
  }

  /**
   * Constructs a <code>GetSettlementOptionDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSettlementOptionDto} obj Optional instance to populate.
   * @return {module:model/GetSettlementOptionDto} The populated <code>GetSettlementOptionDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSettlementOptionDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('days'))
        obj.days = ApiClient.convertToType(data['days'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetSettlementOptionDto.prototype.id = undefined;

/**
 * @member {String} description
 */
GetSettlementOptionDto.prototype.description = undefined;

/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
GetSettlementOptionDto.CodeEnum = {
  /**
   * value: "D0"
   * @const
   */
  d0: "D0",

  /**
   * value: "D1"
   * @const
   */
  d1: "D1",

  /**
   * value: "D30"
   * @const
   */
  d30: "D30"
};
/**
 * @member {module:model/GetSettlementOptionDto.CodeEnum} code
 */
GetSettlementOptionDto.prototype.code = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GetSettlementOptionDto.TypeEnum = {
  /**
   * value: "pix"
   * @const
   */
  pix: "pix",

  /**
   * value: "debit"
   * @const
   */
  debit: "debit",

  /**
   * value: "credit"
   * @const
   */
  credit: "credit",

  /**
   * value: "billet"
   * @const
   */
  billet: "billet"
};
/**
 * @member {module:model/GetSettlementOptionDto.TypeEnum} type
 */
GetSettlementOptionDto.prototype.type = undefined;

/**
 * @member {Number} days
 */
GetSettlementOptionDto.prototype.days = undefined;
