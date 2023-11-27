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
* Enum class CurrencyEnum.
* @enum {}
* @readonly
*/
export default class CurrencyEnum {
    
        /**
         * value: "BRL"
         * @const
         */
        "BRL" = "BRL";

    
        /**
         * value: "USD"
         * @const
         */
        "USD" = "USD";

    

    /**
    * Returns a <code>CurrencyEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CurrencyEnum} The enum <code>CurrencyEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

