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
import FailedTransfersDto from './FailedTransfersDto';
import ShippingReturnDto from './ShippingReturnDto';

/**
 * The UploadReturnFileResponseDto model module.
 * @module model/UploadReturnFileResponseDto
 * @version 1.0
 */
class UploadReturnFileResponseDto {
    /**
     * Constructs a new <code>UploadReturnFileResponseDto</code>.
     * @alias module:model/UploadReturnFileResponseDto
     * @param shipping_return {module:model/ShippingReturnDto} 
     * @param failed_transfers {Array.<module:model/FailedTransfersDto>} 
     */
    constructor(shipping_return, failed_transfers) { 
        
        UploadReturnFileResponseDto.initialize(this, shipping_return, failed_transfers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, shipping_return, failed_transfers) { 
        obj['shipping_return'] = shipping_return;
        obj['failed_transfers'] = failed_transfers;
    }

    /**
     * Constructs a <code>UploadReturnFileResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadReturnFileResponseDto} obj Optional instance to populate.
     * @return {module:model/UploadReturnFileResponseDto} The populated <code>UploadReturnFileResponseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadReturnFileResponseDto();

            if (data.hasOwnProperty('shipping_return')) {
                obj['shipping_return'] = ShippingReturnDto.constructFromObject(data['shipping_return']);
            }
            if (data.hasOwnProperty('failed_transfers')) {
                obj['failed_transfers'] = ApiClient.convertToType(data['failed_transfers'], [FailedTransfersDto]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ShippingReturnDto} shipping_return
 */
UploadReturnFileResponseDto.prototype['shipping_return'] = undefined;

/**
 * @member {Array.<module:model/FailedTransfersDto>} failed_transfers
 */
UploadReturnFileResponseDto.prototype['failed_transfers'] = undefined;






export default UploadReturnFileResponseDto;

