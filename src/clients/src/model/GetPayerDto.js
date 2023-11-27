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
import GetPayerSellerDto from './GetPayerSellerDto';

/**
 * The GetPayerDto model module.
 * @module model/GetPayerDto
 * @version 1.0
 */
class GetPayerDto {
    /**
     * Constructs a new <code>GetPayerDto</code>.
     * @alias module:model/GetPayerDto
     * @param id {String} 
     * @param name {String} 
     * @param document {String} 
     * @param email {String} 
     * @param created_at {String} 
     * @param address {module:model/GetAddressDto} 
     * @param phone {String} 
     * @param seller {module:model/GetPayerSellerDto} 
     */
    constructor(id, name, document, email, created_at, address, phone, seller) { 
        
        GetPayerDto.initialize(this, id, name, document, email, created_at, address, phone, seller);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, document, email, created_at, address, phone, seller) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['document'] = document;
        obj['email'] = email;
        obj['created_at'] = created_at;
        obj['address'] = address;
        obj['phone'] = phone;
        obj['seller'] = seller;
    }

    /**
     * Constructs a <code>GetPayerDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayerDto} obj Optional instance to populate.
     * @return {module:model/GetPayerDto} The populated <code>GetPayerDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPayerDto();

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
                obj['address'] = GetAddressDto.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = GetPayerSellerDto.constructFromObject(data['seller']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
GetPayerDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetPayerDto.prototype['name'] = undefined;

/**
 * @member {String} document
 */
GetPayerDto.prototype['document'] = undefined;

/**
 * @member {String} email
 */
GetPayerDto.prototype['email'] = undefined;

/**
 * @member {String} created_at
 */
GetPayerDto.prototype['created_at'] = undefined;

/**
 * @member {module:model/GetAddressDto} address
 */
GetPayerDto.prototype['address'] = undefined;

/**
 * @member {String} phone
 */
GetPayerDto.prototype['phone'] = undefined;

/**
 * @member {module:model/GetPayerSellerDto} seller
 */
GetPayerDto.prototype['seller'] = undefined;






export default GetPayerDto;

