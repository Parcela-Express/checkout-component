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
 * The CreateUserDto model module.
 * @module model/CreateUserDto
 * @version 1.0
 */
export class CreateUserDto {
  /**
   * Constructs a new <code>CreateUserDto</code>.
   * @alias module:model/CreateUserDto
   * @class
   * @param name {String} 
   * @param password {String} 
   * @param email {String} 
   * @param role {module:model/CreateUserDto.RoleEnum} 
   */
  constructor(name, password, email, role) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = role;
  }

  /**
   * Constructs a <code>CreateUserDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserDto} obj Optional instance to populate.
   * @return {module:model/CreateUserDto} The populated <code>CreateUserDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateUserDto();
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
CreateUserDto.prototype.name = undefined;

/**
 * @member {String} password
 */
CreateUserDto.prototype.password = undefined;

/**
 * @member {String} email
 */
CreateUserDto.prototype.email = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
CreateUserDto.RoleEnum = {
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
 * @member {module:model/CreateUserDto.RoleEnum} role
 */
CreateUserDto.prototype.role = undefined;

