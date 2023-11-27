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
import CreateMerchantReportsPermissionsDto from './CreateMerchantReportsPermissionsDto';
import CreateMerchantTablesPermissionsDto from './CreateMerchantTablesPermissionsDto';
import Logo from './Logo';
import Theme from './Theme';

/**
 * The CreateMerchantDto model module.
 * @module model/CreateMerchantDto
 * @version 1.0
 */
class CreateMerchantDto {
    /**
     * Constructs a new <code>CreateMerchantDto</code>.
     * @alias module:model/CreateMerchantDto
     * @param document {String} 
     * @param name {String} 
     * @param code {String} 
     * @param description {String} 
     * @param is_active {Boolean} 
     */
    constructor(document, name, code, description, is_active) { 
        
        CreateMerchantDto.initialize(this, document, name, code, description, is_active);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, document, name, code, description, is_active) { 
        obj['document'] = document;
        obj['name'] = name;
        obj['code'] = code;
        obj['description'] = description;
        obj['is_active'] = is_active;
    }

    /**
     * Constructs a <code>CreateMerchantDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMerchantDto} obj Optional instance to populate.
     * @return {module:model/CreateMerchantDto} The populated <code>CreateMerchantDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMerchantDto();

            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('risk_active')) {
                obj['risk_active'] = ApiClient.convertToType(data['risk_active'], 'Boolean');
            }
            if (data.hasOwnProperty('min_risk')) {
                obj['min_risk'] = ApiClient.convertToType(data['min_risk'], 'Number');
            }
            if (data.hasOwnProperty('merchant_api_key')) {
                obj['merchant_api_key'] = ApiClient.convertToType(data['merchant_api_key'], 'String');
            }
            if (data.hasOwnProperty('merchant_account')) {
                obj['merchant_account'] = ApiClient.convertToType(data['merchant_account'], 'String');
            }
            if (data.hasOwnProperty('merchant_subjects')) {
                obj['merchant_subjects'] = ApiClient.convertToType(data['merchant_subjects'], ['String']);
            }
            if (data.hasOwnProperty('seller_subjects')) {
                obj['seller_subjects'] = ApiClient.convertToType(data['seller_subjects'], ['String']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = Logo.constructFromObject(data['logo']);
            }
            if (data.hasOwnProperty('theme')) {
                obj['theme'] = Theme.constructFromObject(data['theme']);
            }
            if (data.hasOwnProperty('accounting_account_spread_id')) {
                obj['accounting_account_spread_id'] = ApiClient.convertToType(data['accounting_account_spread_id'], 'String');
            }
            if (data.hasOwnProperty('payment_by_link_url')) {
                obj['payment_by_link_url'] = ApiClient.convertToType(data['payment_by_link_url'], 'String');
            }
            if (data.hasOwnProperty('payment_url')) {
                obj['payment_url'] = ApiClient.convertToType(data['payment_url'], 'String');
            }
            if (data.hasOwnProperty('financial_emails')) {
                obj['financial_emails'] = ApiClient.convertToType(data['financial_emails'], ['String']);
            }
            if (data.hasOwnProperty('pre_capture')) {
                obj['pre_capture'] = ApiClient.convertToType(data['pre_capture'], 'Boolean');
            }
            if (data.hasOwnProperty('reports_permissions')) {
                obj['reports_permissions'] = CreateMerchantReportsPermissionsDto.constructFromObject(data['reports_permissions']);
            }
            if (data.hasOwnProperty('tables_permissions')) {
                obj['tables_permissions'] = CreateMerchantTablesPermissionsDto.constructFromObject(data['tables_permissions']);
            }
            if (data.hasOwnProperty('three_ds_active')) {
                obj['three_ds_active'] = ApiClient.convertToType(data['three_ds_active'], 'Boolean');
            }
            if (data.hasOwnProperty('min_three_ds')) {
                obj['min_three_ds'] = ApiClient.convertToType(data['min_three_ds'], 'Number');
            }
            if (data.hasOwnProperty('three_ds_value')) {
                obj['three_ds_value'] = ApiClient.convertToType(data['three_ds_value'], 'Number');
            }
            if (data.hasOwnProperty('risk_value')) {
                obj['risk_value'] = ApiClient.convertToType(data['risk_value'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} document
 */
CreateMerchantDto.prototype['document'] = undefined;

/**
 * @member {String} name
 */
CreateMerchantDto.prototype['name'] = undefined;

/**
 * @member {String} code
 */
CreateMerchantDto.prototype['code'] = undefined;

/**
 * @member {String} description
 */
CreateMerchantDto.prototype['description'] = undefined;

/**
 * @member {Boolean} is_active
 */
CreateMerchantDto.prototype['is_active'] = undefined;

/**
 * @member {Boolean} risk_active
 */
CreateMerchantDto.prototype['risk_active'] = undefined;

/**
 * @member {Number} min_risk
 */
CreateMerchantDto.prototype['min_risk'] = undefined;

/**
 * @member {String} merchant_api_key
 */
CreateMerchantDto.prototype['merchant_api_key'] = undefined;

/**
 * @member {String} merchant_account
 */
CreateMerchantDto.prototype['merchant_account'] = undefined;

/**
 * @member {Array.<String>} merchant_subjects
 */
CreateMerchantDto.prototype['merchant_subjects'] = undefined;

/**
 * @member {Array.<String>} seller_subjects
 */
CreateMerchantDto.prototype['seller_subjects'] = undefined;

/**
 * @member {module:model/Logo} logo
 */
CreateMerchantDto.prototype['logo'] = undefined;

/**
 * @member {module:model/Theme} theme
 */
CreateMerchantDto.prototype['theme'] = undefined;

/**
 * @member {String} accounting_account_spread_id
 */
CreateMerchantDto.prototype['accounting_account_spread_id'] = undefined;

/**
 * @member {String} payment_by_link_url
 */
CreateMerchantDto.prototype['payment_by_link_url'] = undefined;

/**
 * @member {String} payment_url
 */
CreateMerchantDto.prototype['payment_url'] = undefined;

/**
 * @member {Array.<String>} financial_emails
 */
CreateMerchantDto.prototype['financial_emails'] = undefined;

/**
 * @member {Boolean} pre_capture
 */
CreateMerchantDto.prototype['pre_capture'] = undefined;

/**
 * @member {module:model/CreateMerchantReportsPermissionsDto} reports_permissions
 */
CreateMerchantDto.prototype['reports_permissions'] = undefined;

/**
 * @member {module:model/CreateMerchantTablesPermissionsDto} tables_permissions
 */
CreateMerchantDto.prototype['tables_permissions'] = undefined;

/**
 * @member {Boolean} three_ds_active
 */
CreateMerchantDto.prototype['three_ds_active'] = undefined;

/**
 * @member {Number} min_three_ds
 */
CreateMerchantDto.prototype['min_three_ds'] = undefined;

/**
 * @member {Number} three_ds_value
 */
CreateMerchantDto.prototype['three_ds_value'] = undefined;

/**
 * @member {Number} risk_value
 */
CreateMerchantDto.prototype['risk_value'] = undefined;

/**
 * @member {module:model/CreateMerchantDto.TypeEnum} type
 */
CreateMerchantDto.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateMerchantDto['TypeEnum'] = {

    /**
     * value: "base"
     * @const
     */
    "base": "base",

    /**
     * value: "central"
     * @const
     */
    "central": "central",

    /**
     * value: "others"
     * @const
     */
    "others": "others"
};



export default CreateMerchantDto;
