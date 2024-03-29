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
import {CardDTO} from './CardDTO';

/**
 * The AllOfCreatePaymentWithSplitDtoCardAttributes model module.
 * @module model/AllOfCreatePaymentWithSplitDtoCardAttributes
 * @version 1.0
 */
export class AllOfCreatePaymentWithSplitDtoCardAttributes extends CardDTO {
  /**
   * Constructs a new <code>AllOfCreatePaymentWithSplitDtoCardAttributes</code>.
   * @alias module:model/AllOfCreatePaymentWithSplitDtoCardAttributes
   * @class
   * @extends module:model/CardDTO
   * @param holderName {} 
   * @param _number {} 
   * @param expirationMonth {} 
   * @param expirationYear {} 
   * @param securityCode {} 
   */
  constructor(holderName, _number, expirationMonth, expirationYear, securityCode) {
    super(holderName, _number, expirationMonth, expirationYear, securityCode);
  }

  /**
   * Constructs a <code>AllOfCreatePaymentWithSplitDtoCardAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfCreatePaymentWithSplitDtoCardAttributes} obj Optional instance to populate.
   * @return {module:model/AllOfCreatePaymentWithSplitDtoCardAttributes} The populated <code>AllOfCreatePaymentWithSplitDtoCardAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfCreatePaymentWithSplitDtoCardAttributes();
      CardDTO.constructFromObject(data, obj);
    }
    return obj;
  }
}
