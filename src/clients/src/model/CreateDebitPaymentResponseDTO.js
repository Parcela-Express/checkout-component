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
 * The CreateDebitPaymentResponseDTO model module.
 * @module model/CreateDebitPaymentResponseDTO
 * @version 1.0
 */
export class CreateDebitPaymentResponseDTO {
  /**
   * Constructs a new <code>CreateDebitPaymentResponseDTO</code>.
   * @alias module:model/CreateDebitPaymentResponseDTO
   * @class
   * @param paymentData {String} 
   * @param paymentMethodType {String} 
   * @param token {String} 
   * @param type {String} 
   * @param resultCode {String} 
   */
  constructor(paymentData, paymentMethodType, token, type, resultCode) {
    this.paymentData = paymentData;
    this.paymentMethodType = paymentMethodType;
    this.token = token;
    this.type = type;
    this.resultCode = resultCode;
  }

  /**
   * Constructs a <code>CreateDebitPaymentResponseDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDebitPaymentResponseDTO} obj Optional instance to populate.
   * @return {module:model/CreateDebitPaymentResponseDTO} The populated <code>CreateDebitPaymentResponseDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateDebitPaymentResponseDTO();
      if (data.hasOwnProperty('paymentData'))
        obj.paymentData = ApiClient.convertToType(data['paymentData'], 'String');
      if (data.hasOwnProperty('paymentMethodType'))
        obj.paymentMethodType = ApiClient.convertToType(data['paymentMethodType'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('resultCode'))
        obj.resultCode = ApiClient.convertToType(data['resultCode'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} paymentData
 */
CreateDebitPaymentResponseDTO.prototype.paymentData = undefined;

/**
 * @member {String} paymentMethodType
 */
CreateDebitPaymentResponseDTO.prototype.paymentMethodType = undefined;

/**
 * @member {String} token
 */
CreateDebitPaymentResponseDTO.prototype.token = undefined;

/**
 * @member {String} type
 */
CreateDebitPaymentResponseDTO.prototype.type = undefined;

/**
 * @member {String} resultCode
 */
CreateDebitPaymentResponseDTO.prototype.resultCode = undefined;
