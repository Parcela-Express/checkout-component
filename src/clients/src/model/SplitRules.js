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
import Seller from './Seller';

/**
 * The SplitRules model module.
 * @module model/SplitRules
 * @version 1.0
 */
class SplitRules {
    /**
     * Constructs a new <code>SplitRules</code>.
     * @alias module:model/SplitRules
     * @param amount {Number} 
     * @param main_seller {module:model/Seller} 
     * @param main_seller_id {String} 
     * @param main_seller_name {String} 
     * @param main_seller_document {String} 
     * @param main_seller_code {String} 
     * @param main_sale_id {String} 
     * @param splits {Array.<Object>} 
     */
    constructor(amount, main_seller, main_seller_id, main_seller_name, main_seller_document, main_seller_code, main_sale_id, splits) { 
        
        SplitRules.initialize(this, amount, main_seller, main_seller_id, main_seller_name, main_seller_document, main_seller_code, main_sale_id, splits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, main_seller, main_seller_id, main_seller_name, main_seller_document, main_seller_code, main_sale_id, splits) { 
        obj['amount'] = amount;
        obj['main_seller'] = main_seller;
        obj['main_seller_id'] = main_seller_id;
        obj['main_seller_name'] = main_seller_name;
        obj['main_seller_document'] = main_seller_document;
        obj['main_seller_code'] = main_seller_code;
        obj['main_sale_id'] = main_sale_id;
        obj['splits'] = splits;
    }

    /**
     * Constructs a <code>SplitRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SplitRules} obj Optional instance to populate.
     * @return {module:model/SplitRules} The populated <code>SplitRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SplitRules();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('main_seller')) {
                obj['main_seller'] = Seller.constructFromObject(data['main_seller']);
            }
            if (data.hasOwnProperty('main_seller_id')) {
                obj['main_seller_id'] = ApiClient.convertToType(data['main_seller_id'], 'String');
            }
            if (data.hasOwnProperty('main_seller_name')) {
                obj['main_seller_name'] = ApiClient.convertToType(data['main_seller_name'], 'String');
            }
            if (data.hasOwnProperty('main_seller_document')) {
                obj['main_seller_document'] = ApiClient.convertToType(data['main_seller_document'], 'String');
            }
            if (data.hasOwnProperty('main_seller_code')) {
                obj['main_seller_code'] = ApiClient.convertToType(data['main_seller_code'], 'String');
            }
            if (data.hasOwnProperty('main_sale_id')) {
                obj['main_sale_id'] = ApiClient.convertToType(data['main_sale_id'], 'String');
            }
            if (data.hasOwnProperty('splits')) {
                obj['splits'] = ApiClient.convertToType(data['splits'], [Object]);
            }
            if (data.hasOwnProperty('is_splited')) {
                obj['is_splited'] = ApiClient.convertToType(data['is_splited'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
SplitRules.prototype['id'] = undefined;

/**
 * @member {Number} amount
 */
SplitRules.prototype['amount'] = undefined;

/**
 * @member {module:model/Seller} main_seller
 */
SplitRules.prototype['main_seller'] = undefined;

/**
 * @member {String} main_seller_id
 */
SplitRules.prototype['main_seller_id'] = undefined;

/**
 * @member {String} main_seller_name
 */
SplitRules.prototype['main_seller_name'] = undefined;

/**
 * @member {String} main_seller_document
 */
SplitRules.prototype['main_seller_document'] = undefined;

/**
 * @member {String} main_seller_code
 */
SplitRules.prototype['main_seller_code'] = undefined;

/**
 * @member {String} main_sale_id
 */
SplitRules.prototype['main_sale_id'] = undefined;

/**
 * @member {Array.<Object>} splits
 */
SplitRules.prototype['splits'] = undefined;

/**
 * @member {Boolean} is_splited
 */
SplitRules.prototype['is_splited'] = undefined;






export default SplitRules;
