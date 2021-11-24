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
 * The AllOfCreatePaymentDtoCardAttributes model module.
 * @module model/AllOfCreatePaymentDtoCardAttributes
 * @version 1.0
 */
export class AllOfCreatePaymentDtoCardAttributes extends CardDTO {
  /**
   * Constructs a new <code>AllOfCreatePaymentDtoCardAttributes</code>.
   * @alias module:model/AllOfCreatePaymentDtoCardAttributes
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
   * Constructs a <code>AllOfCreatePaymentDtoCardAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfCreatePaymentDtoCardAttributes} obj Optional instance to populate.
   * @return {module:model/AllOfCreatePaymentDtoCardAttributes} The populated <code>AllOfCreatePaymentDtoCardAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfCreatePaymentDtoCardAttributes();
      CardDTO.constructFromObject(data, obj);
    }
    return obj;
  }
}