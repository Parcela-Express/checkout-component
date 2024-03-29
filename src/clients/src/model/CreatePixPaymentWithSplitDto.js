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
import {CreateSplitRulesDto} from './CreateSplitRulesDto';
import {CustomerDTO} from './CustomerDTO';

/**
 * The CreatePixPaymentWithSplitDto model module.
 * @module model/CreatePixPaymentWithSplitDto
 * @version 1.0
 */
export class CreatePixPaymentWithSplitDto {
  /**
   * Constructs a new <code>CreatePixPaymentWithSplitDto</code>.
   * @alias module:model/CreatePixPaymentWithSplitDto
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
   * Constructs a <code>CreatePixPaymentWithSplitDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePixPaymentWithSplitDto} obj Optional instance to populate.
   * @return {module:model/CreatePixPaymentWithSplitDto} The populated <code>CreatePixPaymentWithSplitDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePixPaymentWithSplitDto();
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
      if (data.hasOwnProperty('has_split_rules'))
        obj.hasSplitRules = ApiClient.convertToType(data['has_split_rules'], 'Boolean');
      if (data.hasOwnProperty('split_rules'))
        obj.splitRules = ApiClient.convertToType(data['split_rules'], [CreateSplitRulesDto]);
    }
    return obj;
  }
}

/**
 * @member {Number} amountCents
 */
CreatePixPaymentWithSplitDto.prototype.amountCents = undefined;

/**
 * @member {String} description
 */
CreatePixPaymentWithSplitDto.prototype.description = undefined;

/**
 * @member {module:model/CustomerDTO} customer
 */
CreatePixPaymentWithSplitDto.prototype.customer = undefined;

/**
 * @member {String} saleId
 */
CreatePixPaymentWithSplitDto.prototype.saleId = undefined;

/**
 * @member {Boolean} protestLink
 */
CreatePixPaymentWithSplitDto.prototype.protestLink = undefined;

/**
 * @member {Number} amountFee
 */
CreatePixPaymentWithSplitDto.prototype.amountFee = undefined;

/**
 * @member {Boolean} hasSplitRules
 */
CreatePixPaymentWithSplitDto.prototype.hasSplitRules = undefined;

/**
 * @member {Array.<module:model/CreateSplitRulesDto>} splitRules
 */
CreatePixPaymentWithSplitDto.prototype.splitRules = undefined;

