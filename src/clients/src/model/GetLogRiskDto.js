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
 * The GetLogRiskDto model module.
 * @module model/GetLogRiskDto
 * @version 1.0
 */
class GetLogRiskDto {
    /**
     * Constructs a new <code>GetLogRiskDto</code>.
     * @alias module:model/GetLogRiskDto
     * @param id {String} 
     * @param sale {String} 
     * @param logs {Array.<Object>} 
     * @param account_score {Number} 
     */
    constructor(id, sale, logs, account_score) { 
        
        GetLogRiskDto.initialize(this, id, sale, logs, account_score);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, sale, logs, account_score) { 
        obj['id'] = id;
        obj['sale'] = sale;
        obj['logs'] = logs;
        obj['account_score'] = account_score;
    }

    /**
     * Constructs a <code>GetLogRiskDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLogRiskDto} obj Optional instance to populate.
     * @return {module:model/GetLogRiskDto} The populated <code>GetLogRiskDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLogRiskDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('sale')) {
                obj['sale'] = ApiClient.convertToType(data['sale'], 'String');
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [Object]);
            }
            if (data.hasOwnProperty('account_score')) {
                obj['account_score'] = ApiClient.convertToType(data['account_score'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
GetLogRiskDto.prototype['id'] = undefined;

/**
 * @member {String} sale
 */
GetLogRiskDto.prototype['sale'] = undefined;

/**
 * @member {Array.<Object>} logs
 */
GetLogRiskDto.prototype['logs'] = undefined;

/**
 * @member {Number} account_score
 */
GetLogRiskDto.prototype['account_score'] = undefined;






export default GetLogRiskDto;

