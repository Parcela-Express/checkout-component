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
 * The UpdateProtestLinkDto model module.
 * @module model/UpdateProtestLinkDto
 * @version 1.0
 */
export class UpdateProtestLinkDto {
  /**
   * Constructs a new <code>UpdateProtestLinkDto</code>.
   * @alias module:model/UpdateProtestLinkDto
   * @class
   * @param expiresIn {Boolean} 
   */
  constructor(expiresIn) {
    this.expiresIn = expiresIn;
  }

  /**
   * Constructs a <code>UpdateProtestLinkDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateProtestLinkDto} obj Optional instance to populate.
   * @return {module:model/UpdateProtestLinkDto} The populated <code>UpdateProtestLinkDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateProtestLinkDto();
      if (data.hasOwnProperty('expiresIn'))
        obj.expiresIn = ApiClient.convertToType(data['expiresIn'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} expiresIn
 */
UpdateProtestLinkDto.prototype.expiresIn = undefined;

/**
 * @member {String} status
 */
UpdateProtestLinkDto.prototype.status = undefined;

