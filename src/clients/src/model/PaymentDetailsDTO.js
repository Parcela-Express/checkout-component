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
 * The PaymentDetailsDTO model module.
 * @module model/PaymentDetailsDTO
 * @version 1.0
 */
class PaymentDetailsDTO {
    /**
     * Constructs a new <code>PaymentDetailsDTO</code>.
     * @alias module:model/PaymentDetailsDTO
     * @param data {Object} 
     * @param PaRes {String} 
     * @param MD {String} 
     * @param PaReq {String} 
     */
    constructor(data, PaRes, MD, PaReq) { 
        
        PaymentDetailsDTO.initialize(this, data, PaRes, MD, PaReq);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, PaRes, MD, PaReq) { 
        obj['data'] = data;
        obj['PaRes'] = PaRes;
        obj['MD'] = MD;
        obj['PaReq'] = PaReq;
    }

    /**
     * Constructs a <code>PaymentDetailsDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentDetailsDTO} obj Optional instance to populate.
     * @return {module:model/PaymentDetailsDTO} The populated <code>PaymentDetailsDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentDetailsDTO();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('PaRes')) {
                obj['PaRes'] = ApiClient.convertToType(data['PaRes'], 'String');
            }
            if (data.hasOwnProperty('MD')) {
                obj['MD'] = ApiClient.convertToType(data['MD'], 'String');
            }
            if (data.hasOwnProperty('PaReq')) {
                obj['PaReq'] = ApiClient.convertToType(data['PaReq'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} data
 */
PaymentDetailsDTO.prototype['data'] = undefined;

/**
 * @member {String} PaRes
 */
PaymentDetailsDTO.prototype['PaRes'] = undefined;

/**
 * @member {String} MD
 */
PaymentDetailsDTO.prototype['MD'] = undefined;

/**
 * @member {String} PaReq
 */
PaymentDetailsDTO.prototype['PaReq'] = undefined;






export default PaymentDetailsDTO;
