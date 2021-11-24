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
 * The CancelPaymentResponseDTO model module.
 * @module model/CancelPaymentResponseDTO
 * @version 1.0
 */
export class CancelPaymentResponseDTO {
  /**
   * Constructs a new <code>CancelPaymentResponseDTO</code>.
   * @alias module:model/CancelPaymentResponseDTO
   * @class
   * @param pspReference {String} 
   * @param response {String} 
   */
  constructor(pspReference, response) {
    this.pspReference = pspReference;
    this.response = response;
  }

  /**
   * Constructs a <code>CancelPaymentResponseDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelPaymentResponseDTO} obj Optional instance to populate.
   * @return {module:model/CancelPaymentResponseDTO} The populated <code>CancelPaymentResponseDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CancelPaymentResponseDTO();
      if (data.hasOwnProperty('pspReference'))
        obj.pspReference = ApiClient.convertToType(data['pspReference'], 'String');
      if (data.hasOwnProperty('response'))
        obj.response = ApiClient.convertToType(data['response'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} pspReference
 */
CancelPaymentResponseDTO.prototype.pspReference = undefined;

/**
 * @member {String} response
 */
CancelPaymentResponseDTO.prototype.response = undefined;
