/**
 * Parcela Express API
 * Parcela Express API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomerDTO from './CustomerDTO';

/**
 * The CreatePixPaymentDto model module.
 * @module model/CreatePixPaymentDto
 * @version 1.0
 */
class CreatePixPaymentDto {
    /**
     * Constructs a new <code>CreatePixPaymentDto</code>.
     * @alias module:model/CreatePixPaymentDto
     * @param amount_cents {Number} Valor em centavos
     * @param description {String} Descrição
     * @param customer {module:model/CustomerDTO} Cliente
     */
    constructor(amount_cents, description, customer) { 
        
        CreatePixPaymentDto.initialize(this, amount_cents, description, customer);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount_cents, description, customer) { 
        obj['amount_cents'] = amount_cents;
        obj['description'] = description;
        obj['customer'] = customer;
    }

    /**
     * Constructs a <code>CreatePixPaymentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePixPaymentDto} obj Optional instance to populate.
     * @return {module:model/CreatePixPaymentDto} The populated <code>CreatePixPaymentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePixPaymentDto();

            if (data.hasOwnProperty('amount_cents')) {
                obj['amount_cents'] = ApiClient.convertToType(data['amount_cents'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], CustomerDTO);
            }
            if (data.hasOwnProperty('sale_id')) {
                obj['sale_id'] = ApiClient.convertToType(data['sale_id'], 'String');
            }
            if (data.hasOwnProperty('protest_link')) {
                obj['protest_link'] = ApiClient.convertToType(data['protest_link'], 'Boolean');
            }
            if (data.hasOwnProperty('amount_fee')) {
                obj['amount_fee'] = ApiClient.convertToType(data['amount_fee'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Valor em centavos
 * @member {Number} amount_cents
 */
CreatePixPaymentDto.prototype['amount_cents'] = undefined;

/**
 * Descrição
 * @member {String} description
 */
CreatePixPaymentDto.prototype['description'] = undefined;

/**
 * Cliente
 * @member {module:model/CustomerDTO} customer
 */
CreatePixPaymentDto.prototype['customer'] = undefined;

/**
 * @member {String} sale_id
 */
CreatePixPaymentDto.prototype['sale_id'] = undefined;

/**
 * @member {Boolean} protest_link
 */
CreatePixPaymentDto.prototype['protest_link'] = undefined;

/**
 * @member {Number} amount_fee
 */
CreatePixPaymentDto.prototype['amount_fee'] = undefined;






export default CreatePixPaymentDto;

