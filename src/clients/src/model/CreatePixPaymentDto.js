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
import {CustomerDTO} from './CustomerDTO';

/**
 * The CreatePixPaymentDto model module.
 * @module model/CreatePixPaymentDto
 * @version 1.0
 */
export class CreatePixPaymentDto {
  /**
   * Constructs a new <code>CreatePixPaymentDto</code>.
   * @alias module:model/CreatePixPaymentDto
   * @class
   * @param amountCents {Number} 
   * @param description {String} 
   * @param customer {module:model/CustomerDTO} 
   */
  constructor(amountCents, description, customer) {
    this.amountCents = amountCents;
    this.description = description;
    this.customer = customer;
  }

  /**
   * Constructs a <code>CreatePixPaymentDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePixPaymentDto} obj Optional instance to populate.
   * @return {module:model/CreatePixPaymentDto} The populated <code>CreatePixPaymentDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePixPaymentDto();
      if (data.hasOwnProperty('amount_cents'))
        obj.amountCents = ApiClient.convertToType(data['amount_cents'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('customer'))
        obj.customer = CustomerDTO.constructFromObject(data['customer']);
      if (data.hasOwnProperty('sale_id'))
        obj.saleId = ApiClient.convertToType(data['sale_id'], 'String');
      if (data.hasOwnProperty('protest_link'))
        obj.protestLink = ApiClient.convertToType(data['protest_link'], 'Boolean');
      if (data.hasOwnProperty('amount_fee'))
        obj.amountFee = ApiClient.convertToType(data['amount_fee'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} amountCents
 */
CreatePixPaymentDto.prototype.amountCents = undefined;

/**
 * @member {String} description
 */
CreatePixPaymentDto.prototype.description = undefined;

/**
 * @member {module:model/CustomerDTO} customer
 */
CreatePixPaymentDto.prototype.customer = undefined;

/**
 * @member {String} saleId
 */
CreatePixPaymentDto.prototype.saleId = undefined;

/**
 * @member {Boolean} protestLink
 */
CreatePixPaymentDto.prototype.protestLink = undefined;

/**
 * @member {Number} amountFee
 */
CreatePixPaymentDto.prototype.amountFee = undefined;
