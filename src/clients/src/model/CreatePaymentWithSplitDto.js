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
 * The CreatePaymentWithSplitDto model module.
 * @module model/CreatePaymentWithSplitDto
 * @version 1.0
 */
export class CreatePaymentWithSplitDto {
  /**
   * Constructs a new <code>CreatePaymentWithSplitDto</code>.
   * @alias module:model/CreatePaymentWithSplitDto
   * @class
   * @param amountCents {Number} 
   * @param description {String} 
   * @param cardAttributes {Object} 
   * @param installmentPlan {Object} 
   * @param customer {module:model/CustomerDTO} 
   */
  constructor(amountCents, description, cardAttributes, installmentPlan, customer) {
    this.amountCents = amountCents;
    this.description = description;
    this.cardAttributes = cardAttributes;
    this.installmentPlan = installmentPlan;
    this.customer = customer;
  }

  /**
   * Constructs a <code>CreatePaymentWithSplitDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePaymentWithSplitDto} obj Optional instance to populate.
   * @return {module:model/CreatePaymentWithSplitDto} The populated <code>CreatePaymentWithSplitDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePaymentWithSplitDto();
      if (data.hasOwnProperty('amount_cents'))
        obj.amountCents = ApiClient.convertToType(data['amount_cents'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('card_attributes'))
        obj.cardAttributes = ApiClient.convertToType(data['card_attributes'], Object);
      if (data.hasOwnProperty('installment_plan'))
        obj.installmentPlan = ApiClient.convertToType(data['installment_plan'], Object);
      if (data.hasOwnProperty('customer'))
        obj.customer = CustomerDTO.constructFromObject(data['customer']);
      if (data.hasOwnProperty('sale_id'))
        obj.saleId = ApiClient.convertToType(data['sale_id'], 'String');
      if (data.hasOwnProperty('pre_capture'))
        obj.preCapture = ApiClient.convertToType(data['pre_capture'], 'Boolean');
      if (data.hasOwnProperty('protest_link'))
        obj.protestLink = ApiClient.convertToType(data['protest_link'], 'Boolean');
      if (data.hasOwnProperty('amount_fee'))
        obj.amountFee = ApiClient.convertToType(data['amount_fee'], 'Number');
      if (data.hasOwnProperty('form_payment'))
        obj.formPayment = ApiClient.convertToType(data['form_payment'], 'String');
      if (data.hasOwnProperty('success_return_url'))
        obj.successReturnUrl = ApiClient.convertToType(data['success_return_url'], 'String');
      if (data.hasOwnProperty('error_return_url'))
        obj.errorReturnUrl = ApiClient.convertToType(data['error_return_url'], 'String');
      if (data.hasOwnProperty('has_split_rules'))
        obj.hasSplitRules = ApiClient.convertToType(data['has_split_rules'], 'Boolean');
      if (data.hasOwnProperty('split_rules'))
        obj.splitRules = ApiClient.convertToType(data['split_rules'], [CreateSplitRulesDto]);
      if (data.hasOwnProperty('recurrence'))
        obj.recurrence = ApiClient.convertToType(data['recurrence'], 'Boolean');
      if (data.hasOwnProperty('recurrence_day'))
        obj.recurrenceDay = ApiClient.convertToType(data['recurrence_day'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} amountCents
 */
CreatePaymentWithSplitDto.prototype.amountCents = undefined;

/**
 * @member {String} description
 */
CreatePaymentWithSplitDto.prototype.description = undefined;

/**
 * @member {Object} cardAttributes
 */
CreatePaymentWithSplitDto.prototype.cardAttributes = undefined;

/**
 * @member {Object} installmentPlan
 */
CreatePaymentWithSplitDto.prototype.installmentPlan = undefined;

/**
 * @member {module:model/CustomerDTO} customer
 */
CreatePaymentWithSplitDto.prototype.customer = undefined;

/**
 * @member {String} saleId
 */
CreatePaymentWithSplitDto.prototype.saleId = undefined;

/**
 * @member {Boolean} preCapture
 */
CreatePaymentWithSplitDto.prototype.preCapture = undefined;

/**
 * @member {Boolean} protestLink
 */
CreatePaymentWithSplitDto.prototype.protestLink = undefined;

/**
 * @member {Number} amountFee
 */
CreatePaymentWithSplitDto.prototype.amountFee = undefined;

/**
 * @member {String} formPayment
 */
CreatePaymentWithSplitDto.prototype.formPayment = undefined;

/**
 * @member {String} successReturnUrl
 */
CreatePaymentWithSplitDto.prototype.successReturnUrl = undefined;

/**
 * @member {String} errorReturnUrl
 */
CreatePaymentWithSplitDto.prototype.errorReturnUrl = undefined;

/**
 * @member {Boolean} hasSplitRules
 */
CreatePaymentWithSplitDto.prototype.hasSplitRules = undefined;

/**
 * @member {Array.<module:model/CreateSplitRulesDto>} splitRules
 */
CreatePaymentWithSplitDto.prototype.splitRules = undefined;

/**
 * @member {Boolean} recurrence
 */
CreatePaymentWithSplitDto.prototype.recurrence = undefined;

/**
 * @member {Number} recurrenceDay
 */
CreatePaymentWithSplitDto.prototype.recurrenceDay = undefined;