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
 * The GetProtestLinkPayerDto model module.
 * @module model/GetProtestLinkPayerDto
 * @version 1.0
 */
class GetProtestLinkPayerDto {
    /**
     * Constructs a new <code>GetProtestLinkPayerDto</code>.
     * @alias module:model/GetProtestLinkPayerDto
     * @param id {String} 
     * @param name {String} 
     * @param document {String} 
     * @param email {String} 
     */
    constructor(id, name, document, email) { 
        
        GetProtestLinkPayerDto.initialize(this, id, name, document, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, document, email) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['document'] = document;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>GetProtestLinkPayerDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProtestLinkPayerDto} obj Optional instance to populate.
     * @return {module:model/GetProtestLinkPayerDto} The populated <code>GetProtestLinkPayerDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProtestLinkPayerDto();

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
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
GetProtestLinkPayerDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProtestLinkPayerDto.prototype['name'] = undefined;

/**
 * @member {String} document
 */
GetProtestLinkPayerDto.prototype['document'] = undefined;

/**
 * @member {String} email
 */
GetProtestLinkPayerDto.prototype['email'] = undefined;






export default GetProtestLinkPayerDto;

