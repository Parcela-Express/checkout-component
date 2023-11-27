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
 * The BillPaymentSalesPermissions model module.
 * @module model/BillPaymentSalesPermissions
 * @version 1.0
 */
class BillPaymentSalesPermissions {
    /**
     * Constructs a new <code>BillPaymentSalesPermissions</code>.
     * @alias module:model/BillPaymentSalesPermissions
     * @param report {module:model/BillPaymentSalesPermissions.ReportEnum} 
     * @param fields {Array.<module:model/BillPaymentSalesPermissions.FieldsEnum>} 
     * @param denied_fields {Array.<module:model/BillPaymentSalesPermissions.DeniedFieldsEnum>} 
     * @param allowed_fields {Array.<module:model/BillPaymentSalesPermissions.AllowedFieldsEnum>} 
     */
    constructor(report, fields, denied_fields, allowed_fields) { 
        
        BillPaymentSalesPermissions.initialize(this, report, fields, denied_fields, allowed_fields);
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
     * Constructs a <code>BillPaymentSalesPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillPaymentSalesPermissions} obj Optional instance to populate.
     * @return {module:model/BillPaymentSalesPermissions} The populated <code>BillPaymentSalesPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillPaymentSalesPermissions();

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
 * @member {module:model/BillPaymentSalesPermissions.ReportEnum} report
 */
BillPaymentSalesPermissions.prototype['report'] = undefined;

/**
 * @member {Array.<module:model/BillPaymentSalesPermissions.FieldsEnum>} fields
 */
BillPaymentSalesPermissions.prototype['fields'] = undefined;

/**
 * @member {Array.<module:model/BillPaymentSalesPermissions.DeniedFieldsEnum>} denied_fields
 */
BillPaymentSalesPermissions.prototype['denied_fields'] = undefined;

/**
 * @member {Array.<module:model/BillPaymentSalesPermissions.AllowedFieldsEnum>} allowed_fields
 */
BillPaymentSalesPermissions.prototype['allowed_fields'] = undefined;





/**
 * Allowed values for the <code>report</code> property.
 * @enum {String}
 * @readonly
 */
BillPaymentSalesPermissions['ReportEnum'] = {

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
BillPaymentSalesPermissions['FieldsEnum'] = {

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
     * value: "updated_at"
     * @const
     */
    "updated_at": "updated_at",

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
     * value: "payer_document"
     * @const
     */
    "payer_document": "payer_document",

    /**
     * value: "payer_email"
     * @const
     */
    "payer_email": "payer_email",

    /**
     * value: "payer_phone"
     * @const
     */
    "payer_phone": "payer_phone",

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
     * value: "digitable"
     * @const
     */
    "digitable": "digitable",

    /**
     * value: "due_date"
     * @const
     */
    "due_date": "due_date",

    /**
     * value: "assignor"
     * @const
     */
    "assignor": "assignor",

    /**
     * value: "recipient_name"
     * @const
     */
    "recipient_name": "recipient_name",

    /**
     * value: "recipient_document"
     * @const
     */
    "recipient_document": "recipient_document"
};


/**
 * Allowed values for the <code>denied_fields</code> property.
 * @enum {String}
 * @readonly
 */
BillPaymentSalesPermissions['DeniedFieldsEnum'] = {

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
     * value: "updated_at"
     * @const
     */
    "updated_at": "updated_at",

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
     * value: "payer_document"
     * @const
     */
    "payer_document": "payer_document",

    /**
     * value: "payer_email"
     * @const
     */
    "payer_email": "payer_email",

    /**
     * value: "payer_phone"
     * @const
     */
    "payer_phone": "payer_phone",

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
     * value: "digitable"
     * @const
     */
    "digitable": "digitable",

    /**
     * value: "due_date"
     * @const
     */
    "due_date": "due_date",

    /**
     * value: "assignor"
     * @const
     */
    "assignor": "assignor",

    /**
     * value: "recipient_name"
     * @const
     */
    "recipient_name": "recipient_name",

    /**
     * value: "recipient_document"
     * @const
     */
    "recipient_document": "recipient_document"
};


/**
 * Allowed values for the <code>allowed_fields</code> property.
 * @enum {String}
 * @readonly
 */
BillPaymentSalesPermissions['AllowedFieldsEnum'] = {

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
     * value: "updated_at"
     * @const
     */
    "updated_at": "updated_at",

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
     * value: "payer_document"
     * @const
     */
    "payer_document": "payer_document",

    /**
     * value: "payer_email"
     * @const
     */
    "payer_email": "payer_email",

    /**
     * value: "payer_phone"
     * @const
     */
    "payer_phone": "payer_phone",

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
     * value: "digitable"
     * @const
     */
    "digitable": "digitable",

    /**
     * value: "due_date"
     * @const
     */
    "due_date": "due_date",

    /**
     * value: "assignor"
     * @const
     */
    "assignor": "assignor",

    /**
     * value: "recipient_name"
     * @const
     */
    "recipient_name": "recipient_name",

    /**
     * value: "recipient_document"
     * @const
     */
    "recipient_document": "recipient_document"
};



export default BillPaymentSalesPermissions;

