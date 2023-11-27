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
import BillingAddressDTO from './BillingAddressDTO';

/**
 * The ShopperDTO model module.
 * @module model/ShopperDTO
 * @version 1.0
 */
class ShopperDTO {
    /**
     * Constructs a new <code>ShopperDTO</code>.
     * @alias module:model/ShopperDTO
     * @param first_name {String} 
     * @param last_name {String} 
     * @param billing_address {module:model/BillingAddressDTO} 
     */
    constructor(first_name, last_name, billing_address) { 
        
        ShopperDTO.initialize(this, first_name, last_name, billing_address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, first_name, last_name, billing_address) { 
        obj['first_name'] = first_name;
        obj['last_name'] = last_name;
        obj['billing_address'] = billing_address;
    }

    /**
     * Constructs a <code>ShopperDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShopperDTO} obj Optional instance to populate.
     * @return {module:model/ShopperDTO} The populated <code>ShopperDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShopperDTO();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('billing_address')) {
                obj['billing_address'] = BillingAddressDTO.constructFromObject(data['billing_address']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
ShopperDTO.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
ShopperDTO.prototype['last_name'] = undefined;

/**
 * @member {String} email
 */
ShopperDTO.prototype['email'] = undefined;

/**
 * @member {String} phone
 */
ShopperDTO.prototype['phone'] = undefined;

/**
 * @member {module:model/BillingAddressDTO} billing_address
 */
ShopperDTO.prototype['billing_address'] = undefined;






export default ShopperDTO;

