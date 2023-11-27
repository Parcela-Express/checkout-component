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
import Billet from './Billet';
import Celcoin from './Celcoin';
import CostOption from './CostOption';
import CostPlan from './CostPlan';
import GetSalePayerAddressDto from './GetSalePayerAddressDto';
import Merchant from './Merchant';
import Payer from './Payer';
import PaymentType from './PaymentType';
import SalePlan from './SalePlan';
import Seller from './Seller';
import SettlementBatch from './SettlementBatch';
import SplitRules from './SplitRules';
import User from './User';

/**
 * The Sale model module.
 * @module model/Sale
 * @version 1.0
 */
class Sale {
    /**
     * Constructs a new <code>Sale</code>.
     * @alias module:model/Sale
     * @param description {String} 
     * @param original_amount {Number} 
     * @param status {module:model/Sale.StatusEnum} 
     * @param type {module:model/Sale.TypeEnum} 
     * @param seller {module:model/Seller} 
     * @param merchant {module:model/Merchant} 
     * @param sale_plan {module:model/SalePlan} 
     * @param cost_plan {module:model/CostPlan} 
     * @param seller_description {String} 
     * @param order_number {Number} 
     */
    constructor(description, original_amount, status, type, seller, merchant, sale_plan, cost_plan, seller_description, order_number) { 
        
        Sale.initialize(this, description, original_amount, status, type, seller, merchant, sale_plan, cost_plan, seller_description, order_number);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, original_amount, status, type, seller, merchant, sale_plan, cost_plan, seller_description, order_number) { 
        obj['description'] = description;
        obj['original_amount'] = original_amount;
        obj['status'] = status;
        obj['type'] = type;
        obj['seller'] = seller;
        obj['merchant'] = merchant;
        obj['sale_plan'] = sale_plan;
        obj['cost_plan'] = cost_plan;
        obj['seller_description'] = seller_description;
        obj['order_number'] = order_number;
    }

