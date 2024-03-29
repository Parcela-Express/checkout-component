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
 * The GetSellerPosAcquirerDto model module.
 * @module model/GetSellerPosAcquirerDto
 * @version 1.0
 */
export class GetSellerPosAcquirerDto {
  /**
   * Constructs a new <code>GetSellerPosAcquirerDto</code>.
   * @alias module:model/GetSellerPosAcquirerDto
   * @class
   * @param name {String} 
   * @param code {String} 
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Constructs a <code>GetSellerPosAcquirerDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSellerPosAcquirerDto} obj Optional instance to populate.
   * @return {module:model/GetSellerPosAcquirerDto} The populated <code>GetSellerPosAcquirerDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSellerPosAcquirerDto();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
GetSellerPosAcquirerDto.prototype.name = undefined;

/**
 * @member {String} code
 */
GetSellerPosAcquirerDto.prototype.code = undefined;

