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
 * The CreateMerchantUserDto model module.
 * @module model/CreateMerchantUserDto
 * @version 1.0
 */
class CreateMerchantUserDto {
    /**
     * Constructs a new <code>CreateMerchantUserDto</code>.
     * @alias module:model/CreateMerchantUserDto
     * @param name {String} 
     * @param password {String} 
     * @param email {String} 
     * @param role_id {String} 
     */
    constructor(name, password, email, role_id) { 
        
        CreateMerchantUserDto.initialize(this, name, password, email, role_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, password, email, role_id) { 
        obj['name'] = name;
        obj['password'] = password;
        obj['email'] = email;
        obj['role_id'] = role_id;
    }

    /**
     * Constructs a <code>CreateMerchantUserDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMerchantUserDto} obj Optional instance to populate.
     * @return {module:model/CreateMerchantUserDto} The populated <code>CreateMerchantUserDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMerchantUserDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateMerchantUserDto.prototype['name'] = undefined;

/**
 * @member {String} password
 */
CreateMerchantUserDto.prototype['password'] = undefined;

/**
 * @member {String} email
 */
CreateMerchantUserDto.prototype['email'] = undefined;

/**
 * @member {String} role_id
 */
CreateMerchantUserDto.prototype['role_id'] = undefined;






export default CreateMerchantUserDto;