    /**
     * Constructs a <code>Sale</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sale} obj Optional instance to populate.
     * @return {module:model/Sale} The populated <code>Sale</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sale();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('acquirer_reference')) {
                obj['acquirer_reference'] = ApiClient.convertToType(data['acquirer_reference'], 'String');
            }
            if (data.hasOwnProperty('acquirer_code')) {
                obj['acquirer_code'] = ApiClient.convertToType(data['acquirer_code'], 'String');
            }
            if (data.hasOwnProperty('acquirer_document')) {
                obj['acquirer_document'] = ApiClient.convertToType(data['acquirer_document'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('original_amount')) {
                obj['original_amount'] = ApiClient.convertToType(data['original_amount'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('absorb_costs')) {
                obj['absorb_costs'] = ApiClient.convertToType(data['absorb_costs'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('settlement_status')) {
                obj['settlement_status'] = ApiClient.convertToType(data['settlement_status'], 'String');
            }
            if (data.hasOwnProperty('form_payment')) {
                obj['form_payment'] = ApiClient.convertToType(data['form_payment'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = Seller.constructFromObject(data['seller']);
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = Merchant.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('sale_plan')) {
                obj['sale_plan'] = SalePlan.constructFromObject(data['sale_plan']);
            }
            if (data.hasOwnProperty('cost_plan')) {
                obj['cost_plan'] = CostPlan.constructFromObject(data['cost_plan']);
            }
            if (data.hasOwnProperty('settlement_day')) {
                obj['settlement_day'] = ApiClient.convertToType(data['settlement_day'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('payment_type')) {
                obj['payment_type'] = PaymentType.constructFromObject(data['payment_type']);
            }
            if (data.hasOwnProperty('payment_type_id')) {
                obj['payment_type_id'] = ApiClient.convertToType(data['payment_type_id'], 'String');
            }
            if (data.hasOwnProperty('payer')) {
                obj['payer'] = Payer.constructFromObject(data['payer']);
            }
            if (data.hasOwnProperty('payer_id')) {
                obj['payer_id'] = ApiClient.convertToType(data['payer_id'], 'String');
            }
            if (data.hasOwnProperty('settlement_batch')) {
                obj['settlement_batch'] = SettlementBatch.constructFromObject(data['settlement_batch']);
            }
            if (data.hasOwnProperty('settlement_batch_id')) {
                obj['settlement_batch_id'] = ApiClient.convertToType(data['settlement_batch_id'], 'String');
            }
            if (data.hasOwnProperty('billet')) {
                obj['billet'] = Billet.constructFromObject(data['billet']);
            }
            if (data.hasOwnProperty('billet_id')) {
                obj['billet_id'] = ApiClient.convertToType(data['billet_id'], 'String');
            }
            if (data.hasOwnProperty('is_summed')) {
                obj['is_summed'] = ApiClient.convertToType(data['is_summed'], 'Boolean');
            }
            if (data.hasOwnProperty('is_visible')) {
                obj['is_visible'] = ApiClient.convertToType(data['is_visible'], 'Boolean');
            }
            if (data.hasOwnProperty('installments')) {
                obj['installments'] = ApiClient.convertToType(data['installments'], 'Number');
            }
            if (data.hasOwnProperty('seller_id')) {
                obj['seller_id'] = ApiClient.convertToType(data['seller_id'], 'String');
            }
            if (data.hasOwnProperty('seller_name')) {
                obj['seller_name'] = ApiClient.convertToType(data['seller_name'], 'String');
            }
            if (data.hasOwnProperty('seller_document')) {
                obj['seller_document'] = ApiClient.convertToType(data['seller_document'], 'String');
            }
            if (data.hasOwnProperty('seller_description')) {
                obj['seller_description'] = ApiClient.convertToType(data['seller_description'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_name')) {
                obj['merchant_name'] = ApiClient.convertToType(data['merchant_name'], 'String');
            }
            if (data.hasOwnProperty('merchant_document')) {
                obj['merchant_document'] = ApiClient.convertToType(data['merchant_document'], 'String');
            }
            if (data.hasOwnProperty('payment_type_code')) {
                obj['payment_type_code'] = ApiClient.convertToType(data['payment_type_code'], 'String');
            }
            if (data.hasOwnProperty('payment_type_description')) {
                obj['payment_type_description'] = ApiClient.convertToType(data['payment_type_description'], 'String');
            }
            if (data.hasOwnProperty('payment_type_installments')) {
                obj['payment_type_installments'] = ApiClient.convertToType(data['payment_type_installments'], 'Number');
            }
            if (data.hasOwnProperty('payer_name')) {
                obj['payer_name'] = ApiClient.convertToType(data['payer_name'], 'String');
            }
            if (data.hasOwnProperty('payer_email')) {
                obj['payer_email'] = ApiClient.convertToType(data['payer_email'], 'String');
            }
            if (data.hasOwnProperty('payer_document')) {
                obj['payer_document'] = ApiClient.convertToType(data['payer_document'], 'String');
            }
            if (data.hasOwnProperty('payer_phone')) {
                obj['payer_phone'] = ApiClient.convertToType(data['payer_phone'], 'String');
            }
            if (data.hasOwnProperty('payer_address')) {
                obj['payer_address'] = GetSalePayerAddressDto.constructFromObject(data['payer_address']);
            }
            if (data.hasOwnProperty('sale_plan_id')) {
                obj['sale_plan_id'] = ApiClient.convertToType(data['sale_plan_id'], 'String');
            }
            if (data.hasOwnProperty('sale_plan_name')) {
                obj['sale_plan_name'] = ApiClient.convertToType(data['sale_plan_name'], 'String');
            }
            if (data.hasOwnProperty('cost_plan_name')) {
                obj['cost_plan_name'] = ApiClient.convertToType(data['cost_plan_name'], 'String');
            }
            if (data.hasOwnProperty('cost_plan_options')) {
                obj['cost_plan_options'] = ApiClient.convertToType(data['cost_plan_options'], [CostOption]);
            }
            if (data.hasOwnProperty('created_by_user_name')) {
                obj['created_by_user_name'] = ApiClient.convertToType(data['created_by_user_name'], 'String');
            }
            if (data.hasOwnProperty('created_by_user_email')) {
                obj['created_by_user_email'] = ApiClient.convertToType(data['created_by_user_email'], 'String');
            }
            if (data.hasOwnProperty('created_at_unix_time')) {
                obj['created_at_unix_time'] = ApiClient.convertToType(data['created_at_unix_time'], 'Number');
            }
            if (data.hasOwnProperty('created_at_time')) {
                obj['created_at_time'] = ApiClient.convertToType(data['created_at_time'], 'Number');
            }
            if (data.hasOwnProperty('pre_capture')) {
                obj['pre_capture'] = ApiClient.convertToType(data['pre_capture'], 'Boolean');
            }
            if (data.hasOwnProperty('settlement_status_cancellation')) {
                obj['settlement_status_cancellation'] = ApiClient.convertToType(data['settlement_status_cancellation'], 'String');
            }
            if (data.hasOwnProperty('settlement_day_cancellation')) {
                obj['settlement_day_cancellation'] = ApiClient.convertToType(data['settlement_day_cancellation'], 'String');
            }
            if (data.hasOwnProperty('settlement_batch_cancellation')) {
                obj['settlement_batch_cancellation'] = SettlementBatch.constructFromObject(data['settlement_batch_cancellation']);
            }
            if (data.hasOwnProperty('settlement_batch_cancellation_id')) {
                obj['settlement_batch_cancellation_id'] = ApiClient.convertToType(data['settlement_batch_cancellation_id'], 'String');
            }
            if (data.hasOwnProperty('settlement_batch_retry')) {
                obj['settlement_batch_retry'] = SettlementBatch.constructFromObject(data['settlement_batch_retry']);
            }
            if (data.hasOwnProperty('settlement_batch_retry_id')) {
                obj['settlement_batch_retry_id'] = ApiClient.convertToType(data['settlement_batch_retry_id'], 'String');
            }
            if (data.hasOwnProperty('settlement_batch_retry_status')) {
                obj['settlement_batch_retry_status'] = ApiClient.convertToType(data['settlement_batch_retry_status'], 'String');
            }
            if (data.hasOwnProperty('settlement_batch_retry_day')) {
                obj['settlement_batch_retry_day'] = ApiClient.convertToType(data['settlement_batch_retry_day'], 'String');
            }
            if (data.hasOwnProperty('payment_day')) {
                obj['payment_day'] = ApiClient.convertToType(data['payment_day'], 'String');
            }
            if (data.hasOwnProperty('payment_day_time')) {
                obj['payment_day_time'] = ApiClient.convertToType(data['payment_day_time'], 'Number');
            }
            if (data.hasOwnProperty('order_number')) {
                obj['order_number'] = ApiClient.convertToType(data['order_number'], 'Number');
            }
            if (data.hasOwnProperty('has_split_rules')) {
                obj['has_split_rules'] = ApiClient.convertToType(data['has_split_rules'], 'Boolean');
            }
            if (data.hasOwnProperty('split_rules')) {
                obj['split_rules'] = SplitRules.constructFromObject(data['split_rules']);
            }
            if (data.hasOwnProperty('split_rules_id')) {
                obj['split_rules_id'] = ApiClient.convertToType(data['split_rules_id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('card_number')) {
                obj['card_number'] = ApiClient.convertToType(data['card_number'], 'String');
            }
            if (data.hasOwnProperty('card_brand')) {
                obj['card_brand'] = ApiClient.convertToType(data['card_brand'], 'String');
            }
            if (data.hasOwnProperty('card_holder_name')) {
                obj['card_holder_name'] = ApiClient.convertToType(data['card_holder_name'], 'String');
            }
            if (data.hasOwnProperty('success_return_url')) {
                obj['success_return_url'] = ApiClient.convertToType(data['success_return_url'], 'String');
            }
            if (data.hasOwnProperty('error_return_url')) {
                obj['error_return_url'] = ApiClient.convertToType(data['error_return_url'], 'String');
            }
            if (data.hasOwnProperty('confirmation_required')) {
                obj['confirmation_required'] = ApiClient.convertToType(data['confirmation_required'], 'Boolean');
            }
            if (data.hasOwnProperty('confirmation_day')) {
                obj['confirmation_day'] = ApiClient.convertToType(data['confirmation_day'], 'Date');
            }
            if (data.hasOwnProperty('risk_active')) {
                obj['risk_active'] = ApiClient.convertToType(data['risk_active'], 'Boolean');
            }
            if (data.hasOwnProperty('is_capture')) {
                obj['is_capture'] = ApiClient.convertToType(data['is_capture'], 'Boolean');
            }
            if (data.hasOwnProperty('split_description')) {
                obj['split_description'] = ApiClient.convertToType(data['split_description'], 'String');
            }
            if (data.hasOwnProperty('extract_identification')) {
                obj['extract_identification'] = ApiClient.convertToType(data['extract_identification'], 'String');
            }
            if (data.hasOwnProperty('terminal_id')) {
                obj['terminal_id'] = ApiClient.convertToType(data['terminal_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('spread')) {
                obj['spread'] = ApiClient.convertToType(data['spread'], 'Number');
            }
            if (data.hasOwnProperty('supportResponsible')) {
                obj['supportResponsible'] = ApiClient.convertToType(data['supportResponsible'], 'String');
            }
            if (data.hasOwnProperty('commercialResponsible')) {
                obj['commercialResponsible'] = ApiClient.convertToType(data['commercialResponsible'], 'String');
            }
            if (data.hasOwnProperty('qrcode_data')) {
                obj['qrcode_data'] = ApiClient.convertToType(data['qrcode_data'], 'String');
            }
            if (data.hasOwnProperty('three_ds_active')) {
                obj['three_ds_active'] = ApiClient.convertToType(data['three_ds_active'], 'Boolean');
            }
            if (data.hasOwnProperty('celcoin_id')) {
                obj['celcoin_id'] = ApiClient.convertToType(data['celcoin_id'], 'String');
            }
            if (data.hasOwnProperty('write_off_file_generated')) {
                obj['write_off_file_generated'] = ApiClient.convertToType(data['write_off_file_generated'], 'Boolean');
            }
            if (data.hasOwnProperty('celcoin')) {
                obj['celcoin'] = Celcoin.constructFromObject(data['celcoin']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Sale.prototype['id'] = undefined;

/**
 * @member {String} description
 */
Sale.prototype['description'] = undefined;

/**
 * @member {String} protocol
 */
Sale.prototype['protocol'] = undefined;

/**
 * @member {String} acquirer_reference
 */
Sale.prototype['acquirer_reference'] = undefined;

/**
 * @member {module:model/Sale.AcquirerCodeEnum} acquirer_code
 */
Sale.prototype['acquirer_code'] = undefined;

/**
 * @member {String} acquirer_document
 */
Sale.prototype['acquirer_document'] = undefined;

/**
 * @member {String} created_at
 */
Sale.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Sale.prototype['updated_at'] = undefined;

/**
 * @member {Number} original_amount
 */
Sale.prototype['original_amount'] = undefined;

/**
 * @member {Number} amount
 */
Sale.prototype['amount'] = undefined;

/**
 * @member {Number} fee
 */
Sale.prototype['fee'] = undefined;

/**
 * @member {Array.<String>} absorb_costs
 */
Sale.prototype['absorb_costs'] = undefined;

/**
 * @member {module:model/Sale.StatusEnum} status
 */
Sale.prototype['status'] = undefined;

/**
 * @member {module:model/Sale.SettlementStatusEnum} settlement_status
 */
Sale.prototype['settlement_status'] = undefined;

/**
 * @member {module:model/Sale.FormPaymentEnum} form_payment
 */
Sale.prototype['form_payment'] = undefined;

/**
 * @member {module:model/Sale.TypeEnum} type
 */
Sale.prototype['type'] = undefined;

/**
 * @member {module:model/Seller} seller
 */
Sale.prototype['seller'] = undefined;

/**
 * @member {module:model/Merchant} merchant
 */
Sale.prototype['merchant'] = undefined;

/**
 * @member {module:model/SalePlan} sale_plan
 */
Sale.prototype['sale_plan'] = undefined;

/**
 * @member {module:model/CostPlan} cost_plan
 */
Sale.prototype['cost_plan'] = undefined;

/**
 * @member {String} settlement_day
 */
Sale.prototype['settlement_day'] = undefined;

/**
 * @member {module:model/User} user
 */
Sale.prototype['user'] = undefined;

/**
 * @member {module:model/PaymentType} payment_type
 */
Sale.prototype['payment_type'] = undefined;

/**
 * @member {String} payment_type_id
 */
Sale.prototype['payment_type_id'] = undefined;

/**
 * @member {module:model/Payer} payer
 */
Sale.prototype['payer'] = undefined;

/**
 * @member {String} payer_id
 */
Sale.prototype['payer_id'] = undefined;

/**
 * @member {module:model/SettlementBatch} settlement_batch
 */
Sale.prototype['settlement_batch'] = undefined;

/**
 * @member {String} settlement_batch_id
 */
Sale.prototype['settlement_batch_id'] = undefined;

/**
 * @member {module:model/Billet} billet
 */
Sale.prototype['billet'] = undefined;

/**
 * @member {String} billet_id
 */
Sale.prototype['billet_id'] = undefined;

/**
 * @member {Boolean} is_summed
 */
Sale.prototype['is_summed'] = undefined;

/**
 * @member {Boolean} is_visible
 */
Sale.prototype['is_visible'] = undefined;

/**
 * @member {Number} installments
 */
Sale.prototype['installments'] = undefined;

/**
 * @member {String} seller_id
 */
Sale.prototype['seller_id'] = undefined;

/**
 * @member {String} seller_name
 */
Sale.prototype['seller_name'] = undefined;

/**
 * @member {String} seller_document
 */
Sale.prototype['seller_document'] = undefined;

/**
 * @member {String} seller_description
 */
Sale.prototype['seller_description'] = undefined;

/**
 * @member {String} merchant_id
 */
Sale.prototype['merchant_id'] = undefined;

/**
 * @member {String} merchant_name
 */
Sale.prototype['merchant_name'] = undefined;

/**
 * @member {String} merchant_document
 */
Sale.prototype['merchant_document'] = undefined;

/**
 * @member {String} payment_type_code
 */
Sale.prototype['payment_type_code'] = undefined;

/**
 * @member {String} payment_type_description
 */
Sale.prototype['payment_type_description'] = undefined;

/**
 * @member {Number} payment_type_installments
 */
Sale.prototype['payment_type_installments'] = undefined;

/**
 * @member {String} payer_name
 */
Sale.prototype['payer_name'] = undefined;

/**
 * @member {String} payer_email
 */
Sale.prototype['payer_email'] = undefined;

/**
 * @member {String} payer_document
 */
Sale.prototype['payer_document'] = undefined;

/**
 * @member {String} payer_phone
 */
Sale.prototype['payer_phone'] = undefined;

/**
 * @member {module:model/GetSalePayerAddressDto} payer_address
 */
Sale.prototype['payer_address'] = undefined;

/**
 * @member {String} sale_plan_id
 */
Sale.prototype['sale_plan_id'] = undefined;

/**
 * @member {String} sale_plan_name
 */
Sale.prototype['sale_plan_name'] = undefined;

/**
 * @member {String} cost_plan_name
 */
Sale.prototype['cost_plan_name'] = undefined;

/**
 * @member {Array.<module:model/CostOption>} cost_plan_options
 */
Sale.prototype['cost_plan_options'] = undefined;

/**
 * @member {String} created_by_user_name
 */
Sale.prototype['created_by_user_name'] = undefined;

/**
 * @member {String} created_by_user_email
 */
Sale.prototype['created_by_user_email'] = undefined;

/**
 * @member {Number} created_at_unix_time
 */
Sale.prototype['created_at_unix_time'] = undefined;

/**
 * @member {Number} created_at_time
 */
Sale.prototype['created_at_time'] = undefined;

/**
 * @member {Boolean} pre_capture
 */
Sale.prototype['pre_capture'] = undefined;

/**
 * @member {module:model/Sale.SettlementStatusCancellationEnum} settlement_status_cancellation
 */
Sale.prototype['settlement_status_cancellation'] = undefined;

/**
 * @member {String} settlement_day_cancellation
 */
Sale.prototype['settlement_day_cancellation'] = undefined;

/**
 * @member {module:model/SettlementBatch} settlement_batch_cancellation
 */
Sale.prototype['settlement_batch_cancellation'] = undefined;

/**
 * @member {String} settlement_batch_cancellation_id
 */
Sale.prototype['settlement_batch_cancellation_id'] = undefined;

/**
 * @member {module:model/SettlementBatch} settlement_batch_retry
 */
Sale.prototype['settlement_batch_retry'] = undefined;

/**
 * @member {String} settlement_batch_retry_id
 */
Sale.prototype['settlement_batch_retry_id'] = undefined;

/**
 * @member {module:model/Sale.SettlementBatchRetryStatusEnum} settlement_batch_retry_status
 */
Sale.prototype['settlement_batch_retry_status'] = undefined;

/**
 * @member {String} settlement_batch_retry_day
 */
Sale.prototype['settlement_batch_retry_day'] = undefined;

/**
 * @member {String} payment_day
 */
Sale.prototype['payment_day'] = undefined;

/**
 * @member {Number} payment_day_time
 */
Sale.prototype['payment_day_time'] = undefined;

/**
 * @member {Number} order_number
 */
Sale.prototype['order_number'] = undefined;

/**
 * @member {Boolean} has_split_rules
 */
Sale.prototype['has_split_rules'] = undefined;

/**
 * @member {module:model/SplitRules} split_rules
 */
Sale.prototype['split_rules'] = undefined;

/**
 * @member {String} split_rules_id
 */
Sale.prototype['split_rules_id'] = undefined;

/**
 * @member {String} metadata
 */
Sale.prototype['metadata'] = undefined;

/**
 * @member {String} card_number
 */
Sale.prototype['card_number'] = undefined;

/**
 * @member {String} card_brand
 */
Sale.prototype['card_brand'] = undefined;

/**
 * @member {String} card_holder_name
 */
Sale.prototype['card_holder_name'] = undefined;

/**
 * @member {String} success_return_url
 */
Sale.prototype['success_return_url'] = undefined;

/**
 * @member {String} error_return_url
 */
Sale.prototype['error_return_url'] = undefined;

/**
 * @member {Boolean} confirmation_required
 */
Sale.prototype['confirmation_required'] = undefined;

/**
 * @member {Date} confirmation_day
 */
Sale.prototype['confirmation_day'] = undefined;

/**
 * @member {Boolean} risk_active
 */
Sale.prototype['risk_active'] = undefined;

/**
 * @member {Boolean} is_capture
 */
Sale.prototype['is_capture'] = undefined;

/**
 * @member {String} split_description
 */
Sale.prototype['split_description'] = undefined;

/**
 * @member {String} extract_identification
 */
Sale.prototype['extract_identification'] = undefined;

/**
 * @member {String} terminal_id
 */
Sale.prototype['terminal_id'] = undefined;

/**
 * @member {String} service_id
 */
Sale.prototype['service_id'] = undefined;

/**
 * @member {Number} spread
 */
Sale.prototype['spread'] = undefined;

/**
 * @member {String} supportResponsible
 */
Sale.prototype['supportResponsible'] = undefined;

/**
 * @member {String} commercialResponsible
 */
Sale.prototype['commercialResponsible'] = undefined;

/**
 * @member {String} qrcode_data
 */
Sale.prototype['qrcode_data'] = undefined;

/**
 * @member {Boolean} three_ds_active
 */
Sale.prototype['three_ds_active'] = undefined;

/**
 * @member {String} celcoin_id
 */
Sale.prototype['celcoin_id'] = undefined;

/**
 * @member {Boolean} write_off_file_generated
 */
Sale.prototype['write_off_file_generated'] = undefined;

/**
 * @member {module:model/Celcoin} celcoin
 */
Sale.prototype['celcoin'] = undefined;





/**
 * Allowed values for the <code>acquirer_code</code> property.
 * @enum {String}
 * @readonly
 */
Sale['AcquirerCodeEnum'] = {

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


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Sale['StatusEnum'] = {

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
 * Allowed values for the <code>settlement_status</code> property.
 * @enum {String}
 * @readonly
 */
Sale['SettlementStatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "paid"
     * @const
     */
    "paid": "paid",

    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",

    /**
     * value: "pending_cancel"
     * @const
     */
    "pending_cancel": "pending_cancel",

    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "resent"
     * @const
     */
    "resent": "resent"
};


/**
 * Allowed values for the <code>form_payment</code> property.
 * @enum {String}
 * @readonly
 */
Sale['FormPaymentEnum'] = {

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
     * value: "billet"
     * @const
     */
    "billet": "billet",

    /**
     * value: "pix"
     * @const
     */
    "pix": "pix",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "pix_pos"
     * @const
     */
    "pix_pos": "pix_pos"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Sale['TypeEnum'] = {

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
 * Allowed values for the <code>settlement_status_cancellation</code> property.
 * @enum {String}
 * @readonly
 */
Sale['SettlementStatusCancellationEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "paid"
     * @const
     */
    "paid": "paid",

    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",

    /**
     * value: "pending_cancel"
     * @const
     */
    "pending_cancel": "pending_cancel",

    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "resent"
     * @const
     */
    "resent": "resent"
};


/**
 * Allowed values for the <code>settlement_batch_retry_status</code> property.
 * @enum {String}
 * @readonly
 */
Sale['SettlementBatchRetryStatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "paid"
     * @const
     */
    "paid": "paid",

    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",

    /**
     * value: "pending_cancel"
     * @const
     */
    "pending_cancel": "pending_cancel",

    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "resent"
     * @const
     */
    "resent": "resent"
};



export default Sale;
