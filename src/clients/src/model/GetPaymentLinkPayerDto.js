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
 * The GetPaymentLinkPayerDto model module.
 * @module model/GetPaymentLinkPayerDto
 * @version 1.0
 */
export class GetPaymentLinkPayerDto {
  /**
   * Constructs a new <code>GetPaymentLinkPayerDto</code>.
   * @alias module:model/GetPaymentLinkPayerDto
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param document {String} 
   * @param email {String} 
   * @param phone {String} 
   */
  constructor(id, name, document, email, phone) {
    this.id = id;
    this.name = name;
    this.document = document;
    this.email = email;
    this.phone = phone;
  }

  /**
   * Constructs a <code>GetPaymentLinkPayerDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetPaymentLinkPayerDto} obj Optional instance to populate.
   * @return {module:model/GetPaymentLinkPayerDto} The populated <code>GetPaymentLinkPayerDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetPaymentLinkPayerDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('document'))
        obj.document = ApiClient.convertToType(data['document'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetPaymentLinkPayerDto.prototype.id = undefined;

/**
 * @member {String} name
 */
GetPaymentLinkPayerDto.prototype.name = undefined;

/**
 * @member {String} document
 */
GetPaymentLinkPayerDto.prototype.document = undefined;

/**
 * @member {String} email
 */
GetPaymentLinkPayerDto.prototype.email = undefined;

/**
 * @member {String} phone
 */
GetPaymentLinkPayerDto.prototype.phone = undefined;

