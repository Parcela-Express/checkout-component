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
import {GetAcquirerDto} from './GetAcquirerDto';
import {GetPaymentTypeDto} from './GetPaymentTypeDto';

/**
 * The GetMerchantSalePlanDto model module.
 * @module model/GetMerchantSalePlanDto
 * @version 1.0
 */
export class GetMerchantSalePlanDto {
  /**
   * Constructs a new <code>GetMerchantSalePlanDto</code>.
   * @alias module:model/GetMerchantSalePlanDto
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param description {String} 
   * @param paymentTypes {Array.<module:model/GetPaymentTypeDto>} 
   * @param type {module:model/GetMerchantSalePlanDto.TypeEnum} 
   * @param acquirer {module:model/GetAcquirerDto} 
   */
  constructor(id, name, description, paymentTypes, type, acquirer) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.paymentTypes = paymentTypes;
    this.type = type;
    this.acquirer = acquirer;
  }

  /**
   * Constructs a <code>GetMerchantSalePlanDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMerchantSalePlanDto} obj Optional instance to populate.
   * @return {module:model/GetMerchantSalePlanDto} The populated <code>GetMerchantSalePlanDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetMerchantSalePlanDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('payment_types'))
        obj.paymentTypes = ApiClient.convertToType(data['payment_types'], [GetPaymentTypeDto]);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('acquirer'))
        obj.acquirer = GetAcquirerDto.constructFromObject(data['acquirer']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetMerchantSalePlanDto.prototype.id = undefined;

/**
 * @member {String} name
 */
GetMerchantSalePlanDto.prototype.name = undefined;

/**
 * @member {String} description
 */
GetMerchantSalePlanDto.prototype.description = undefined;

/**
 * @member {Array.<module:model/GetPaymentTypeDto>} paymentTypes
 */
GetMerchantSalePlanDto.prototype.paymentTypes = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GetMerchantSalePlanDto.TypeEnum = {
  /**
   * value: "markup"
   * @const
   */
  markup: "markup",

  /**
   * value: "spread"
   * @const
   */
  spread: "spread",

  /**
   * value: "split"
   * @const
   */
  split: "split"
};
/**
 * @member {module:model/GetMerchantSalePlanDto.TypeEnum} type
 */
GetMerchantSalePlanDto.prototype.type = undefined;

/**
 * @member {module:model/GetAcquirerDto} acquirer
 */
GetMerchantSalePlanDto.prototype.acquirer = undefined;
