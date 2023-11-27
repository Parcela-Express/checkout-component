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
 * The InstallmentPlanDTO model module.
 * @module model/InstallmentPlanDTO
 * @version 1.0
 */
class InstallmentPlanDTO {
    /**
     * Constructs a new <code>InstallmentPlanDTO</code>.
     * @alias module:model/InstallmentPlanDTO
     * @param number_installments {Number} 
     */
    constructor(number_installments) { 
        
        InstallmentPlanDTO.initialize(this, number_installments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, number_installments) { 
        obj['number_installments'] = number_installments;
    }

    /**
     * Constructs a <code>InstallmentPlanDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallmentPlanDTO} obj Optional instance to populate.
     * @return {module:model/InstallmentPlanDTO} The populated <code>InstallmentPlanDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstallmentPlanDTO();

            if (data.hasOwnProperty('number_installments')) {
                obj['number_installments'] = ApiClient.convertToType(data['number_installments'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} number_installments
 */
InstallmentPlanDTO.prototype['number_installments'] = undefined;






export default InstallmentPlanDTO;

