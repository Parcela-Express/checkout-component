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

/**
 * The Permission model module.
 * @module model/Permission
 * @version 1.0
 */
class Permission {
    /**
     * Constructs a new <code>Permission</code>.
     * @alias module:model/Permission
     * @param actions {Array.<module:model/Permission.ActionsEnum>} 
     * @param subject {module:model/Permission.SubjectEnum} 
     */
    constructor(actions, subject) { 
        
        Permission.initialize(this, actions, subject);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, actions, subject) { 
        obj['actions'] = actions;
        obj['subject'] = subject;
    }

    /**
     * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Permission} obj Optional instance to populate.
     * @return {module:model/Permission} The populated <code>Permission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Permission();

            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Permission.ActionsEnum>} actions
 */
Permission.prototype['actions'] = undefined;

/**
 * @member {module:model/Permission.SubjectEnum} subject
 */
Permission.prototype['subject'] = undefined;





/**
 * Allowed values for the <code>actions</code> property.
 * @enum {String}
 * @readonly
 */
Permission['ActionsEnum'] = {

    /**
     * value: "manage"
     * @const
     */
    "manage": "manage",

    /**
     * value: "create"
     * @const
     */
    "create": "create",

    /**
     * value: "read"
     * @const
     */
    "read": "read",

    /**
     * value: "update"
     * @const
     */
    "update": "update",

    /**
     * value: "delete"
     * @const
     */
    "delete": "delete"
};


/**
 * Allowed values for the <code>subject</code> property.
 * @enum {String}
 * @readonly
 */
Permission['SubjectEnum'] = {

    /**
     * value: "PageNotFound"
     * @const
     */
    "PageNotFound": "PageNotFound",

    /**
     * value: "BackofficePos"
     * @const
     */
    "BackofficePos": "BackofficePos",

    /**
     * value: "BackofficeUsers"
     * @const
     */
    "BackofficeUsers": "BackofficeUsers",

    /**
     * value: "Billet"
     * @const
     */
    "Billet": "Billet",

    /**
     * value: "Calendar"
     * @const
     */
    "Calendar": "Calendar",

    /**
     * value: "CancelSale"
     * @const
     */
    "CancelSale": "CancelSale",

    /**
     * value: "ChangeSeller"
     * @const
     */
    "ChangeSeller": "ChangeSeller",

    /**
     * value: "CostPlanDetails"
     * @const
     */
    "CostPlanDetails": "CostPlanDetails",

    /**
     * value: "CostPlans"
     * @const
     */
    "CostPlans": "CostPlans",

    /**
     * value: "CreateCostPlans"
     * @const
     */
    "CreateCostPlans": "CreateCostPlans",

    /**
     * value: "CreateSalesPlan"
     * @const
     */
    "CreateSalesPlan": "CreateSalesPlan",

    /**
     * value: "CreateSeller"
     * @const
     */
    "CreateSeller": "CreateSeller",

    /**
     * value: "Customization"
     * @const
     */
    "Customization": "Customization",

    /**
     * value: "Dashboard"
     * @const
     */
    "Dashboard": "Dashboard",

    /**
     * value: "Fees"
     * @const
     */
    "Fees": "Fees",

    /**
     * value: "Financial"
     * @const
     */
    "Financial": "Financial",

    /**
     * value: "Link"
     * @const
     */
    "Link": "Link",

    /**
     * value: "MyAccount"
     * @const
     */
    "MyAccount": "MyAccount",

    /**
     * value: "MyData"
     * @const
     */
    "MyData": "MyData",

    /**
     * value: "MyPlan"
     * @const
     */
    "MyPlan": "MyPlan",

    /**
     * value: "POS"
     * @const
     */
    "POS": "POS",

    /**
     * value: "PaymentDetails"
     * @const
     */
    "PaymentDetails": "PaymentDetails",

    /**
     * value: "PaymentsHistory"
     * @const
     */
    "PaymentsHistory": "PaymentsHistory",

    /**
     * value: "Protocols"
     * @const
     */
    "Protocols": "Protocols",

    /**
     * value: "ProtocolsCustom"
     * @const
     */
    "ProtocolsCustom": "ProtocolsCustom",

    /**
     * value: "ProtocolsHistory"
     * @const
     */
    "ProtocolsHistory": "ProtocolsHistory",

    /**
     * value: "ProtocolsManagement"
     * @const
     */
    "ProtocolsManagement": "ProtocolsManagement",

    /**
     * value: "Reports"
     * @const
     */
    "Reports": "Reports",

    /**
     * value: "SaleDetails"
     * @const
     */
    "SaleDetails": "SaleDetails",

    /**
     * value: "SalesHistory"
     * @const
     */
    "SalesHistory": "SalesHistory",

    /**
     * value: "SalesHistoryPayment"
     * @const
     */
    "SalesHistoryPayment": "SalesHistoryPayment",

    /**
     * value: "SalesPlan"
     * @const
     */
    "SalesPlan": "SalesPlan",

    /**
     * value: "SalesPlanDetails"
     * @const
     */
    "SalesPlanDetails": "SalesPlanDetails",

    /**
     * value: "Sell"
     * @const
     */
    "Sell": "Sell",

    /**
     * value: "SellerCredentials"
     * @const
     */
    "SellerCredentials": "SellerCredentials",

    /**
     * value: "Sellers"
     * @const
     */
    "Sellers": "Sellers",

    /**
     * value: "Services"
     * @const
     */
    "Services": "Services",

    /**
     * value: "Support"
     * @const
     */
    "Support": "Support",

    /**
     * value: "Users"
     * @const
     */
    "Users": "Users",

    /**
     * value: "Roles"
     * @const
     */
    "Roles": "Roles",

    /**
     * value: "UploadRetFile"
     * @const
     */
    "UploadRetFile": "UploadRetFile",

    /**
     * value: "Merchants"
     * @const
     */
    "Merchants": "Merchants",

    /**
     * value: "MerchantUsers"
     * @const
     */
    "MerchantUsers": "MerchantUsers",

    /**
     * value: "EmailsCustom"
     * @const
     */
    "EmailsCustom": "EmailsCustom",

    /**
     * value: "PaymentCheckoutTest"
     * @const
     */
    "PaymentCheckoutTest": "PaymentCheckoutTest",

    /**
     * value: "ReportCustomization"
     * @const
     */
    "ReportCustomization": "ReportCustomization",

    /**
     * value: "Responsibles"
     * @const
     */
    "Responsibles": "Responsibles",

    /**
     * value: "Goals"
     * @const
     */
    "Goals": "Goals",

    /**
     * value: "Pix"
     * @const
     */
    "Pix": "Pix",

    /**
     * value: "BillPaymentHistory"
     * @const
     */
    "BillPaymentHistory": "BillPaymentHistory",

    /**
     * value: "BillPayment"
     * @const
     */
    "BillPayment": "BillPayment"
};



export default Permission;
