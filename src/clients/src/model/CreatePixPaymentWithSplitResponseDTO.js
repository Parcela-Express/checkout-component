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
import PaymentsSplitRulesDto from './PaymentsSplitRulesDto';

/**
 * The CreatePixPaymentWithSplitResponseDTO model module.
 * @module model/CreatePixPaymentWithSplitResponseDTO
 * @version 1.0
 */
class CreatePixPaymentWithSplitResponseDTO {
    /**
     * Constructs a new <code>CreatePixPaymentWithSplitResponseDTO</code>.
     * @alias module:model/CreatePixPaymentWithSplitResponseDTO
     * @param resultCode {String} 
     * @param qrCodeData {String} 
     * @param url {String} 
     */
    constructor(resultCode, qrCodeData, url) { 
        
        CreatePixPaymentWithSplitResponseDTO.initialize(this, resultCode, qrCodeData, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, resultCode, qrCodeData, url) { 
        obj['resultCode'] = resultCode;
        obj['qrCodeData'] = qrCodeData;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>CreatePixPaymentWithSplitResponseDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePixPaymentWithSplitResponseDTO} obj Optional instance to populate.
     * @return {module:model/CreatePixPaymentWithSplitResponseDTO} The populated <code>CreatePixPaymentWithSplitResponseDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePixPaymentWithSplitResponseDTO();

            if (data.hasOwnProperty('resultCode')) {
                obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'String');
            }
            if (data.hasOwnProperty('qrCodeData')) {
                obj['qrCodeData'] = ApiClient.convertToType(data['qrCodeData'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('hasSplitRules')) {
                obj['hasSplitRules'] = ApiClient.convertToType(data['hasSplitRules'], 'Boolean');
            }
            if (data.hasOwnProperty('splitRules')) {
                obj['splitRules'] = PaymentsSplitRulesDto.constructFromObject(data['splitRules']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} resultCode
 */
CreatePixPaymentWithSplitResponseDTO.prototype['resultCode'] = undefined;

/**
 * @member {String} qrCodeData
 */
CreatePixPaymentWithSplitResponseDTO.prototype['qrCodeData'] = undefined;

/**
 * @member {String} url
 */
CreatePixPaymentWithSplitResponseDTO.prototype['url'] = undefined;

/**
 * @member {Boolean} hasSplitRules
 */
CreatePixPaymentWithSplitResponseDTO.prototype['hasSplitRules'] = undefined;

/**
 * @member {module:model/PaymentsSplitRulesDto} splitRules
 */
CreatePixPaymentWithSplitResponseDTO.prototype['splitRules'] = undefined;






export default CreatePixPaymentWithSplitResponseDTO;

