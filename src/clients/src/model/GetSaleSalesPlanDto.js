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
 * The GetSaleSalesPlanDto model module.
 * @module model/GetSaleSalesPlanDto
 * @version 1.0
 */
export class GetSaleSalesPlanDto {
  /**
   * Constructs a new <code>GetSaleSalesPlanDto</code>.
   * @alias module:model/GetSaleSalesPlanDto
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param description {String} 
   */
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  /**
   * Constructs a <code>GetSaleSalesPlanDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSaleSalesPlanDto} obj Optional instance to populate.
   * @return {module:model/GetSaleSalesPlanDto} The populated <code>GetSaleSalesPlanDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSaleSalesPlanDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetSaleSalesPlanDto.prototype.id = undefined;

/**
 * @member {String} name
 */
GetSaleSalesPlanDto.prototype.name = undefined;

/**
 * @member {String} description
 */
GetSaleSalesPlanDto.prototype.description = undefined;

