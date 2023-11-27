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
import Address from './Address';
import Seller from './Seller';

/**
 * The Payer model module.
 * @module model/Payer
 * @version 1.0
 */
class Payer {
    /**
     * Constructs a new <code>Payer</code>.
     * @alias module:model/Payer
     * @param name {String} 
     * @param seller {module:model/Seller} 
     */
    constructor(name, seller) { 
        
        Payer.initialize(this, name, seller);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, seller) { 
        obj['name'] = name;
        obj['seller'] = seller;
    }

    /**
     * Constructs a <code>Payer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Payer} obj Optional instance to populate.
     * @return {module:model/Payer} The populated <code>Payer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Payer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = Seller.constructFromObject(data['seller']);
            }
            if (data.hasOwnProperty('birth_date')) {
                obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Payer.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Payer.prototype['name'] = undefined;

/**
 * @member {String} document
 */
Payer.prototype['document'] = undefined;

/**
 * @member {String} email
 */
Payer.prototype['email'] = undefined;

/**
 * @member {String} created_at
 */
Payer.prototype['created_at'] = undefined;

/**
 * @member {module:model/Address} address
 */
Payer.prototype['address'] = undefined;

/**
 * @member {String} phone
 */
Payer.prototype['phone'] = undefined;

/**
 * @member {module:model/Seller} seller
 */
Payer.prototype['seller'] = undefined;

/**
 * @member {String} birth_date
 */
Payer.prototype['birth_date'] = undefined;






export default Payer;

