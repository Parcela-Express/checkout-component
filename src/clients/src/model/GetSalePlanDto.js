/*
 * Parcela Express API
 * Parcela Express API
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {GetAcquirerDto} from './GetAcquirerDto';
import {GetCostPlanDto} from './GetCostPlanDto';
import {GetMerchantDto} from './GetMerchantDto';
import {GetPaymentTypeDto} from './GetPaymentTypeDto';
import {GetSettlementPlanDto} from './GetSettlementPlanDto';

/**
 * The GetSalePlanDto model module.
 * @module model/GetSalePlanDto
 * @version 1.0
 */
export class GetSalePlanDto {
  /**
   * Constructs a new <code>GetSalePlanDto</code>.
   * @alias module:model/GetSalePlanDto
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param description {String} 
   * @param paymentTypes {Array.<module:model/GetPaymentTypeDto>} 
   * @param type {module:model/GetSalePlanDto.TypeEnum} 
   * @param merchant {module:model/GetMerchantDto} 
   * @param acquirer {module:model/GetAcquirerDto} 
   * @param settlementPlan {module:model/GetSettlementPlanDto} 
   * @param costPlan {module:model/GetCostPlanDto} 
   */
  constructor(id, name, description, paymentTypes, type, merchant, acquirer, settlementPlan, costPlan) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.paymentTypes = paymentTypes;
    this.type = type;
    this.merchant = merchant;
    this.acquirer = acquirer;
    this.settlementPlan = settlementPlan;
    this.costPlan = costPlan;
  }

  /**
   * Constructs a <code>GetSalePlanDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSalePlanDto} obj Optional instance to populate.
   * @return {module:model/GetSalePlanDto} The populated <code>GetSalePlanDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSalePlanDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('payment_types'))
        obj.paymentTypes = ApiClient.convertToType(data['payment_types'], [GetPaymentTypeDto]);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('merchant'))
        obj.merchant = GetMerchantDto.constructFromObject(data['merchant']);
      if (data.hasOwnProperty('acquirer'))
        obj.acquirer = GetAcquirerDto.constructFromObject(data['acquirer']);
      if (data.hasOwnProperty('settlement_plan'))
        obj.settlementPlan = GetSettlementPlanDto.constructFromObject(data['settlement_plan']);
      if (data.hasOwnProperty('cost_plan'))
        obj.costPlan = GetCostPlanDto.constructFromObject(data['cost_plan']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetSalePlanDto.prototype.id = undefined;

/**
 * @member {String} name
 */
GetSalePlanDto.prototype.name = undefined;

/**
 * @member {String} description
 */
GetSalePlanDto.prototype.description = undefined;

/**
 * @member {Array.<module:model/GetPaymentTypeDto>} paymentTypes
 */
GetSalePlanDto.prototype.paymentTypes = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GetSalePlanDto.TypeEnum = {
  /**
   * value: "markup"
   * @const
   */
  markup: "markup",

  /**
   * value: "spread"
   * @const
   */
  spread: "spread",

  /**
   * value: "split"
   * @const
   */
  split: "split"
};
/**
 * @member {module:model/GetSalePlanDto.TypeEnum} type
 */
GetSalePlanDto.prototype.type = undefined;

/**
 * @member {module:model/GetMerchantDto} merchant
 */
GetSalePlanDto.prototype.merchant = undefined;

/**
 * @member {module:model/GetAcquirerDto} acquirer
 */
GetSalePlanDto.prototype.acquirer = undefined;

/**
 * @member {module:model/GetSettlementPlanDto} settlementPlan
 */
GetSalePlanDto.prototype.settlementPlan = undefined;

/**
 * @member {module:model/GetCostPlanDto} costPlan
 */
GetSalePlanDto.prototype.costPlan = undefined;

