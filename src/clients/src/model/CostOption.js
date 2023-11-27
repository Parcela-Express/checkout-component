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
 * The CostOption model module.
 * @module model/CostOption
 * @version 1.0
 */
class CostOption {
    /**
     * Constructs a new <code>CostOption</code>.
     * @alias module:model/CostOption
     * @param fixed_amount {Number} 
     * @param bank_fixed_amount {Number} 
     * @param description {String} 
     * @param type {module:model/CostOption.TypeEnum} 
     * @param exchange_fee_type {module:model/CostOption.ExchangeFeeTypeEnum} 
     * @param exchange_fee {Number} 
     */
    constructor(fixed_amount, bank_fixed_amount, description, type, exchange_fee_type, exchange_fee) { 
        
        CostOption.initialize(this, fixed_amount, bank_fixed_amount, description, type, exchange_fee_type, exchange_fee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fixed_amount, bank_fixed_amount, description, type, exchange_fee_type, exchange_fee) { 
        obj['fixed_amount'] = fixed_amount;
        obj['bank_fixed_amount'] = bank_fixed_amount;
        obj['description'] = description;
        obj['type'] = type;
        obj['exchange_fee_type'] = exchange_fee_type;
        obj['exchange_fee'] = exchange_fee;
    }

    /**
     * Constructs a <code>CostOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CostOption} obj Optional instance to populate.
     * @return {module:model/CostOption} The populated <code>CostOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CostOption();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('fixed_amount')) {
                obj['fixed_amount'] = ApiClient.convertToType(data['fixed_amount'], 'Number');
            }
            if (data.hasOwnProperty('bank_fixed_amount')) {
                obj['bank_fixed_amount'] = ApiClient.convertToType(data['bank_fixed_amount'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('type_status')) {
                obj['type_status'] = ApiClient.convertToType(data['type_status'], 'String');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('brand_fee_type')) {
                obj['brand_fee_type'] = ApiClient.convertToType(data['brand_fee_type'], 'String');
            }
            if (data.hasOwnProperty('brand_fee')) {
                obj['brand_fee'] = ApiClient.convertToType(data['brand_fee'], 'Number');
            }
            if (data.hasOwnProperty('installments')) {
                obj['installments'] = ApiClient.convertToType(data['installments'], 'Number');
            }
            if (data.hasOwnProperty('exchange_fee_type')) {
                obj['exchange_fee_type'] = ApiClient.convertToType(data['exchange_fee_type'], 'String');
            }
            if (data.hasOwnProperty('exchange_fee')) {
                obj['exchange_fee'] = ApiClient.convertToType(data['exchange_fee'], 'Number');
            }
            if (data.hasOwnProperty('anticipation_fee_type')) {
                obj['anticipation_fee_type'] = ApiClient.convertToType(data['anticipation_fee_type'], 'String');
            }
            if (data.hasOwnProperty('anticipation_fee')) {
                obj['anticipation_fee'] = ApiClient.convertToType(data['anticipation_fee'], 'Number');
            }
            if (data.hasOwnProperty('markup_fee_type')) {
                obj['markup_fee_type'] = ApiClient.convertToType(data['markup_fee_type'], 'String');
            }
            if (data.hasOwnProperty('markup_fee')) {
                obj['markup_fee'] = ApiClient.convertToType(data['markup_fee'], 'Number');
            }
            if (data.hasOwnProperty('is_cap')) {
                obj['is_cap'] = ApiClient.convertToType(data['is_cap'], 'Boolean');
            }
            if (data.hasOwnProperty('exchange_cap')) {
                obj['exchange_cap'] = ApiClient.convertToType(data['exchange_cap'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CostOption.prototype['id'] = undefined;

/**
 * @member {Number} fixed_amount
 */
CostOption.prototype['fixed_amount'] = undefined;

/**
 * @member {Number} bank_fixed_amount
 */
CostOption.prototype['bank_fixed_amount'] = undefined;

/**
 * @member {String} description
 */
CostOption.prototype['description'] = undefined;

/**
 * @member {module:model/CostOption.TypeEnum} type
 */
CostOption.prototype['type'] = undefined;

/**
 * @member {module:model/CostOption.TypeStatusEnum} type_status
 */
CostOption.prototype['type_status'] = undefined;

/**
 * @member {module:model/CostOption.BrandEnum} brand
 */
CostOption.prototype['brand'] = undefined;

/**
 * @member {module:model/CostOption.BrandFeeTypeEnum} brand_fee_type
 */
CostOption.prototype['brand_fee_type'] = undefined;

/**
 * @member {Number} brand_fee
 */
CostOption.prototype['brand_fee'] = undefined;

/**
 * @member {Number} installments
 */
CostOption.prototype['installments'] = undefined;

/**
 * @member {module:model/CostOption.ExchangeFeeTypeEnum} exchange_fee_type
 */
CostOption.prototype['exchange_fee_type'] = undefined;

/**
 * @member {Number} exchange_fee
 */
CostOption.prototype['exchange_fee'] = undefined;

/**
 * @member {module:model/CostOption.AnticipationFeeTypeEnum} anticipation_fee_type
 */
CostOption.prototype['anticipation_fee_type'] = undefined;

/**
 * @member {Number} anticipation_fee
 */
CostOption.prototype['anticipation_fee'] = undefined;

/**
 * @member {module:model/CostOption.MarkupFeeTypeEnum} markup_fee_type
 */
CostOption.prototype['markup_fee_type'] = undefined;

/**
 * @member {Number} markup_fee
 */
CostOption.prototype['markup_fee'] = undefined;

/**
 * @member {Boolean} is_cap
 */
CostOption.prototype['is_cap'] = undefined;

/**
 * @member {Number} exchange_cap
 */
CostOption.prototype['exchange_cap'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CostOption['TypeEnum'] = {

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
     * value: "pix_pos"
     * @const
     */
    "pix_pos": "pix_pos"
};


/**
 * Allowed values for the <code>type_status</code> property.
 * @enum {String}
 * @readonly
 */
CostOption['TypeStatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "paid"
     * @const
     */
    "paid": "paid"
};


/**
 * Allowed values for the <code>brand</code> property.
 * @enum {String}
 * @readonly
 */
CostOption['BrandEnum'] = {

    /**
     * value: "visa"
     * @const
     */
    "visa": "visa",

    /**
     * value: "elo"
     * @const
     */
    "elo": "elo",

    /**
     * value: "mc"
     * @const
     */
    "mc": "mc",

    /**
     * value: "amex"
     * @const
     */
    "amex": "amex",

    /**
     * value: "hipercard"
     * @const
     */
    "hipercard": "hipercard",

    /**
     * value: "default"
     * @const
     */
    "default": "default"
};


/**
 * Allowed values for the <code>brand_fee_type</code> property.
 * @enum {String}
 * @readonly
 */
CostOption['BrandFeeTypeEnum'] = {

    /**
     * value: "fixed"
     * @const
     */
    "fixed": "fixed",

    /**
     * value: "percent"
     * @const
     */
    "percent": "percent"
};


/**
 * Allowed values for the <code>exchange_fee_type</code> property.
 * @enum {String}
 * @readonly
 */
CostOption['ExchangeFeeTypeEnum'] = {

    /**
     * value: "fixed"
     * @const
     */
    "fixed": "fixed",

    /**
     * value: "percent"
     * @const
     */
    "percent": "percent"
};


/**
 * Allowed values for the <code>anticipation_fee_type</code> property.
 * @enum {String}
 * @readonly
 */
CostOption['AnticipationFeeTypeEnum'] = {

    /**
     * value: "fixed"
     * @const
     */
    "fixed": "fixed",

    /**
     * value: "percent"
     * @const
     */
    "percent": "percent"
};


/**
 * Allowed values for the <code>markup_fee_type</code> property.
 * @enum {String}
 * @readonly
 */
CostOption['MarkupFeeTypeEnum'] = {

    /**
     * value: "fixed"
     * @const
     */
    "fixed": "fixed",

    /**
     * value: "percent"
     * @const
     */
    "percent": "percent"
};



export default CostOption;
