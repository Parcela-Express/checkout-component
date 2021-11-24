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
import {GetLogoDto} from './GetLogoDto';
import {GetMerchantDto} from './GetMerchantDto';
import {GetThemeDto} from './GetThemeDto';
import {GetUserLoginSellerDto} from './GetUserLoginSellerDto';

/**
 * The UserLoginResponseDto model module.
 * @module model/UserLoginResponseDto
 * @version 1.0
 */
export class UserLoginResponseDto {
  /**
   * Constructs a new <code>UserLoginResponseDto</code>.
   * @alias module:model/UserLoginResponseDto
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param createdAt {String} 
   * @param email {String} 
   * @param role {module:model/UserLoginResponseDto.RoleEnum} 
   * @param refreshToken {String} 
   * @param idToken {String} 
   * @param type {module:model/UserLoginResponseDto.TypeEnum} 
   * @param theme {module:model/GetThemeDto} 
   * @param logo {module:model/GetLogoDto} 
   */
  constructor(id, name, createdAt, email, role, refreshToken, idToken, type, theme, logo) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.email = email;
    this.role = role;
    this.refreshToken = refreshToken;
    this.idToken = idToken;
    this.type = type;
    this.theme = theme;
    this.logo = logo;
  }

  /**
   * Constructs a <code>UserLoginResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserLoginResponseDto} obj Optional instance to populate.
   * @return {module:model/UserLoginResponseDto} The populated <code>UserLoginResponseDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserLoginResponseDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('seller'))
        obj.seller = GetUserLoginSellerDto.constructFromObject(data['seller']);
      if (data.hasOwnProperty('merchant'))
        obj.merchant = GetMerchantDto.constructFromObject(data['merchant']);
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('refresh_token'))
        obj.refreshToken = ApiClient.convertToType(data['refresh_token'], 'String');
      if (data.hasOwnProperty('id_token'))
        obj.idToken = ApiClient.convertToType(data['id_token'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('theme'))
        obj.theme = GetThemeDto.constructFromObject(data['theme']);
      if (data.hasOwnProperty('logo'))
        obj.logo = GetLogoDto.constructFromObject(data['logo']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
UserLoginResponseDto.prototype.id = undefined;

/**
 * @member {String} name
 */
UserLoginResponseDto.prototype.name = undefined;

/**
 * @member {String} createdAt
 */
UserLoginResponseDto.prototype.createdAt = undefined;

/**
 * @member {String} email
 */
UserLoginResponseDto.prototype.email = undefined;

/**
 * @member {module:model/GetUserLoginSellerDto} seller
 */
UserLoginResponseDto.prototype.seller = undefined;

/**
 * @member {module:model/GetMerchantDto} merchant
 */
UserLoginResponseDto.prototype.merchant = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
UserLoginResponseDto.RoleEnum = {
  /**
   * value: "operational_basic"
   * @const
   */
  operationalBasic: "operational_basic",

  /**
   * value: "operational_advanced"
   * @const
   */
  operationalAdvanced: "operational_advanced",

  /**
   * value: "financial"
   * @const
   */
  financial: "financial",

  /**
   * value: "admin"
   * @const
   */
  admin: "admin",

  /**
   * value: "admin_not_cancel"
   * @const
   */
  adminNotCancel: "admin_not_cancel"
};
/**
 * @member {module:model/UserLoginResponseDto.RoleEnum} role
 */
UserLoginResponseDto.prototype.role = undefined;

/**
 * @member {String} refreshToken
 */
UserLoginResponseDto.prototype.refreshToken = undefined;

/**
 * @member {String} idToken
 */
UserLoginResponseDto.prototype.idToken = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
UserLoginResponseDto.TypeEnum = {
  /**
   * value: "merchant"
   * @const
   */
  merchant: "merchant",

  /**
   * value: "seller"
   * @const
   */
  seller: "seller",

  /**
   * value: "backoffice"
   * @const
   */
  backoffice: "backoffice"
};
/**
 * @member {module:model/UserLoginResponseDto.TypeEnum} type
 */
UserLoginResponseDto.prototype.type = undefined;

/**
 * @member {module:model/GetThemeDto} theme
 */
UserLoginResponseDto.prototype.theme = undefined;

/**
 * @member {module:model/GetLogoDto} logo
 */
UserLoginResponseDto.prototype.logo = undefined;

