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
import {GetBilletDto} from './GetBilletDto';
import {GetSalePayerDto} from './GetSalePayerDto';
import {GetSalePlanPaymentTypeDto} from './GetSalePlanPaymentTypeDto';

/**
 * The GetSellerSaleDto model module.
 * @module model/GetSellerSaleDto
 * @version 1.0
 */
export class GetSellerSaleDto {
  /**
   * Constructs a new <code>GetSellerSaleDto</code>.
   * @alias module:model/GetSellerSaleDto
   * @class
   * @param id {String} 
   * @param description {String} 
   * @param createdAt {String} 
   * @param originalAmount {Number} 
   * @param type {module:model/GetSellerSaleDto.TypeEnum} 
   * @param paymentType {module:model/GetSalePlanPaymentTypeDto} 
   * @param payer {module:model/GetSalePayerDto} 
   * @param billet {module:model/GetBilletDto} 
   */
  constructor(id, description, createdAt, originalAmount, type, paymentType, payer, billet) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.originalAmount = originalAmount;
    this.type = type;
    this.paymentType = paymentType;
    this.payer = payer;
    this.billet = billet;
  }

  /**
   * Constructs a <code>GetSellerSaleDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSellerSaleDto} obj Optional instance to populate.
   * @return {module:model/GetSellerSaleDto} The populated <code>GetSellerSaleDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSellerSaleDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('original_amount'))
        obj.originalAmount = ApiClient.convertToType(data['original_amount'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('payment_type'))
        obj.paymentType = GetSalePlanPaymentTypeDto.constructFromObject(data['payment_type']);
      if (data.hasOwnProperty('payer'))
        obj.payer = GetSalePayerDto.constructFromObject(data['payer']);
      if (data.hasOwnProperty('billet'))
        obj.billet = GetBilletDto.constructFromObject(data['billet']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetSellerSaleDto.prototype.id = undefined;

/**
 * @member {String} description
 */
GetSellerSaleDto.prototype.description = undefined;

/**
 * @member {String} createdAt
 */
GetSellerSaleDto.prototype.createdAt = undefined;

/**
 * @member {Number} originalAmount
 */
GetSellerSaleDto.prototype.originalAmount = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GetSellerSaleDto.TypeEnum = {
  /**
   * value: "boleto"
   * @const
   */
  boleto: "boleto",

  /**
   * value: "pos"
   * @const
   */
  pos: "pos",

  /**
   * value: "payment_link"
   * @const
   */
  paymentLink: "payment_link",

  /**
   * value: "protest_link"
   * @const
   */
  protestLink: "protest_link",

  /**
   * value: "online"
   * @const
   */
  online: "online",

  /**
   * value: "auto_generate_payment_link"
   * @const
   */
  autoGeneratePaymentLink: "auto_generate_payment_link",

  /**
   * value: "auto_generate_protest_link"
   * @const
   */
  autoGenerateProtestLink: "auto_generate_protest_link"
};
/**
 * @member {module:model/GetSellerSaleDto.TypeEnum} type
 */
GetSellerSaleDto.prototype.type = undefined;

/**
 * @member {module:model/GetSalePlanPaymentTypeDto} paymentType
 */
GetSellerSaleDto.prototype.paymentType = undefined;

/**
 * @member {module:model/GetSalePayerDto} payer
 */
GetSellerSaleDto.prototype.payer = undefined;

/**
 * @member {module:model/GetBilletDto} billet
 */
GetSellerSaleDto.prototype.billet = undefined;

