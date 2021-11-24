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
 * The UpdateSettlementBatchDTO model module.
 * @module model/UpdateSettlementBatchDTO
 * @version 1.0
 */
export class UpdateSettlementBatchDTO {
  /**
   * Constructs a new <code>UpdateSettlementBatchDTO</code>.
   * @alias module:model/UpdateSettlementBatchDTO
   * @class
   * @param status {module:model/UpdateSettlementBatchDTO.StatusEnum} 
   */
  constructor(status) {
    this.status = status;
  }

  /**
   * Constructs a <code>UpdateSettlementBatchDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSettlementBatchDTO} obj Optional instance to populate.
   * @return {module:model/UpdateSettlementBatchDTO} The populated <code>UpdateSettlementBatchDTO</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateSettlementBatchDTO();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
UpdateSettlementBatchDTO.StatusEnum = {
  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "paid"
   * @const
   */
  paid: "paid",

  /**
   * value: "sent"
   * @const
   */
  sent: "sent",

  /**
   * value: "pending_cancel"
   * @const
   */
  pendingCancel: "pending_cancel",

  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled",

  /**
   * value: "failed"
   * @const
   */
  failed: "failed"
};
/**
 * @member {module:model/UpdateSettlementBatchDTO.StatusEnum} status
 */
UpdateSettlementBatchDTO.prototype.status = undefined;
