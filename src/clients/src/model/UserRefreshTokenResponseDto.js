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
 * The UserRefreshTokenResponseDto model module.
 * @module model/UserRefreshTokenResponseDto
 * @version 1.0
 */
export class UserRefreshTokenResponseDto {
  /**
   * Constructs a new <code>UserRefreshTokenResponseDto</code>.
   * @alias module:model/UserRefreshTokenResponseDto
   * @class
   * @param refreshToken {String} 
   * @param idToken {String} 
   */
  constructor(refreshToken, idToken) {
    this.refreshToken = refreshToken;
    this.idToken = idToken;
  }

  /**
   * Constructs a <code>UserRefreshTokenResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRefreshTokenResponseDto} obj Optional instance to populate.
   * @return {module:model/UserRefreshTokenResponseDto} The populated <code>UserRefreshTokenResponseDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserRefreshTokenResponseDto();
      if (data.hasOwnProperty('refresh_token'))
        obj.refreshToken = ApiClient.convertToType(data['refresh_token'], 'String');
      if (data.hasOwnProperty('id_token'))
        obj.idToken = ApiClient.convertToType(data['id_token'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} refreshToken
 */
UserRefreshTokenResponseDto.prototype.refreshToken = undefined;

/**
 * @member {String} idToken
 */
UserRefreshTokenResponseDto.prototype.idToken = undefined;

