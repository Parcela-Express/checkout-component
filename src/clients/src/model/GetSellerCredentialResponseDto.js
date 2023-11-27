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
import Acquirer from './Acquirer';
import Seller from './Seller';

/**
 * The GetSellerCredentialResponseDto model module.
 * @module model/GetSellerCredentialResponseDto
 * @version 1.0
 */
class GetSellerCredentialResponseDto {
    /**
     * Constructs a new <code>GetSellerCredentialResponseDto</code>.
     * @alias module:model/GetSellerCredentialResponseDto
     * @param acquirer {module:model/Acquirer} 
     * @param seller {module:model/Seller} 
     * @param client_id {String} 
     */
    constructor(acquirer, seller, client_id) { 
        
        GetSellerCredentialResponseDto.initialize(this, acquirer, seller, client_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, acquirer, seller, client_id) { 
        obj['acquirer'] = acquirer;
        obj['seller'] = seller;
        obj['client_id'] = client_id;
    }

    /**
     * Constructs a <code>GetSellerCredentialResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSellerCredentialResponseDto} obj Optional instance to populate.
     * @return {module:model/GetSellerCredentialResponseDto} The populated <code>GetSellerCredentialResponseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSellerCredentialResponseDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('acquirer')) {
                obj['acquirer'] = Acquirer.constructFromObject(data['acquirer']);
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = Seller.constructFromObject(data['seller']);
            }
            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
GetSellerCredentialResponseDto.prototype['id'] = undefined;

/**
 * @member {module:model/Acquirer} acquirer
 */
GetSellerCredentialResponseDto.prototype['acquirer'] = undefined;

/**
 * @member {module:model/Seller} seller
 */
GetSellerCredentialResponseDto.prototype['seller'] = undefined;

/**
 * @member {String} api_key
 */
GetSellerCredentialResponseDto.prototype['api_key'] = undefined;

/**
 * @member {String} client_id
 */
GetSellerCredentialResponseDto.prototype['client_id'] = undefined;






export default GetSellerCredentialResponseDto;

