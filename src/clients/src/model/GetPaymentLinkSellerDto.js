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
import GetAddressDto from './GetAddressDto';

/**
 * The GetPaymentLinkSellerDto model module.
 * @module model/GetPaymentLinkSellerDto
 * @version 1.0
 */
class GetPaymentLinkSellerDto {
    /**
     * Constructs a new <code>GetPaymentLinkSellerDto</code>.
     * @alias module:model/GetPaymentLinkSellerDto
     * @param id {String} 
     * @param name {String} 
     * @param description {String} 
     * @param document {String} 
     * @param address {module:model/GetAddressDto} 
     * @param phone {String} 
     */
    constructor(id, name, description, document, address, phone) { 
        
        GetPaymentLinkSellerDto.initialize(this, id, name, description, document, address, phone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, description, document, address, phone) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['description'] = description;
        obj['document'] = document;
        obj['address'] = address;
        obj['phone'] = phone;
    }

    /**
     * Constructs a <code>GetPaymentLinkSellerDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPaymentLinkSellerDto} obj Optional instance to populate.
     * @return {module:model/GetPaymentLinkSellerDto} The populated <code>GetPaymentLinkSellerDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPaymentLinkSellerDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = GetAddressDto.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('no_payment_methods')) {
                obj['no_payment_methods'] = ApiClient.convertToType(data['no_payment_methods'], ['String']);
            }
            if (data.hasOwnProperty('card_payer_check')) {
                obj['card_payer_check'] = ApiClient.convertToType(data['card_payer_check'], 'Boolean');
            }
            if (data.hasOwnProperty('card_payer_check_min_value')) {
                obj['card_payer_check_min_value'] = ApiClient.convertToType(data['card_payer_check_min_value'], 'Number');
            }
            if (data.hasOwnProperty('extract_name')) {
                obj['extract_name'] = ApiClient.convertToType(data['extract_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
GetPaymentLinkSellerDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetPaymentLinkSellerDto.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetPaymentLinkSellerDto.prototype['description'] = undefined;

/**
 * @member {String} document
 */
GetPaymentLinkSellerDto.prototype['document'] = undefined;

/**
 * @member {module:model/GetAddressDto} address
 */
GetPaymentLinkSellerDto.prototype['address'] = undefined;

/**
 * @member {String} phone
 */
GetPaymentLinkSellerDto.prototype['phone'] = undefined;

/**
 * @member {Array.<String>} no_payment_methods
 */
GetPaymentLinkSellerDto.prototype['no_payment_methods'] = undefined;

/**
 * @member {Boolean} card_payer_check
 */
GetPaymentLinkSellerDto.prototype['card_payer_check'] = undefined;

/**
 * @member {Number} card_payer_check_min_value
 */
GetPaymentLinkSellerDto.prototype['card_payer_check_min_value'] = undefined;

/**
 * @member {String} extract_name
 */
GetPaymentLinkSellerDto.prototype['extract_name'] = undefined;






export default GetPaymentLinkSellerDto;

