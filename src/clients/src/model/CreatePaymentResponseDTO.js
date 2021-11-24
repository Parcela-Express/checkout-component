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
import {AmountDTO} from './AmountDTO';
import {CreateSplitRulesDto} from './CreateSplitRulesDto';

/**
 * The CreatePaymentResponseDTO model module.
 * @module model/CreatePaymentResponseDTO
 * @version 1.0
 */
export class CreatePaymentResponseDTO {
  /**
   * Constructs a new <code>CreatePaymentResponseDTO</code>.
   * @alias module:model/CreatePaymentResponseDTO
   * @class
   * @param pspReference {String} 
   * @param resultCode {String} 
   * @param merchantReference {String} 
   * @param amount {module:model/AmountDTO} 
   * @param action {Object} 
   */
  constructor(pspReference, resultCode, merchantReference, amount, action) {
    this.pspReference = pspReference;
    this.resultCode = resultCode;
    this.merchantReference = merchantReference;
    this.amount = amount;
    this.action = action;
  }

  /**
   * Constructs a <code>CreatePaymentResponseDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePaymentResponseDTO} obj Optional instance to populate.
   * @return {module:model/CreatePaymentResponseDTO} The populated <code>CreatePaymentResponseDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePaymentResponseDTO();
      if (data.hasOwnProperty('pspReference'))
        obj.pspReference = ApiClient.convertToType(data['pspReference'], 'String');
      if (data.hasOwnProperty('resultCode'))
        obj.resultCode = ApiClient.convertToType(data['resultCode'], 'String');
      if (data.hasOwnProperty('merchantReference'))
        obj.merchantReference = ApiClient.convertToType(data['merchantReference'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = AmountDTO.constructFromObject(data['amount']);
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], Object);
      if (data.hasOwnProperty('splitRules'))
        obj.splitRules = ApiClient.convertToType(data['splitRules'], [CreateSplitRulesDto]);
      if (data.hasOwnProperty('hasSplitRules'))
        obj.hasSplitRules = ApiClient.convertToType(data['hasSplitRules'], 'Boolean');
      if (data.hasOwnProperty('sale_id'))
        obj.saleId = ApiClient.convertToType(data['sale_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} pspReference
 */
CreatePaymentResponseDTO.prototype.pspReference = undefined;

/**
 * @member {String} resultCode
 */
CreatePaymentResponseDTO.prototype.resultCode = undefined;

/**
 * @member {String} merchantReference
 */
CreatePaymentResponseDTO.prototype.merchantReference = undefined;

/**
 * @member {module:model/AmountDTO} amount
 */
CreatePaymentResponseDTO.prototype.amount = undefined;

/**
 * @member {Object} action
 */
CreatePaymentResponseDTO.prototype.action = undefined;

/**
 * @member {Array.<module:model/CreateSplitRulesDto>} splitRules
 */
CreatePaymentResponseDTO.prototype.splitRules = undefined;

/**
 * @member {Boolean} hasSplitRules
 */
CreatePaymentResponseDTO.prototype.hasSplitRules = undefined;

/**
 * @member {String} saleId
 */
CreatePaymentResponseDTO.prototype.saleId = undefined;
