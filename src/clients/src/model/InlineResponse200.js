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
import {PaginatedDto} from './PaginatedDto';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.0
 */
export class InlineResponse200 extends PaginatedDto {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   * @extends module:model/PaginatedDto
   * @param currentPage {} 
   * @param totalPages {} 
   * @param limit {} 
   * @param start {} 
   * @param end {} 
   * @param totalItems {} 
   * @param hasMore {} 
   * @param results {} 
   * @param additionalData {} 
   */
  constructor(currentPage, totalPages, limit, start, end, totalItems, hasMore, results, additionalData) {
    super(currentPage, totalPages, limit, start, end, totalItems, hasMore, results, additionalData);
  }

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200();
      PaginatedDto.constructFromObject(data, obj);
    }
    return obj;
  }
}