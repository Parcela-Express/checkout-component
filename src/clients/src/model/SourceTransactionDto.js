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
import SourceTransactionTypeEnum from './SourceTransactionTypeEnum';

/**
 * The SourceTransactionDto model module.
 * @module model/SourceTransactionDto
 * @version 1.0
 */
class SourceTransactionDto {
    /**
     * Constructs a new <code>SourceTransactionDto</code>.
     * @alias module:model/SourceTransactionDto
     * @param type {module:model/SourceTransactionTypeEnum} 
     * @param description {String} 
     */
    constructor(type, description) { 
        
        SourceTransactionDto.initialize(this, type, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, description) { 
        obj['type'] = type;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>SourceTransactionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceTransactionDto} obj Optional instance to populate.
     * @return {module:model/SourceTransactionDto} The populated <code>SourceTransactionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceTransactionDto();

            if (data.hasOwnProperty('type')) {
                obj['type'] = SourceTransactionTypeEnum.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SourceTransactionTypeEnum} type
 */
SourceTransactionDto.prototype['type'] = undefined;

/**
 * @member {String} description
 */
SourceTransactionDto.prototype['description'] = undefined;






export default SourceTransactionDto;

