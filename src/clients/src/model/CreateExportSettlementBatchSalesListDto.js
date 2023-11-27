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
 * The CreateExportSettlementBatchSalesListDto model module.
 * @module model/CreateExportSettlementBatchSalesListDto
 * @version 1.0
 */
class CreateExportSettlementBatchSalesListDto {
    /**
     * Constructs a new <code>CreateExportSettlementBatchSalesListDto</code>.
     * @alias module:model/CreateExportSettlementBatchSalesListDto
     */
    constructor() { 
        
        CreateExportSettlementBatchSalesListDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateExportSettlementBatchSalesListDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateExportSettlementBatchSalesListDto} obj Optional instance to populate.
     * @return {module:model/CreateExportSettlementBatchSalesListDto} The populated <code>CreateExportSettlementBatchSalesListDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateExportSettlementBatchSalesListDto();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('original_amount')) {
                obj['original_amount'] = ApiClient.convertToType(data['original_amount'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('form_payment')) {
                obj['form_payment'] = ApiClient.convertToType(data['form_payment'], ['String']);
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
            if (data.hasOwnProperty('seller_id')) {
                obj['seller_id'] = ApiClient.convertToType(data['seller_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CreateExportSettlementBatchSalesListDto.StatusEnum>} status
 */
CreateExportSettlementBatchSalesListDto.prototype['status'] = undefined;

/**
 * @member {String} description
 */
CreateExportSettlementBatchSalesListDto.prototype['description'] = undefined;

/**
 * @member {Number} amount
 */
CreateExportSettlementBatchSalesListDto.prototype['amount'] = undefined;

/**
 * @member {Number} original_amount
 */
CreateExportSettlementBatchSalesListDto.prototype['original_amount'] = undefined;

/**
 * @member {Array.<module:model/CreateExportSettlementBatchSalesListDto.TypeEnum>} type
 */
CreateExportSettlementBatchSalesListDto.prototype['type'] = undefined;

/**
 * @member {String} name
 */
CreateExportSettlementBatchSalesListDto.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/CreateExportSettlementBatchSalesListDto.FormPaymentEnum>} form_payment
 */
CreateExportSettlementBatchSalesListDto.prototype['form_payment'] = undefined;

/**
 * @member {module:model/CreateExportSettlementBatchSalesListDto.ExtensionEnum} extension
 */
CreateExportSettlementBatchSalesListDto.prototype['extension'] = undefined;

/**
 * @member {String} seller_id
 */
CreateExportSettlementBatchSalesListDto.prototype['seller_id'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CreateExportSettlementBatchSalesListDto['StatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "pending_capture"
     * @const
     */
    "pending_capture": "pending_capture",

    /**
     * value: "in_progress_capture"
     * @const
     */
    "in_progress_capture": "in_progress_capture",

    /**
     * value: "succeeded"
     * @const
     */
    "succeeded": "succeeded",

    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",

    /**
     * value: "pending_cancel"
     * @const
     */
    "pending_cancel": "pending_cancel",

    /**
     * value: "abort"
     * @const
     */
    "abort": "abort",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "waiting_confirmation"
     * @const
     */
    "waiting_confirmation": "waiting_confirmation",

    /**
     * value: "expired"
     * @const
     */
    "expired": "expired",

    /**
     * value: "waiting_cashIn"
     * @const
     */
    "waiting_cashIn": "waiting_cashIn"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateExportSettlementBatchSalesListDto['TypeEnum'] = {

    /**
     * value: "boleto"
     * @const
     */
    "boleto": "boleto",

    /**
     * value: "pos"
     * @const
     */
    "pos": "pos",

    /**
     * value: "payment_link"
     * @const
     */
    "payment_link": "payment_link",

    /**
     * value: "protest_link"
     * @const
     */
    "protest_link": "protest_link",

    /**
     * value: "online"
     * @const
     */
    "online": "online",

    /**
     * value: "auto_generate_payment_link"
     * @const
     */
    "auto_generate_payment_link": "auto_generate_payment_link",

    /**
     * value: "auto_generate_protest_link"
     * @const
     */
    "auto_generate_protest_link": "auto_generate_protest_link",

    /**
     * value: "billet_code"
     * @const
     */
    "billet_code": "billet_code",

    /**
     * value: "bill_payment"
     * @const
     */
    "bill_payment": "bill_payment"
};


/**
 * Allowed values for the <code>form_payment</code> property.
 * @enum {String}
 * @readonly
 */
CreateExportSettlementBatchSalesListDto['FormPaymentEnum'] = {

    /**
     * value: "credit"
     * @const
     */
    "credit": "credit",

    /**
     * value: "debit"
     * @const
     */
    "debit": "debit",

    /**
     * value: "pix"
     * @const
     */
    "pix": "pix",

    /**
     * value: "billet"
     * @const
     */
    "billet": "billet",

    /**
     * value: "billet_code"
     * @const
     */
    "billet_code": "billet_code",

    /**
     * value: "pix_pos"
     * @const
     */
    "pix_pos": "pix_pos"
};


/**
 * Allowed values for the <code>extension</code> property.
 * @enum {String}
 * @readonly
 */
CreateExportSettlementBatchSalesListDto['ExtensionEnum'] = {

    /**
     * value: "xls"
     * @const
     */
    "xls": "xls",

    /**
     * value: "csv"
     * @const
     */
    "csv": "csv",

    /**
     * value: "json"
     * @const
     */
    "json": "json",

    /**
     * value: "pdf"
     * @const
     */
    "pdf": "pdf"
};



export default CreateExportSettlementBatchSalesListDto;

