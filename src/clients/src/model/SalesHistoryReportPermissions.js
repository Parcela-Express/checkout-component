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
 * The SalesHistoryReportPermissions model module.
 * @module model/SalesHistoryReportPermissions
 * @version 1.0
 */
class SalesHistoryReportPermissions {
    /**
     * Constructs a new <code>SalesHistoryReportPermissions</code>.
     * @alias module:model/SalesHistoryReportPermissions
     * @param report {module:model/SalesHistoryReportPermissions.ReportEnum} 
     * @param fields {Array.<module:model/SalesHistoryReportPermissions.FieldsEnum>} 
     * @param denied_fields {Array.<module:model/SalesHistoryReportPermissions.DeniedFieldsEnum>} 
     * @param allowed_fields {Array.<module:model/SalesHistoryReportPermissions.AllowedFieldsEnum>} 
     */
    constructor(report, fields, denied_fields, allowed_fields) { 
        
        SalesHistoryReportPermissions.initialize(this, report, fields, denied_fields, allowed_fields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, report, fields, denied_fields, allowed_fields) { 
        obj['report'] = report;
        obj['fields'] = fields;
        obj['denied_fields'] = denied_fields;
        obj['allowed_fields'] = allowed_fields;
    }

    /**
     * Constructs a <code>SalesHistoryReportPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SalesHistoryReportPermissions} obj Optional instance to populate.
     * @return {module:model/SalesHistoryReportPermissions} The populated <code>SalesHistoryReportPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SalesHistoryReportPermissions();

            if (data.hasOwnProperty('report')) {
                obj['report'] = ApiClient.convertToType(data['report'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
            if (data.hasOwnProperty('denied_fields')) {
                obj['denied_fields'] = ApiClient.convertToType(data['denied_fields'], ['String']);
            }
            if (data.hasOwnProperty('allowed_fields')) {
                obj['allowed_fields'] = ApiClient.convertToType(data['allowed_fields'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SalesHistoryReportPermissions.ReportEnum} report
 */
SalesHistoryReportPermissions.prototype['report'] = undefined;

/**
 * @member {Array.<module:model/SalesHistoryReportPermissions.FieldsEnum>} fields
 */
SalesHistoryReportPermissions.prototype['fields'] = undefined;

/**
 * @member {Array.<module:model/SalesHistoryReportPermissions.DeniedFieldsEnum>} denied_fields
 */
SalesHistoryReportPermissions.prototype['denied_fields'] = undefined;

/**
 * @member {Array.<module:model/SalesHistoryReportPermissions.AllowedFieldsEnum>} allowed_fields
 */
SalesHistoryReportPermissions.prototype['allowed_fields'] = undefined;





/**
 * Allowed values for the <code>report</code> property.
 * @enum {String}
 * @readonly
 */
SalesHistoryReportPermissions['ReportEnum'] = {

    /**
     * value: "sales_history"
     * @const
     */
    "sales_history": "sales_history",

    /**
     * value: "settlement_batch_transaction"
     * @const
     */
    "settlement_batch_transaction": "settlement_batch_transaction",

    /**
     * value: "settlement_batch_sale"
     * @const
     */
    "settlement_batch_sale": "settlement_batch_sale",

    /**
     * value: "bill_payment_sales"
     * @const
     */
    "bill_payment_sales": "bill_payment_sales"
};


/**
 * Allowed values for the <code>fields</code> property.
 * @enum {String}
 * @readonly
 */
SalesHistoryReportPermissions['FieldsEnum'] = {

    /**
     * value: "order_number"
     * @const
     */
    "order_number": "order_number",

    /**
     * value: "created_at"
     * @const
     */
    "created_at": "created_at",

    /**
     * value: "created_at_date"
     * @const
     */
    "created_at_date": "created_at_date",

    /**
     * value: "status_description"
     * @const
     */
    "status_description": "status_description",

    /**
     * value: "description"
     * @const
     */
    "description": "description",

    /**
     * value: "form_payment_description"
     * @const
     */
    "form_payment_description": "form_payment_description",

    /**
     * value: "type_description"
     * @const
     */
    "type_description": "type_description",

    /**
     * value: "original_amount"
     * @const
     */
    "original_amount": "original_amount",

    /**
     * value: "fee_amount"
     * @const
     */
    "fee_amount": "fee_amount",

    /**
     * value: "amount"
     * @const
     */
    "amount": "amount",

    /**
     * value: "payer_name"
     * @const
     */
    "payer_name": "payer_name",

    /**
     * value: "payment_day"
     * @const
     */
    "payment_day": "payment_day",

    /**
     * value: "payment_day_date"
     * @const
     */
    "payment_day_date": "payment_day_date",

    /**
     * value: "confirmation_day"
     * @const
     */
    "confirmation_day": "confirmation_day",

    /**
     * value: "settlement_day"
     * @const
     */
    "settlement_day": "settlement_day",

    /**
     * value: "generate_payer"
     * @const
     */
    "generate_payer": "generate_payer",

    /**
     * value: "acquirer_reference"
     * @const
     */
    "acquirer_reference": "acquirer_reference",

    /**
     * value: "id"
     * @const
     */
    "id": "id",

    /**
     * value: "card_brand"
     * @const
     */
    "card_brand": "card_brand",

    /**
     * value: "card_number"
     * @const
     */
    "card_number": "card_number",

    /**
     * value: "created_by_user_name"
     * @const
     */
    "created_by_user_name": "created_by_user_name",

    /**
     * value: "terminal_id"
     * @const
     */
    "terminal_id": "terminal_id",

    /**
     * value: "seller_name"
     * @const
     */
    "seller_name": "seller_name",

    /**
     * value: "seller_description"
     * @const
     */
    "seller_description": "seller_description",

    /**
     * value: "split_description"
     * @const
     */
    "split_description": "split_description"
};


/**
 * Allowed values for the <code>denied_fields</code> property.
 * @enum {String}
 * @readonly
 */
SalesHistoryReportPermissions['DeniedFieldsEnum'] = {

    /**
     * value: "order_number"
     * @const
     */
    "order_number": "order_number",

    /**
     * value: "created_at"
     * @const
     */
    "created_at": "created_at",

    /**
     * value: "created_at_date"
     * @const
     */
    "created_at_date": "created_at_date",

    /**
     * value: "status_description"
     * @const
     */
    "status_description": "status_description",

    /**
     * value: "description"
     * @const
     */
    "description": "description",

    /**
     * value: "form_payment_description"
     * @const
     */
    "form_payment_description": "form_payment_description",

    /**
     * value: "type_description"
     * @const
     */
    "type_description": "type_description",

    /**
     * value: "original_amount"
     * @const
     */
    "original_amount": "original_amount",

    /**
     * value: "fee_amount"
     * @const
     */
    "fee_amount": "fee_amount",

    /**
     * value: "amount"
     * @const
     */
    "amount": "amount",

    /**
     * value: "payer_name"
     * @const
     */
    "payer_name": "payer_name",

    /**
     * value: "payment_day"
     * @const
     */
    "payment_day": "payment_day",

    /**
     * value: "payment_day_date"
     * @const
     */
    "payment_day_date": "payment_day_date",

    /**
     * value: "confirmation_day"
     * @const
     */
    "confirmation_day": "confirmation_day",

    /**
     * value: "settlement_day"
     * @const
     */
    "settlement_day": "settlement_day",

    /**
     * value: "generate_payer"
     * @const
     */
    "generate_payer": "generate_payer",

    /**
     * value: "acquirer_reference"
     * @const
     */
    "acquirer_reference": "acquirer_reference",

    /**
     * value: "id"
     * @const
     */
    "id": "id",

    /**
     * value: "card_brand"
     * @const
     */
    "card_brand": "card_brand",

    /**
     * value: "card_number"
     * @const
     */
    "card_number": "card_number",

    /**
     * value: "created_by_user_name"
     * @const
     */
    "created_by_user_name": "created_by_user_name",

    /**
     * value: "terminal_id"
     * @const
     */
    "terminal_id": "terminal_id",

    /**
     * value: "seller_name"
     * @const
     */
    "seller_name": "seller_name",

    /**
     * value: "seller_description"
     * @const
     */
    "seller_description": "seller_description",

    /**
     * value: "split_description"
     * @const
     */
    "split_description": "split_description"
};


/**
 * Allowed values for the <code>allowed_fields</code> property.
 * @enum {String}
 * @readonly
 */
SalesHistoryReportPermissions['AllowedFieldsEnum'] = {

    /**
     * value: "order_number"
     * @const
     */
    "order_number": "order_number",

    /**
     * value: "created_at"
     * @const
     */
    "created_at": "created_at",

    /**
     * value: "created_at_date"
     * @const
     */
    "created_at_date": "created_at_date",

    /**
     * value: "status_description"
     * @const
     */
    "status_description": "status_description",

    /**
     * value: "description"
     * @const
     */
    "description": "description",

    /**
     * value: "form_payment_description"
     * @const
     */
    "form_payment_description": "form_payment_description",

    /**
     * value: "type_description"
     * @const
     */
    "type_description": "type_description",

    /**
     * value: "original_amount"
     * @const
     */
    "original_amount": "original_amount",

    /**
     * value: "fee_amount"
     * @const
     */
    "fee_amount": "fee_amount",

    /**
     * value: "amount"
     * @const
     */
    "amount": "amount",

    /**
     * value: "payer_name"
     * @const
     */
    "payer_name": "payer_name",

    /**
     * value: "payment_day"
     * @const
     */
    "payment_day": "payment_day",

    /**
     * value: "payment_day_date"
     * @const
     */
    "payment_day_date": "payment_day_date",

    /**
     * value: "confirmation_day"
     * @const
     */
    "confirmation_day": "confirmation_day",

    /**
     * value: "settlement_day"
     * @const
     */
    "settlement_day": "settlement_day",

    /**
     * value: "generate_payer"
     * @const
     */
    "generate_payer": "generate_payer",

    /**
     * value: "acquirer_reference"
     * @const
     */
    "acquirer_reference": "acquirer_reference",

    /**
     * value: "id"
     * @const
     */
    "id": "id",

    /**
     * value: "card_brand"
     * @const
     */
    "card_brand": "card_brand",

    /**
     * value: "card_number"
     * @const
     */
    "card_number": "card_number",

    /**
     * value: "created_by_user_name"
     * @const
     */
    "created_by_user_name": "created_by_user_name",

    /**
     * value: "terminal_id"
     * @const
     */
    "terminal_id": "terminal_id",

    /**
     * value: "seller_name"
     * @const
     */
    "seller_name": "seller_name",

    /**
     * value: "seller_description"
     * @const
     */
    "seller_description": "seller_description",

    /**
     * value: "split_description"
     * @const
     */
    "split_description": "split_description"
};



export default SalesHistoryReportPermissions;

