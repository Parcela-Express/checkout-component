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
 * The CreateAddressDto model module.
 * @module model/CreateAddressDto
 * @version 1.0
 */
class CreateAddressDto {
    /**
     * Constructs a new <code>CreateAddressDto</code>.
     * @alias module:model/CreateAddressDto
     * @param zipcode {String} 
     * @param street {String} 
     * @param number {String} 
     * @param complement {String} 
     * @param district {String} 
     * @param state {String} 
     * @param city {String} 
     */
    constructor(zipcode, street, number, complement, district, state, city) { 
        
        CreateAddressDto.initialize(this, zipcode, street, number, complement, district, state, city);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, zipcode, street, number, complement, district, state, city) { 
        obj['zipcode'] = zipcode;
        obj['street'] = street;
        obj['number'] = number;
        obj['complement'] = complement;
        obj['district'] = district;
        obj['state'] = state;
        obj['city'] = city;
    }

    /**
     * Constructs a <code>CreateAddressDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAddressDto} obj Optional instance to populate.
     * @return {module:model/CreateAddressDto} The populated <code>CreateAddressDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAddressDto();

            if (data.hasOwnProperty('zipcode')) {
                obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('complement')) {
                obj['complement'] = ApiClient.convertToType(data['complement'], 'String');
            }
            if (data.hasOwnProperty('district')) {
                obj['district'] = ApiClient.convertToType(data['district'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} zipcode
 */
CreateAddressDto.prototype['zipcode'] = undefined;

/**
 * @member {String} street
 */
CreateAddressDto.prototype['street'] = undefined;

/**
 * @member {String} number
 */
CreateAddressDto.prototype['number'] = undefined;

/**
 * @member {String} complement
 */
CreateAddressDto.prototype['complement'] = undefined;

/**
 * @member {String} district
 */
CreateAddressDto.prototype['district'] = undefined;

/**
 * @member {String} state
 */
CreateAddressDto.prototype['state'] = undefined;

/**
 * @member {String} city
 */
CreateAddressDto.prototype['city'] = undefined;






export default CreateAddressDto;

