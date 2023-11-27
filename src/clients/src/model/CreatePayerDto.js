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
import {CreateAddressDto} from './CreateAddressDto';

/**
 * The CreatePayerDto model module.
 * @module model/CreatePayerDto
 * @version 1.0
 */
export class CreatePayerDto {
  /**
   * Constructs a new <code>CreatePayerDto</code>.
   * @alias module:model/CreatePayerDto
   * @class
   * @param name {String} 
   * @param document {String} 
   */
  constructor(name, document) {
    this.name = name;
    this.document = document;
  }

  /**
   * Constructs a <code>CreatePayerDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePayerDto} obj Optional instance to populate.
   * @return {module:model/CreatePayerDto} The populated <code>CreatePayerDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePayerDto();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('document'))
        obj.document = ApiClient.convertToType(data['document'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = CreateAddressDto.constructFromObject(data['address']);
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
CreatePayerDto.prototype.name = undefined;

/**
 * @member {String} document
 */
CreatePayerDto.prototype.document = undefined;

/**
 * @member {String} email
 */
CreatePayerDto.prototype.email = undefined;

/**
 * @member {module:model/CreateAddressDto} address
 */
CreatePayerDto.prototype.address = undefined;

/**
 * @member {String} phone
 */
CreatePayerDto.prototype.phone = undefined;

