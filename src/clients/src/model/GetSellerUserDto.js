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
import {GetUserSellerDto} from './GetUserSellerDto';

/**
 * The GetSellerUserDto model module.
 * @module model/GetSellerUserDto
 * @version 1.0
 */
export class GetSellerUserDto {
  /**
   * Constructs a new <code>GetSellerUserDto</code>.
   * @alias module:model/GetSellerUserDto
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param email {String} 
   * @param type {module:model/GetSellerUserDto.TypeEnum} 
   * @param role {module:model/GetSellerUserDto.RoleEnum} 
   * @param status {module:model/GetSellerUserDto.StatusEnum} 
   * @param createdAt {String} 
   * @param seller {module:model/GetUserSellerDto} 
   */
  constructor(id, name, email, type, role, status, createdAt, seller) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.type = type;
    this.role = role;
    this.status = status;
    this.createdAt = createdAt;
    this.seller = seller;
  }

  /**
   * Constructs a <code>GetSellerUserDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSellerUserDto} obj Optional instance to populate.
   * @return {module:model/GetSellerUserDto} The populated <code>GetSellerUserDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetSellerUserDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('seller'))
        obj.seller = GetUserSellerDto.constructFromObject(data['seller']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetSellerUserDto.prototype.id = undefined;

/**
 * @member {String} name
 */
GetSellerUserDto.prototype.name = undefined;

/**
 * @member {String} email
 */
GetSellerUserDto.prototype.email = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GetSellerUserDto.TypeEnum = {
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
 * @member {module:model/GetSellerUserDto.TypeEnum} type
 */
GetSellerUserDto.prototype.type = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
GetSellerUserDto.RoleEnum = {
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
 * @member {module:model/GetSellerUserDto.RoleEnum} role
 */
GetSellerUserDto.prototype.role = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
GetSellerUserDto.StatusEnum = {
  /**
   * value: "active"
   * @const
   */
  active: "active",

  /**
   * value: "inactive"
   * @const
   */
  inactive: "inactive",

  /**
   * value: "pending"
   * @const
   */
  pending: "pending"
};
/**
 * @member {module:model/GetSellerUserDto.StatusEnum} status
 */
GetSellerUserDto.prototype.status = undefined;

/**
 * @member {String} createdAt
 */
GetSellerUserDto.prototype.createdAt = undefined;

/**
 * @member {module:model/GetUserSellerDto} seller
 */
GetSellerUserDto.prototype.seller = undefined;

