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
 * The Acquirer model module.
 * @module model/Acquirer
 * @version 1.0
 */
class Acquirer {
    /**
     * Constructs a new <code>Acquirer</code>.
     * @alias module:model/Acquirer
     * @param name {String} 
     * @param document {String} 
     * @param code {module:model/Acquirer.CodeEnum} 
     */
    constructor(name, document, code) { 
        
        Acquirer.initialize(this, name, document, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, document, code) { 
        obj['name'] = name;
        obj['document'] = document;
        obj['code'] = code;
    }

    /**
     * Constructs a <code>Acquirer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Acquirer} obj Optional instance to populate.
     * @return {module:model/Acquirer} The populated <code>Acquirer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Acquirer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Acquirer.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Acquirer.prototype['name'] = undefined;

/**
 * @member {String} document
 */
Acquirer.prototype['document'] = undefined;

/**
 * @member {module:model/Acquirer.CodeEnum} code
 */
Acquirer.prototype['code'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
Acquirer['CodeEnum'] = {

    /**
     * value: "zoop"
     * @const
     */
    "zoop": "zoop",

    /**
     * value: "adyen"
     * @const
     */
    "adyen": "adyen",

    /**
     * value: "bradesco"
     * @const
     */
    "bradesco": "bradesco",

    /**
     * value: "itau"
     * @const
     */
    "itau": "itau"
};



export default Acquirer;
