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

/**
 * The CreateSellerPosDto model module.
 * @module model/CreateSellerPosDto
 * @version 1.0
 */
export class CreateSellerPosDto {
  /**
   * Constructs a new <code>CreateSellerPosDto</code>.
   * @alias module:model/CreateSellerPosDto
   * @class
   * @param terminalId {String} 
   * @param acquirerId {String} 
   * @param status {module:model/CreateSellerPosDto.StatusEnum} 
   */
  constructor(terminalId, acquirerId, status) {
    this.terminalId = terminalId;
    this.acquirerId = acquirerId;
    this.status = status;
  }

  /**
   * Constructs a <code>CreateSellerPosDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSellerPosDto} obj Optional instance to populate.
   * @return {module:model/CreateSellerPosDto} The populated <code>CreateSellerPosDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateSellerPosDto();
      if (data.hasOwnProperty('terminal_id'))
        obj.terminalId = ApiClient.convertToType(data['terminal_id'], 'String');
      if (data.hasOwnProperty('acquirer_id'))
        obj.acquirerId = ApiClient.convertToType(data['acquirer_id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} terminalId
 */
CreateSellerPosDto.prototype.terminalId = undefined;

/**
 * @member {String} acquirerId
 */
CreateSellerPosDto.prototype.acquirerId = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CreateSellerPosDto.StatusEnum = {
  /**
   * value: "active"
   * @const
   */
  active: "active",

  /**
   * value: "broken"
   * @const
   */
  broken: "broken",

  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled"
};
/**
 * @member {module:model/CreateSellerPosDto.StatusEnum} status
 */
CreateSellerPosDto.prototype.status = undefined;

