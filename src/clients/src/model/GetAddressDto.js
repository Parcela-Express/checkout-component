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
 * The GetAddressDto model module.
 * @module model/GetAddressDto
 * @version 1.0
 */
export class GetAddressDto {
  /**
   * Constructs a new <code>GetAddressDto</code>.
   * @alias module:model/GetAddressDto
   * @class
   * @param zipcode {String} 
   * @param street {String} 
   * @param _number {String} 
   * @param complement {String} 
   * @param district {String} 
   * @param state {String} 
   * @param city {String} 
   */
  constructor(zipcode, street, _number, complement, district, state, city) {
    this.zipcode = zipcode;
    this.street = street;
    this._number = _number;
    this.complement = complement;
    this.district = district;
    this.state = state;
    this.city = city;
  }

  /**
   * Constructs a <code>GetAddressDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressDto} obj Optional instance to populate.
   * @return {module:model/GetAddressDto} The populated <code>GetAddressDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAddressDto();
      if (data.hasOwnProperty('zipcode'))
        obj.zipcode = ApiClient.convertToType(data['zipcode'], 'String');
      if (data.hasOwnProperty('street'))
        obj.street = ApiClient.convertToType(data['street'], 'String');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'String');
      if (data.hasOwnProperty('complement'))
        obj.complement = ApiClient.convertToType(data['complement'], 'String');
      if (data.hasOwnProperty('district'))
        obj.district = ApiClient.convertToType(data['district'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} zipcode
 */
GetAddressDto.prototype.zipcode = undefined;

/**
 * @member {String} street
 */
GetAddressDto.prototype.street = undefined;

/**
 * @member {String} _number
 */
GetAddressDto.prototype._number = undefined;

/**
 * @member {String} complement
 */
GetAddressDto.prototype.complement = undefined;

/**
 * @member {String} district
 */
GetAddressDto.prototype.district = undefined;

/**
 * @member {String} state
 */
GetAddressDto.prototype.state = undefined;

/**
 * @member {String} city
 */
GetAddressDto.prototype.city = undefined;
