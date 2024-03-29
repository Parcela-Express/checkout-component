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
import {CreateCostPlanOptionsDto} from './CreateCostPlanOptionsDto';

/**
 * The CreateCostPlanDto model module.
 * @module model/CreateCostPlanDto
 * @version 1.0
 */
export class CreateCostPlanDto {
  /**
   * Constructs a new <code>CreateCostPlanDto</code>.
   * @alias module:model/CreateCostPlanDto
   * @class
   * @param name {String} 
   * @param description {String} 
   */
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  /**
   * Constructs a <code>CreateCostPlanDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCostPlanDto} obj Optional instance to populate.
   * @return {module:model/CreateCostPlanDto} The populated <code>CreateCostPlanDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateCostPlanDto();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [CreateCostPlanOptionsDto]);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
CreateCostPlanDto.prototype.name = undefined;

/**
 * @member {String} description
 */
CreateCostPlanDto.prototype.description = undefined;

/**
 * @member {Array.<module:model/CreateCostPlanOptionsDto>} options
 */
CreateCostPlanDto.prototype.options = undefined;

