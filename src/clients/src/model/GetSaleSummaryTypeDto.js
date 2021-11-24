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
 * The GetSaleSummaryTypeDto model module.
 * @module model/GetSaleSummaryTypeDto
 * @version 1.0
 */
export class GetSaleSummaryTypeDto {
  /**
   * Constructs a new <code>GetSaleSummaryTypeDto</code>.
   * @alias module:model/GetSaleSummaryTypeDto
   * @class
   * @param typeSale {String} 
   * @param typeName {String} 
   * @param financialVolume {Number} 
   * @param grossVolume {Number} 
   * @param numberSales {Number} 
   * @param average {Number} 
   * @param percentage {Number} 
   */
  constructor(typeSale, typeName, financialVolume, grossVolume, numberSales, average, percentage) {
    this.typeSale = typeSale;
    this.typeName = typeName;
    this.financialVolume = financialVolume;
    this.grossVolume = grossVolume;
    this.numberSales = numberSales;
    this.average = average;
    this.percentage = percentage;
  }

  /**
   * Constructs a <code>GetSaleSummaryTypeDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSaleSummaryTypeDto} obj Optional instance to populate.
   * @return {module:model/GetSaleSummaryTypeDto} The populated <code>GetSaleSummaryTypeDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSaleSummaryTypeDto();
      if (data.hasOwnProperty('type_sale'))
        obj.typeSale = ApiClient.convertToType(data['type_sale'], 'String');
      if (data.hasOwnProperty('type_name'))
        obj.typeName = ApiClient.convertToType(data['type_name'], 'String');
      if (data.hasOwnProperty('financial_volume'))
        obj.financialVolume = ApiClient.convertToType(data['financial_volume'], 'Number');
      if (data.hasOwnProperty('gross_volume'))
        obj.grossVolume = ApiClient.convertToType(data['gross_volume'], 'Number');
      if (data.hasOwnProperty('number_sales'))
        obj.numberSales = ApiClient.convertToType(data['number_sales'], 'Number');
      if (data.hasOwnProperty('average'))
        obj.average = ApiClient.convertToType(data['average'], 'Number');
      if (data.hasOwnProperty('percentage'))
        obj.percentage = ApiClient.convertToType(data['percentage'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} typeSale
 */
GetSaleSummaryTypeDto.prototype.typeSale = undefined;

/**
 * @member {String} typeName
 */
GetSaleSummaryTypeDto.prototype.typeName = undefined;

/**
 * @member {Number} financialVolume
 */
GetSaleSummaryTypeDto.prototype.financialVolume = undefined;

/**
 * @member {Number} grossVolume
 */
GetSaleSummaryTypeDto.prototype.grossVolume = undefined;

/**
 * @member {Number} numberSales
 */
GetSaleSummaryTypeDto.prototype.numberSales = undefined;

/**
 * @member {Number} average
 */
GetSaleSummaryTypeDto.prototype.average = undefined;

/**
 * @member {Number} percentage
 */
GetSaleSummaryTypeDto.prototype.percentage = undefined;
