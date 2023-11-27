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
 * The CreateCostPlanOptionsDto model module.
 * @module model/CreateCostPlanOptionsDto
 * @version 1.0
 */
class CreateCostPlanOptionsDto {
    /**
     * Constructs a new <code>CreateCostPlanOptionsDto</code>.
     * @alias module:model/CreateCostPlanOptionsDto
     * @param fixed_amount {Number} 
     * @param bank_fixed_amount {Number} 
     * @param description {String} 
     * @param type {module:model/CreateCostPlanOptionsDto.TypeEnum} 
     * @param exchange_fee_type {module:model/CreateCostPlanOptionsDto.ExchangeFeeTypeEnum} 
     * @param exchange_fee {Number} 
     */
    constructor(fixed_amount, bank_fixed_amount, description, type, exchange_fee_type, exchange_fee) { 
        
        CreateCostPlanOptionsDto.initialize(this, fixed_amount, bank_fixed_amount, description, type, exchange_fee_type, exchange_fee);
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
     * Constructs a <code>CreateCostPlanOptionsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCostPlanOptionsDto} obj Optional instance to populate.
     * @return {module:model/CreateCostPlanOptionsDto} The populated <code>CreateCostPlanOptionsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCostPlanOptionsDto();

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
            if (data.hasOwnProperty('brand_fee')) {
                obj['brand_fee'] = ApiClient.convertToType(data['brand_fee'], 'Number');
            }
            if (data.hasOwnProperty('brand_fee_type')) {
                obj['brand_fee_type'] = ApiClient.convertToType(data['brand_fee_type'], 'String');
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
 * @member {Number} fixed_amount
 */
CreateCostPlanOptionsDto.prototype['fixed_amount'] = undefined;

/**
 * @member {Number} bank_fixed_amount
 */
CreateCostPlanOptionsDto.prototype['bank_fixed_amount'] = undefined;

/**
 * @member {String} description
 */
CreateCostPlanOptionsDto.prototype['description'] = undefined;

/**
 * @member {module:model/CreateCostPlanOptionsDto.TypeEnum} type
 */
CreateCostPlanOptionsDto.prototype['type'] = undefined;

/**
 * @member {module:model/CreateCostPlanOptionsDto.TypeStatusEnum} type_status
 */
CreateCostPlanOptionsDto.prototype['type_status'] = undefined;

/**
 * @member {module:model/CreateCostPlanOptionsDto.BrandEnum} brand
 */
CreateCostPlanOptionsDto.prototype['brand'] = undefined;

/**
 * @member {Number} brand_fee
 */
CreateCostPlanOptionsDto.prototype['brand_fee'] = undefined;

/**
 * @member {module:model/CreateCostPlanOptionsDto.BrandFeeTypeEnum} brand_fee_type
 */
CreateCostPlanOptionsDto.prototype['brand_fee_type'] = undefined;

/**
 * @member {Number} installments
 */
CreateCostPlanOptionsDto.prototype['installments'] = undefined;

/**
 * @member {module:model/CreateCostPlanOptionsDto.ExchangeFeeTypeEnum} exchange_fee_type
 */
CreateCostPlanOptionsDto.prototype['exchange_fee_type'] = undefined;

/**
 * @member {Number} exchange_fee
 */
CreateCostPlanOptionsDto.prototype['exchange_fee'] = undefined;

/**
 * @member {module:model/CreateCostPlanOptionsDto.AnticipationFeeTypeEnum} anticipation_fee_type
 */
CreateCostPlanOptionsDto.prototype['anticipation_fee_type'] = undefined;

/**
 * @member {Number} anticipation_fee
 */
CreateCostPlanOptionsDto.prototype['anticipation_fee'] = undefined;

/**
 * @member {module:model/CreateCostPlanOptionsDto.MarkupFeeTypeEnum} markup_fee_type
 */
CreateCostPlanOptionsDto.prototype['markup_fee_type'] = undefined;

/**
 * @member {Number} markup_fee
 */
CreateCostPlanOptionsDto.prototype['markup_fee'] = undefined;

/**
 * @member {Boolean} is_cap
 */
CreateCostPlanOptionsDto.prototype['is_cap'] = undefined;

/**
 * @member {Number} exchange_cap
 */
CreateCostPlanOptionsDto.prototype['exchange_cap'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateCostPlanOptionsDto['TypeEnum'] = {

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
CreateCostPlanOptionsDto['TypeStatusEnum'] = {

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
CreateCostPlanOptionsDto['BrandEnum'] = {

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
CreateCostPlanOptionsDto['BrandFeeTypeEnum'] = {

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
CreateCostPlanOptionsDto['ExchangeFeeTypeEnum'] = {

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
CreateCostPlanOptionsDto['AnticipationFeeTypeEnum'] = {

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
CreateCostPlanOptionsDto['MarkupFeeTypeEnum'] = {

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



export default CreateCostPlanOptionsDto;

