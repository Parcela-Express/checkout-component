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
 * The GetBilletPayerAddressDto model module.
 * @module model/GetBilletPayerAddressDto
 * @version 1.0
 */
class GetBilletPayerAddressDto {
    /**
     * Constructs a new <code>GetBilletPayerAddressDto</code>.
     * @alias module:model/GetBilletPayerAddressDto
     * @param complement {String} 
     * @param district {String} 
     * @param street {String} 
     * @param number {String} 
     * @param zipcode {String} 
     * @param state {String} 
     * @param city {String} 
     */
    constructor(complement, district, street, number, zipcode, state, city) { 
        
        GetBilletPayerAddressDto.initialize(this, complement, district, street, number, zipcode, state, city);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, complement, district, street, number, zipcode, state, city) { 
        obj['complement'] = complement;
        obj['district'] = district;
        obj['street'] = street;
        obj['number'] = number;
        obj['zipcode'] = zipcode;
        obj['state'] = state;
        obj['city'] = city;
    }

    /**
     * Constructs a <code>GetBilletPayerAddressDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBilletPayerAddressDto} obj Optional instance to populate.
     * @return {module:model/GetBilletPayerAddressDto} The populated <code>GetBilletPayerAddressDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBilletPayerAddressDto();

            if (data.hasOwnProperty('complement')) {
                obj['complement'] = ApiClient.convertToType(data['complement'], 'String');
            }
            if (data.hasOwnProperty('district')) {
                obj['district'] = ApiClient.convertToType(data['district'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('zipcode')) {
                obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
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
 * @member {String} complement
 */
GetBilletPayerAddressDto.prototype['complement'] = undefined;

/**
 * @member {String} district
 */
GetBilletPayerAddressDto.prototype['district'] = undefined;

/**
 * @member {String} street
 */
GetBilletPayerAddressDto.prototype['street'] = undefined;

/**
 * @member {String} number
 */
GetBilletPayerAddressDto.prototype['number'] = undefined;

/**
 * @member {String} zipcode
 */
GetBilletPayerAddressDto.prototype['zipcode'] = undefined;

/**
 * @member {String} state
 */
GetBilletPayerAddressDto.prototype['state'] = undefined;

/**
 * @member {String} city
 */
GetBilletPayerAddressDto.prototype['city'] = undefined;






export default GetBilletPayerAddressDto;

