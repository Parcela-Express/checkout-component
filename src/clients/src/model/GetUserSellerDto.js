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
 * The GetUserSellerDto model module.
 * @module model/GetUserSellerDto
 * @version 1.0
 */
export class GetUserSellerDto {
  /**
   * Constructs a new <code>GetUserSellerDto</code>.
   * @alias module:model/GetUserSellerDto
   * @class
   * @param id {String} 
   * @param name {String} 
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>GetUserSellerDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUserSellerDto} obj Optional instance to populate.
   * @return {module:model/GetUserSellerDto} The populated <code>GetUserSellerDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetUserSellerDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetUserSellerDto.prototype.id = undefined;

/**
 * @member {String} name
 */
GetUserSellerDto.prototype.name = undefined;

