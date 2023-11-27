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
 * The DiscountBankAccount model module.
 * @module model/DiscountBankAccount
 * @version 1.0
 */
class DiscountBankAccount {
    /**
     * Constructs a new <code>DiscountBankAccount</code>.
     * @alias module:model/DiscountBankAccount
     * @param id {String} 
     * @param owner_document {String} 
     * @param bank_code {String} 
     * @param agreement_code {String} 
     * @param agency_number {String} 
     * @param account_number {String} 
     * @param account_digit {String} 
     * @param type_account {String} 
     * @param wallet_number {String} 
     * @param layout_number {String} 
     * @param movement_code {String} 
     * @param created_at {Date} 
     * @param created_at_time {Number} 
     */
    constructor(id, owner_document, bank_code, agreement_code, agency_number, account_number, account_digit, type_account, wallet_number, layout_number, movement_code, created_at, created_at_time) { 
        
        DiscountBankAccount.initialize(this, id, owner_document, bank_code, agreement_code, agency_number, account_number, account_digit, type_account, wallet_number, layout_number, movement_code, created_at, created_at_time);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, owner_document, bank_code, agreement_code, agency_number, account_number, account_digit, type_account, wallet_number, layout_number, movement_code, created_at, created_at_time) { 
        obj['id'] = id;
        obj['owner_document'] = owner_document;
        obj['bank_code'] = bank_code;
        obj['agreement_code'] = agreement_code;
        obj['agency_number'] = agency_number;
        obj['account_number'] = account_number;
        obj['account_digit'] = account_digit;
        obj['type_account'] = type_account;
        obj['wallet_number'] = wallet_number;
        obj['layout_number'] = layout_number;
        obj['movement_code'] = movement_code;
        obj['created_at'] = created_at;
        obj['created_at_time'] = created_at_time;
    }

    /**
     * Constructs a <code>DiscountBankAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscountBankAccount} obj Optional instance to populate.
     * @return {module:model/DiscountBankAccount} The populated <code>DiscountBankAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscountBankAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('owner_document')) {
                obj['owner_document'] = ApiClient.convertToType(data['owner_document'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('agreement_code')) {
                obj['agreement_code'] = ApiClient.convertToType(data['agreement_code'], 'String');
            }
            if (data.hasOwnProperty('agency_number')) {
                obj['agency_number'] = ApiClient.convertToType(data['agency_number'], 'String');
            }
            if (data.hasOwnProperty('agency_digit')) {
                obj['agency_digit'] = ApiClient.convertToType(data['agency_digit'], 'String');
            }
            if (data.hasOwnProperty('account_number')) {
                obj['account_number'] = ApiClient.convertToType(data['account_number'], 'String');
            }
            if (data.hasOwnProperty('account_digit')) {
                obj['account_digit'] = ApiClient.convertToType(data['account_digit'], 'String');
            }
            if (data.hasOwnProperty('type_account')) {
                obj['type_account'] = ApiClient.convertToType(data['type_account'], 'String');
            }
            if (data.hasOwnProperty('pix_key')) {
                obj['pix_key'] = ApiClient.convertToType(data['pix_key'], 'String');
            }
            if (data.hasOwnProperty('wallet_number')) {
                obj['wallet_number'] = ApiClient.convertToType(data['wallet_number'], 'String');
            }
            if (data.hasOwnProperty('layout_number')) {
                obj['layout_number'] = ApiClient.convertToType(data['layout_number'], 'String');
            }
            if (data.hasOwnProperty('movement_code')) {
                obj['movement_code'] = ApiClient.convertToType(data['movement_code'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at_time')) {
                obj['created_at_time'] = ApiClient.convertToType(data['created_at_time'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('omie_id')) {
                obj['omie_id'] = ApiClient.convertToType(data['omie_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
DiscountBankAccount.prototype['id'] = undefined;

/**
 * @member {String} owner_document
 */
DiscountBankAccount.prototype['owner_document'] = undefined;

/**
 * @member {String} bank_code
 */
DiscountBankAccount.prototype['bank_code'] = undefined;

/**
 * @member {String} agreement_code
 */
DiscountBankAccount.prototype['agreement_code'] = undefined;

/**
 * @member {String} agency_number
 */
DiscountBankAccount.prototype['agency_number'] = undefined;

/**
 * @member {String} agency_digit
 */
DiscountBankAccount.prototype['agency_digit'] = undefined;

/**
 * @member {String} account_number
 */
DiscountBankAccount.prototype['account_number'] = undefined;

/**
 * @member {String} account_digit
 */
DiscountBankAccount.prototype['account_digit'] = undefined;

/**
 * @member {String} type_account
 */
DiscountBankAccount.prototype['type_account'] = undefined;

/**
 * @member {String} pix_key
 */
DiscountBankAccount.prototype['pix_key'] = undefined;

/**
 * @member {String} wallet_number
 */
DiscountBankAccount.prototype['wallet_number'] = undefined;

/**
 * @member {String} layout_number
 */
DiscountBankAccount.prototype['layout_number'] = undefined;

/**
 * @member {String} movement_code
 */
DiscountBankAccount.prototype['movement_code'] = undefined;

/**
 * @member {Date} created_at
 */
DiscountBankAccount.prototype['created_at'] = undefined;

/**
 * @member {Number} created_at_time
 */
DiscountBankAccount.prototype['created_at_time'] = undefined;

/**
 * @member {Date} updated_at
 */
DiscountBankAccount.prototype['updated_at'] = undefined;

/**
 * @member {Number} omie_id
 */
DiscountBankAccount.prototype['omie_id'] = undefined;






export default DiscountBankAccount;
