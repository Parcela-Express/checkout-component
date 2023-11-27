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
import Permission from './Permission';

/**
 * The Role model module.
 * @module model/Role
 * @version 1.0
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * @alias module:model/Role
     * @param name {String} 
     * @param type {module:model/Role.TypeEnum} 
     * @param permissions {Array.<module:model/Permission>} 
     */
    constructor(name, type, permissions) { 
        
        Role.initialize(this, name, type, permissions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, permissions) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['permissions'] = permissions;
    }

    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [Permission]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Role.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Role.prototype['name'] = undefined;

/**
 * @member {module:model/Role.TypeEnum} type
 */
Role.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/Permission>} permissions
 */
Role.prototype['permissions'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Role['TypeEnum'] = {

    /**
     * value: "merchant"
     * @const
     */
    "merchant": "merchant",

    /**
     * value: "seller"
     * @const
     */
    "seller": "seller",

    /**
     * value: "backoffice"
     * @const
     */
    "backoffice": "backoffice"
};



export default Role;

