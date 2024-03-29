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
 * The CreateExportSalesListDto model module.
 * @module model/CreateExportSalesListDto
 * @version 1.0
 */
export class CreateExportSalesListDto {
  /**
   * Constructs a new <code>CreateExportSalesListDto</code>.
   * @alias module:model/CreateExportSalesListDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateExportSalesListDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateExportSalesListDto} obj Optional instance to populate.
   * @return {module:model/CreateExportSalesListDto} The populated <code>CreateExportSalesListDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateExportSalesListDto();
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'String');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], ['String']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('original_amount'))
        obj.originalAmount = ApiClient.convertToType(data['original_amount'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], ['String']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
      if (data.hasOwnProperty('form_payment'))
        obj.formPayment = ApiClient.convertToType(data['form_payment'], ['String']);
      if (data.hasOwnProperty('extension'))
        obj.extension = ApiClient.convertToType(data['extension'], 'String');
      if (data.hasOwnProperty('seller_id'))
        obj.sellerId = ApiClient.convertToType(data['seller_id'], 'String');
    }
    return obj;
  }
}

/**
 * Formato: yyyy-mm-dd
 * @member {String} startDate
 */
CreateExportSalesListDto.prototype.startDate = undefined;

/**
 * Formato: yyyy-mm-dd
 * @member {String} endDate
 */
CreateExportSalesListDto.prototype.endDate = undefined;

/**
 * @member {String} id
 */
CreateExportSalesListDto.prototype.id = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CreateExportSalesListDto.StatusEnum = {
  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "pending_capture"
   * @const
   */
  pendingCapture: "pending_capture",

  /**
   * value: "in_progress_capture"
   * @const
   */
  inProgressCapture: "in_progress_capture",

  /**
   * value: "succeeded"
   * @const
   */
  succeeded: "succeeded",

  /**
   * value: "canceled"
   * @const
   */
  canceled: "canceled",

  /**
   * value: "pending_cancel"
   * @const
   */
  pendingCancel: "pending_cancel",

  /**
   * value: "abort"
   * @const
   */
  abort: "abort",

  /**
   * value: "failed"
   * @const
   */
  failed: "failed"
};
/**
 * @member {Array.<module:model/CreateExportSalesListDto.StatusEnum>} status
 */
CreateExportSalesListDto.prototype.status = undefined;

/**
 * @member {String} description
 */
CreateExportSalesListDto.prototype.description = undefined;

/**
 * @member {Number} amount
 */
CreateExportSalesListDto.prototype.amount = undefined;

/**
 * @member {Number} originalAmount
 */
CreateExportSalesListDto.prototype.originalAmount = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateExportSalesListDto.TypeEnum = {
  /**
   * value: "boleto"
   * @const
   */
  boleto: "boleto",

  /**
   * value: "pos"
   * @const
   */
  pos: "pos",

  /**
   * value: "payment_link"
   * @const
   */
  paymentLink: "payment_link",

  /**
   * value: "protest_link"
   * @const
   */
  protestLink: "protest_link",

  /**
   * value: "online"
   * @const
   */
  online: "online",

  /**
   * value: "auto_generate_payment_link"
   * @const
   */
  autoGeneratePaymentLink: "auto_generate_payment_link",

  /**
   * value: "auto_generate_protest_link"
   * @const
   */
  autoGenerateProtestLink: "auto_generate_protest_link"
};
/**
 * @member {Array.<module:model/CreateExportSalesListDto.TypeEnum>} type
 */
CreateExportSalesListDto.prototype.type = undefined;

/**
 * @member {String} name
 */
CreateExportSalesListDto.prototype.name = undefined;

/**
 * @member {String} user
 */
CreateExportSalesListDto.prototype.user = undefined;

/**
 * Allowed values for the <code>formPayment</code> property.
 * @enum {String}
 * @readonly
 */
CreateExportSalesListDto.FormPaymentEnum = {
  /**
   * value: "credit"
   * @const
   */
  credit: "credit",

  /**
   * value: "debit"
   * @const
   */
  debit: "debit",

  /**
   * value: "pix"
   * @const
   */
  pix: "pix",

  /**
   * value: "billet"
   * @const
   */
  billet: "billet"
};
/**
 * @member {Array.<module:model/CreateExportSalesListDto.FormPaymentEnum>} formPayment
 */
CreateExportSalesListDto.prototype.formPayment = undefined;

/**
 * Allowed values for the <code>extension</code> property.
 * @enum {String}
 * @readonly
 */
CreateExportSalesListDto.ExtensionEnum = {
  /**
   * value: "xls"
   * @const
   */
  xls: "xls",

  /**
   * value: "csv"
   * @const
   */
  csv: "csv",

  /**
   * value: "json"
   * @const
   */
  json: "json"
};
/**
 * @member {module:model/CreateExportSalesListDto.ExtensionEnum} extension
 */
CreateExportSalesListDto.prototype.extension = undefined;

/**
 * @member {String} sellerId
 */
CreateExportSalesListDto.prototype.sellerId = undefined;

