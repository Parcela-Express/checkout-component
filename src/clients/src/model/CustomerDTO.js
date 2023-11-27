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
import CreateDebitAddressDTO from './CreateDebitAddressDTO';

/**
 * The CustomerDTO model module.
 * @module model/CustomerDTO
 * @version 1.0
 */
class CustomerDTO {
    /**
     * Constructs a new <code>CustomerDTO</code>.
     * @alias module:model/CustomerDTO
     * @param first_name {String} 
     * @param last_name {String} 
     */
    constructor(first_name, last_name) { 
        
        CustomerDTO.initialize(this, first_name, last_name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, first_name, last_name) { 
        obj['first_name'] = first_name;
        obj['last_name'] = last_name;
    }

    /**
     * Constructs a <code>CustomerDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerDTO} obj Optional instance to populate.
     * @return {module:model/CustomerDTO} The populated <code>CustomerDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerDTO();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('billing_address')) {
                obj['billing_address'] = CreateDebitAddressDTO.constructFromObject(data['billing_address']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
CustomerDTO.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
CustomerDTO.prototype['last_name'] = undefined;

/**
 * Número do CPF/CNPJ do comprador
 * @member {String} document
 */
CustomerDTO.prototype['document'] = undefined;

/**
 * @member {String} email
 */
CustomerDTO.prototype['email'] = undefined;

/**
 * @member {String} ip
 */
CustomerDTO.prototype['ip'] = undefined;

/**
 * @member {module:model/CreateDebitAddressDTO} billing_address
 */
CustomerDTO.prototype['billing_address'] = undefined;






export default CustomerDTO;

