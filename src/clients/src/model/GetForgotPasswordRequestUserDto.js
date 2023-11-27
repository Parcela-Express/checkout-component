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
 * The GetForgotPasswordRequestUserDto model module.
 * @module model/GetForgotPasswordRequestUserDto
 * @version 1.0
 */
class GetForgotPasswordRequestUserDto {
    /**
     * Constructs a new <code>GetForgotPasswordRequestUserDto</code>.
     * @alias module:model/GetForgotPasswordRequestUserDto
     * @param name {String} 
     */
    constructor(name) { 
        
        GetForgotPasswordRequestUserDto.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GetForgotPasswordRequestUserDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetForgotPasswordRequestUserDto} obj Optional instance to populate.
     * @return {module:model/GetForgotPasswordRequestUserDto} The populated <code>GetForgotPasswordRequestUserDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetForgotPasswordRequestUserDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
GetForgotPasswordRequestUserDto.prototype['name'] = undefined;






export default GetForgotPasswordRequestUserDto;

