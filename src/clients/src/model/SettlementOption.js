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
 * The SettlementOption model module.
 * @module model/SettlementOption
 * @version 1.0
 */
class SettlementOption {
    /**
     * Constructs a new <code>SettlementOption</code>.
     * @alias module:model/SettlementOption
     * @param description {String} 
     * @param code {module:model/SettlementOption.CodeEnum} 
     * @param type {module:model/SettlementOption.TypeEnum} 
     * @param days {Number} 
     */
    constructor(description, code, type, days) { 
        
        SettlementOption.initialize(this, description, code, type, days);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, code, type, days) { 
        obj['description'] = description;
        obj['code'] = code;
        obj['type'] = type;
        obj['days'] = days;
    }

    /**
     * Constructs a <code>SettlementOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SettlementOption} obj Optional instance to populate.
     * @return {module:model/SettlementOption} The populated <code>SettlementOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SettlementOption();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('days')) {
                obj['days'] = ApiClient.convertToType(data['days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
SettlementOption.prototype['id'] = undefined;

/**
 * @member {String} description
 */
SettlementOption.prototype['description'] = undefined;

/**
 * @member {module:model/SettlementOption.CodeEnum} code
 */
SettlementOption.prototype['code'] = undefined;

/**
 * @member {module:model/SettlementOption.TypeEnum} type
 */
SettlementOption.prototype['type'] = undefined;

/**
 * @member {Number} days
 */
SettlementOption.prototype['days'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
SettlementOption['CodeEnum'] = {

    /**
     * value: "D0"
     * @const
     */
    "D0": "D0",

    /**
     * value: "D1"
     * @const
     */
    "D1": "D1",

    /**
     * value: "D30"
     * @const
     */
    "D30": "D30"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SettlementOption['TypeEnum'] = {

    /**
     * value: "pix"
     * @const
     */
    "pix": "pix",

    /**
     * value: "debit"
     * @const
     */
    "debit": "debit",

    /**
     * value: "credit"
     * @const
     */
    "credit": "credit",

    /**
     * value: "billet"
     * @const
     */
    "billet": "billet"
};



export default SettlementOption;
