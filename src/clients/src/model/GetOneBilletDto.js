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
import {GetBilletDataDto} from './GetBilletDataDto';
import {GetBilletPayerAddressDto} from './GetBilletPayerAddressDto';
import {GetOneBilletSaleDto} from './GetOneBilletSaleDto';

/**
 * The GetOneBilletDto model module.
 * @module model/GetOneBilletDto
 * @version 1.0
 */
export class GetOneBilletDto {
  /**
   * Constructs a new <code>GetOneBilletDto</code>.
   * @alias module:model/GetOneBilletDto
   * @class
   * @param id {String} 
   * @param sale {module:model/GetOneBilletSaleDto} 
   * @param url {String} 
   * @param expiresAt {String} 
   * @param barcode {String} 
   * @param status {String} 
   * @param description {String} 
   * @param email {String} 
   * @param payerName {String} 
   * @param payerEmail {String} 
   * @param payerDocument {String} 
   * @param payerAddress {module:model/GetBilletPayerAddressDto} 
   */
  constructor(id, sale, url, expiresAt, barcode, status, description, email, payerName, payerEmail, payerDocument, payerAddress) {
    this.id = id;
    this.sale = sale;
    this.url = url;
    this.expiresAt = expiresAt;
    this.barcode = barcode;
    this.status = status;
    this.description = description;
    this.email = email;
    this.payerName = payerName;
    this.payerEmail = payerEmail;
    this.payerDocument = payerDocument;
    this.payerAddress = payerAddress;
  }

  /**
   * Constructs a <code>GetOneBilletDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOneBilletDto} obj Optional instance to populate.
   * @return {module:model/GetOneBilletDto} The populated <code>GetOneBilletDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetOneBilletDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('sale'))
        obj.sale = GetOneBilletSaleDto.constructFromObject(data['sale']);
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('expires_at'))
        obj.expiresAt = ApiClient.convertToType(data['expires_at'], 'String');
      if (data.hasOwnProperty('barcode'))
        obj.barcode = ApiClient.convertToType(data['barcode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('payer_name'))
        obj.payerName = ApiClient.convertToType(data['payer_name'], 'String');
      if (data.hasOwnProperty('payer_email'))
        obj.payerEmail = ApiClient.convertToType(data['payer_email'], 'String');
      if (data.hasOwnProperty('payer_document'))
        obj.payerDocument = ApiClient.convertToType(data['payer_document'], 'String');
      if (data.hasOwnProperty('payer_address'))
        obj.payerAddress = GetBilletPayerAddressDto.constructFromObject(data['payer_address']);
      if (data.hasOwnProperty('billet_data'))
        obj.billetData = GetBilletDataDto.constructFromObject(data['billet_data']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetOneBilletDto.prototype.id = undefined;

/**
 * @member {module:model/GetOneBilletSaleDto} sale
 */
GetOneBilletDto.prototype.sale = undefined;

/**
 * @member {String} url
 */
GetOneBilletDto.prototype.url = undefined;

/**
 * @member {String} expiresAt
 */
GetOneBilletDto.prototype.expiresAt = undefined;

/**
 * @member {String} barcode
 */
GetOneBilletDto.prototype.barcode = undefined;

/**
 * @member {String} status
 */
GetOneBilletDto.prototype.status = undefined;

/**
 * @member {String} description
 */
GetOneBilletDto.prototype.description = undefined;

/**
 * @member {String} email
 */
GetOneBilletDto.prototype.email = undefined;

/**
 * @member {String} payerName
 */
GetOneBilletDto.prototype.payerName = undefined;

/**
 * @member {String} payerEmail
 */
GetOneBilletDto.prototype.payerEmail = undefined;

/**
 * @member {String} payerDocument
 */
GetOneBilletDto.prototype.payerDocument = undefined;

/**
 * @member {module:model/GetBilletPayerAddressDto} payerAddress
 */
GetOneBilletDto.prototype.payerAddress = undefined;

/**
 * @member {module:model/GetBilletDataDto} billetData
 */
GetOneBilletDto.prototype.billetData = undefined;
