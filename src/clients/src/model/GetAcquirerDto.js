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
 * The GetAcquirerDto model module.
 * @module model/GetAcquirerDto
 * @version 1.0
 */
export class GetAcquirerDto {
  /**
   * Constructs a new <code>GetAcquirerDto</code>.
   * @alias module:model/GetAcquirerDto
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param code {module:model/GetAcquirerDto.CodeEnum} 
   */
  constructor(id, name, code) {
    this.id = id;
    this.name = name;
    this.code = code;
  }

  /**
   * Constructs a <code>GetAcquirerDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAcquirerDto} obj Optional instance to populate.
   * @return {module:model/GetAcquirerDto} The populated <code>GetAcquirerDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAcquirerDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetAcquirerDto.prototype.id = undefined;

/**
 * @member {String} name
 */
GetAcquirerDto.prototype.name = undefined;

/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
GetAcquirerDto.CodeEnum = {
  /**
   * value: "zoop"
   * @const
   */
  zoop: "zoop",

  /**
   * value: "adyen"
   * @const
   */
  adyen: "adyen",

  /**
   * value: "bradesco"
   * @const
   */
  bradesco: "bradesco"
};
/**
 * @member {module:model/GetAcquirerDto.CodeEnum} code
 */
GetAcquirerDto.prototype.code = undefined;

