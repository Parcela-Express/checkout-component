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
 * The Attachment model module.
 * @module model/Attachment
 * @version 1.0
 */
class Attachment {
    /**
     * Constructs a new <code>Attachment</code>.
     * @alias module:model/Attachment
     * @param key {String} 
     * @param original_name {String} 
     * @param filename {String} 
     * @param extension {module:model/Attachment.ExtensionEnum} 
     * @param size {Number} 
     * @param created_at {String} 
     */
    constructor(key, original_name, filename, extension, size, created_at) { 
        
        Attachment.initialize(this, key, original_name, filename, extension, size, created_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, original_name, filename, extension, size, created_at) { 
        obj['key'] = key;
        obj['original_name'] = original_name;
        obj['filename'] = filename;
        obj['extension'] = extension;
        obj['size'] = size;
        obj['created_at'] = created_at;
    }

    /**
     * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attachment} obj Optional instance to populate.
     * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Attachment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('original_name')) {
                obj['original_name'] = ApiClient.convertToType(data['original_name'], 'String');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Attachment.prototype['id'] = undefined;

/**
 * @member {String} key
 */
Attachment.prototype['key'] = undefined;

/**
 * @member {String} original_name
 */
Attachment.prototype['original_name'] = undefined;

/**
 * @member {String} filename
 */
Attachment.prototype['filename'] = undefined;

/**
 * @member {module:model/Attachment.ExtensionEnum} extension
 */
Attachment.prototype['extension'] = undefined;

/**
 * @member {Number} size
 */
Attachment.prototype['size'] = undefined;

/**
 * @member {String} url
 */
Attachment.prototype['url'] = undefined;

/**
 * @member {String} created_at
 */
Attachment.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Attachment.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>extension</code> property.
 * @enum {String}
 * @readonly
 */
Attachment['ExtensionEnum'] = {

    /**
     * value: "png"
     * @const
     */
    "png": "png",

    /**
     * value: "jpeg"
     * @const
     */
    "jpeg": "jpeg",

    /**
     * value: "jpg"
     * @const
     */
    "jpg": "jpg",

    /**
     * value: "pdf"
     * @const
     */
    "pdf": "pdf",

    /**
     * value: "doc"
     * @const
     */
    "doc": "doc",

    /**
     * value: "docx"
     * @const
     */
    "docx": "docx",

    /**
     * value: "xls"
     * @const
     */
    "xls": "xls",

    /**
     * value: "xlsx"
     * @const
     */
    "xlsx": "xlsx",

    /**
     * value: "rar"
     * @const
     */
    "rar": "rar",

    /**
     * value: "zip"
     * @const
     */
    "zip": "zip",

    /**
     * value: "csv"
     * @const
     */
    "csv": "csv"
};



export default Attachment;
