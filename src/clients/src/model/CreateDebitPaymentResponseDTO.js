/**
 * Parcela Express API
 * Parcela Express API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateDebitPaymentResponseDTO model module.
 * @module model/CreateDebitPaymentResponseDTO
 * @version 1.0
 */
class CreateDebitPaymentResponseDTO {
    /**
     * Constructs a new <code>CreateDebitPaymentResponseDTO</code>.
     * @alias module:model/CreateDebitPaymentResponseDTO
     * @param paymentData {String} 
     * @param paymentMethodType {String} 
     * @param token {String} 
     * @param type {String} 
     * @param resultCode {String} 
     * @param sale_id {String} 
     */
    constructor(paymentData, paymentMethodType, token, type, resultCode, sale_id) { 
        
        CreateDebitPaymentResponseDTO.initialize(this, paymentData, paymentMethodType, token, type, resultCode, sale_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paymentData, paymentMethodType, token, type, resultCode, sale_id) { 
        obj['paymentData'] = paymentData;
        obj['paymentMethodType'] = paymentMethodType;
        obj['token'] = token;
        obj['type'] = type;
        obj['resultCode'] = resultCode;
        obj['sale_id'] = sale_id;
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

            if (data.hasOwnProperty('paymentData')) {
                obj['paymentData'] = ApiClient.convertToType(data['paymentData'], 'String');
            }
            if (data.hasOwnProperty('paymentMethodType')) {
                obj['paymentMethodType'] = ApiClient.convertToType(data['paymentMethodType'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('resultCode')) {
                obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'String');
            }
            if (data.hasOwnProperty('sale_id')) {
                obj['sale_id'] = ApiClient.convertToType(data['sale_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} paymentData
 */
CreateDebitPaymentResponseDTO.prototype['paymentData'] = undefined;

/**
 * @member {String} paymentMethodType
 */
CreateDebitPaymentResponseDTO.prototype['paymentMethodType'] = undefined;

/**
 * @member {String} token
 */
CreateDebitPaymentResponseDTO.prototype['token'] = undefined;

/**
 * @member {String} type
 */
CreateDebitPaymentResponseDTO.prototype['type'] = undefined;

/**
 * @member {String} resultCode
 */
CreateDebitPaymentResponseDTO.prototype['resultCode'] = undefined;

/**
 * @member {String} sale_id
 */
CreateDebitPaymentResponseDTO.prototype['sale_id'] = undefined;






export default CreateDebitPaymentResponseDTO;

