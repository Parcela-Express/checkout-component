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
 * The UploadMerchantLogoDto model module.
 * @module model/UploadMerchantLogoDto
 * @version 1.0
 */
export class UploadMerchantLogoDto {
  /**
   * Constructs a new <code>UploadMerchantLogoDto</code>.
   * @alias module:model/UploadMerchantLogoDto
   * @class
   * @param file {Blob} 
   */
  constructor(file) {
    this.file = file;
  }

  /**
   * Constructs a <code>UploadMerchantLogoDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadMerchantLogoDto} obj Optional instance to populate.
   * @return {module:model/UploadMerchantLogoDto} The populated <code>UploadMerchantLogoDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UploadMerchantLogoDto();
      if (data.hasOwnProperty('file'))
        obj.file = ApiClient.convertToType(data['file'], 'Blob');
    }
    return obj;
  }
}

/**
 * @member {Blob} file
 */
UploadMerchantLogoDto.prototype.file = undefined;

