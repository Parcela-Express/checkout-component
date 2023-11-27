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
import SalesHistoryTablePermissions from './SalesHistoryTablePermissions';
import SettlementBatchSalesTable from './SettlementBatchSalesTable';

/**
 * The MerchantTablesPermissions model module.
 * @module model/MerchantTablesPermissions
 * @version 1.0
 */
class MerchantTablesPermissions {
    /**
     * Constructs a new <code>MerchantTablesPermissions</code>.
     * @alias module:model/MerchantTablesPermissions
     */
    constructor() { 
        
        MerchantTablesPermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MerchantTablesPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantTablesPermissions} obj Optional instance to populate.
     * @return {module:model/MerchantTablesPermissions} The populated <code>MerchantTablesPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantTablesPermissions();

            if (data.hasOwnProperty('sales_history')) {
                obj['sales_history'] = SalesHistoryTablePermissions.constructFromObject(data['sales_history']);
            }
            if (data.hasOwnProperty('settlement_batch_sale')) {
                obj['settlement_batch_sale'] = SettlementBatchSalesTable.constructFromObject(data['settlement_batch_sale']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SalesHistoryTablePermissions} sales_history
 */
MerchantTablesPermissions.prototype['sales_history'] = undefined;

/**
 * @member {module:model/SettlementBatchSalesTable} settlement_batch_sale
 */
MerchantTablesPermissions.prototype['settlement_batch_sale'] = undefined;






export default MerchantTablesPermissions;

