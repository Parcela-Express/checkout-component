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
import {CreatePaymentLinkPayerDto} from './CreatePaymentLinkPayerDto';

/**
 * The CreatePaymentLinkDto model module.
 * @module model/CreatePaymentLinkDto
 * @version 1.0
 */
export class CreatePaymentLinkDto {
  /**
   * Constructs a new <code>CreatePaymentLinkDto</code>.
   * @alias module:model/CreatePaymentLinkDto
   * @class
   * @param amount {Number} 
   * @param description {String} 
   * @param sellerId {String} 
   * @param payer {module:model/CreatePaymentLinkPayerDto} 
   * @param paymentMethods {Array.<String>} 
   */
  constructor(amount, description, sellerId, payer, paymentMethods) {
    this.amount = amount;
    this.description = description;
    this.sellerId = sellerId;
    this.payer = payer;
    this.paymentMethods = paymentMethods;
  }

  /**
   * Constructs a <code>CreatePaymentLinkDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePaymentLinkDto} obj Optional instance to populate.
   * @return {module:model/CreatePaymentLinkDto} The populated <code>CreatePaymentLinkDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePaymentLinkDto();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('expires_in'))
        obj.expiresIn = ApiClient.convertToType(data['expires_in'], 'String');
      if (data.hasOwnProperty('seller_id'))
        obj.sellerId = ApiClient.convertToType(data['seller_id'], 'String');
      if (data.hasOwnProperty('payer'))
        obj.payer = CreatePaymentLinkPayerDto.constructFromObject(data['payer']);
      if (data.hasOwnProperty('payment_methods'))
        obj.paymentMethods = ApiClient.convertToType(data['payment_methods'], ['String']);
      if (data.hasOwnProperty('pre_capture'))
        obj.preCapture = ApiClient.convertToType(data['pre_capture'], 'Boolean');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} amount
 */
CreatePaymentLinkDto.prototype.amount = undefined;

/**
 * @member {String} description
 */
CreatePaymentLinkDto.prototype.description = undefined;

/**
 * @member {String} expiresIn
 */
CreatePaymentLinkDto.prototype.expiresIn = undefined;

/**
 * @member {String} sellerId
 */
CreatePaymentLinkDto.prototype.sellerId = undefined;

/**
 * @member {module:model/CreatePaymentLinkPayerDto} payer
 */
CreatePaymentLinkDto.prototype.payer = undefined;

/**
 * @member {Array.<String>} paymentMethods
 */
CreatePaymentLinkDto.prototype.paymentMethods = undefined;

/**
 * @member {Boolean} preCapture
 */
CreatePaymentLinkDto.prototype.preCapture = undefined;

/**
 * @member {Object} metadata
 */
CreatePaymentLinkDto.prototype.metadata = undefined;
