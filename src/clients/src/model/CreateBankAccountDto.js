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
 * The CreateBankAccountDto model module.
 * @module model/CreateBankAccountDto
 * @version 1.0
 */
export class CreateBankAccountDto {
  /**
   * Constructs a new <code>CreateBankAccountDto</code>.
   * @alias module:model/CreateBankAccountDto
   * @class
   * @param bankCode {String} 
   * @param agencyNumber {String} 
   * @param accountNumber {String} 
   * @param typeAccount {module:model/CreateBankAccountDto.TypeAccountEnum} 
   */
  constructor(bankCode, agencyNumber, accountNumber, typeAccount) {
    this.bankCode = bankCode;
    this.agencyNumber = agencyNumber;
    this.accountNumber = accountNumber;
    this.typeAccount = typeAccount;
  }

  /**
   * Constructs a <code>CreateBankAccountDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateBankAccountDto} obj Optional instance to populate.
   * @return {module:model/CreateBankAccountDto} The populated <code>CreateBankAccountDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateBankAccountDto();
      if (data.hasOwnProperty('bank_code'))
        obj.bankCode = ApiClient.convertToType(data['bank_code'], 'String');
      if (data.hasOwnProperty('agency_number'))
        obj.agencyNumber = ApiClient.convertToType(data['agency_number'], 'String');
      if (data.hasOwnProperty('agency_digit'))
        obj.agencyDigit = ApiClient.convertToType(data['agency_digit'], 'String');
      if (data.hasOwnProperty('account_number'))
        obj.accountNumber = ApiClient.convertToType(data['account_number'], 'String');
      if (data.hasOwnProperty('account_digit'))
        obj.accountDigit = ApiClient.convertToType(data['account_digit'], 'String');
      if (data.hasOwnProperty('type_account'))
        obj.typeAccount = ApiClient.convertToType(data['type_account'], 'String');
      if (data.hasOwnProperty('pix_key'))
        obj.pixKey = ApiClient.convertToType(data['pix_key'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} bankCode
 */
CreateBankAccountDto.prototype.bankCode = undefined;

/**
 * @member {String} agencyNumber
 */
CreateBankAccountDto.prototype.agencyNumber = undefined;

/**
 * @member {String} agencyDigit
 */
CreateBankAccountDto.prototype.agencyDigit = undefined;

/**
 * @member {String} accountNumber
 */
CreateBankAccountDto.prototype.accountNumber = undefined;

/**
 * @member {String} accountDigit
 */
CreateBankAccountDto.prototype.accountDigit = undefined;

/**
 * Allowed values for the <code>typeAccount</code> property.
 * @enum {String}
 * @readonly
 */
CreateBankAccountDto.TypeAccountEnum = {
  /**
   * value: "current"
   * @const
   */
  current: "current",

  /**
   * value: "savings"
   * @const
   */
  savings: "savings"
};
/**
 * @member {module:model/CreateBankAccountDto.TypeAccountEnum} typeAccount
 */
CreateBankAccountDto.prototype.typeAccount = undefined;

/**
 * @member {String} pixKey
 */
CreateBankAccountDto.prototype.pixKey = undefined;
