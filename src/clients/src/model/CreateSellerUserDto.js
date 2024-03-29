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
 * The CreateSellerUserDto model module.
 * @module model/CreateSellerUserDto
 * @version 1.0
 */
export class CreateSellerUserDto {
  /**
   * Constructs a new <code>CreateSellerUserDto</code>.
   * @alias module:model/CreateSellerUserDto
   * @class
   * @param name {String} 
   * @param password {String} 
   * @param email {String} 
   * @param role {module:model/CreateSellerUserDto.RoleEnum} 
   */
  constructor(name, password, email, role) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = role;
  }

  /**
   * Constructs a <code>CreateSellerUserDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSellerUserDto} obj Optional instance to populate.
   * @return {module:model/CreateSellerUserDto} The populated <code>CreateSellerUserDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateSellerUserDto();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
CreateSellerUserDto.prototype.name = undefined;

/**
 * @member {String} password
 */
CreateSellerUserDto.prototype.password = undefined;

/**
 * @member {String} email
 */
CreateSellerUserDto.prototype.email = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
CreateSellerUserDto.RoleEnum = {
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
 * @member {module:model/CreateSellerUserDto.RoleEnum} role
 */
CreateSellerUserDto.prototype.role = undefined;

