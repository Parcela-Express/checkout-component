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
import {InstallmentPlanDTO} from './InstallmentPlanDTO';

/**
 * The AllOfCreatePaymentDtoInstallmentPlan model module.
 * @module model/AllOfCreatePaymentDtoInstallmentPlan
 * @version 1.0
 */
export class AllOfCreatePaymentDtoInstallmentPlan extends InstallmentPlanDTO {
  /**
   * Constructs a new <code>AllOfCreatePaymentDtoInstallmentPlan</code>.
   * @alias module:model/AllOfCreatePaymentDtoInstallmentPlan
   * @class
   * @extends module:model/InstallmentPlanDTO
   * @param numberInstallments {} 
   */
  constructor(numberInstallments) {
    super(numberInstallments);
  }

  /**
   * Constructs a <code>AllOfCreatePaymentDtoInstallmentPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfCreatePaymentDtoInstallmentPlan} obj Optional instance to populate.
   * @return {module:model/AllOfCreatePaymentDtoInstallmentPlan} The populated <code>AllOfCreatePaymentDtoInstallmentPlan</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfCreatePaymentDtoInstallmentPlan();
      InstallmentPlanDTO.constructFromObject(data, obj);
    }
    return obj;
  }
}
