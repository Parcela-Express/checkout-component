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
import CreateAddressDto from './CreateAddressDto';
import CreateBankAccountDto from './CreateBankAccountDto';
import ProtocolCustomizations from './ProtocolCustomizations';
import ReportCustomization from './ReportCustomization';
import SellerEmails from './SellerEmails';

/**
 * The EditSellerPartialDto model module.
 * @module model/EditSellerPartialDto
 * @version 1.0
 */
class EditSellerPartialDto {
    /**
     * Constructs a new <code>EditSellerPartialDto</code>.
     * @alias module:model/EditSellerPartialDto
     */
    constructor() { 
        
        EditSellerPartialDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EditSellerPartialDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditSellerPartialDto} obj Optional instance to populate.
     * @return {module:model/EditSellerPartialDto} The populated <code>EditSellerPartialDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditSellerPartialDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('state_registration')) {
                obj['state_registration'] = ApiClient.convertToType(data['state_registration'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('settlement_type')) {
                obj['settlement_type'] = ApiClient.convertToType(data['settlement_type'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], CreateAddressDto);
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], CreateBankAccountDto);
            }
            if (data.hasOwnProperty('monthly_billing')) {
                obj['monthly_billing'] = ApiClient.convertToType(data['monthly_billing'], 'Number');
            }
            if (data.hasOwnProperty('covenant')) {
                obj['covenant'] = ApiClient.convertToType(data['covenant'], 'String');
            }
            if (data.hasOwnProperty('is_split')) {
                obj['is_split'] = ApiClient.convertToType(data['is_split'], 'Boolean');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('absorb_costs')) {
                obj['absorb_costs'] = ApiClient.convertToType(data['absorb_costs'], ['String']);
            }
            if (data.hasOwnProperty('pix_pos')) {
                obj['pix_pos'] = ApiClient.convertToType(data['pix_pos'], 'Boolean');
            }
            if (data.hasOwnProperty('no_payment_methods')) {
                obj['no_payment_methods'] = ApiClient.convertToType(data['no_payment_methods'], ['String']);
            }
            if (data.hasOwnProperty('has_split_rules')) {
                obj['has_split_rules'] = ApiClient.convertToType(data['has_split_rules'], 'Boolean');
            }
            if (data.hasOwnProperty('protocol_customizations')) {
                obj['protocol_customizations'] = ApiClient.convertToType(data['protocol_customizations'], ProtocolCustomizations);
            }
            if (data.hasOwnProperty('custom_emails')) {
                obj['custom_emails'] = ApiClient.convertToType(data['custom_emails'], SellerEmails);
            }
            if (data.hasOwnProperty('report_customization')) {
                obj['report_customization'] = ApiClient.convertToType(data['report_customization'], ReportCustomization);
            }
            if (data.hasOwnProperty('responsibles')) {
                obj['responsibles'] = ApiClient.convertToType(data['responsibles'], ['String']);
            }
            if (data.hasOwnProperty('cns')) {
                obj['cns'] = ApiClient.convertToType(data['cns'], 'String');
            }
            if (data.hasOwnProperty('cnae')) {
                obj['cnae'] = ApiClient.convertToType(data['cnae'], 'String');
            }
            if (data.hasOwnProperty('assignment')) {
                obj['assignment'] = ApiClient.convertToType(data['assignment'], 'String');
            }
            if (data.hasOwnProperty('owner_name')) {
                obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');
            }
            if (data.hasOwnProperty('owner_document')) {
                obj['owner_document'] = ApiClient.convertToType(data['owner_document'], 'String');
            }
            if (data.hasOwnProperty('erp')) {
                obj['erp'] = ApiClient.convertToType(data['erp'], 'String');
            }
            if (data.hasOwnProperty('document_ofac')) {
                obj['document_ofac'] = ApiClient.convertToType(data['document_ofac'], 'Boolean');
            }
            if (data.hasOwnProperty('document_onu')) {
                obj['document_onu'] = ApiClient.convertToType(data['document_onu'], 'Boolean');
            }
            if (data.hasOwnProperty('document_rf')) {
                obj['document_rf'] = ApiClient.convertToType(data['document_rf'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('sale_plan_id')) {
                obj['sale_plan_id'] = ApiClient.convertToType(data['sale_plan_id'], 'String');
            }
            if (data.hasOwnProperty('billet_provider')) {
                obj['billet_provider'] = ApiClient.convertToType(data['billet_provider'], 'String');
            }
            if (data.hasOwnProperty('pix_provider')) {
                obj['pix_provider'] = ApiClient.convertToType(data['pix_provider'], 'String');
            }
            if (data.hasOwnProperty('owner_document_ofac')) {
                obj['owner_document_ofac'] = ApiClient.convertToType(data['owner_document_ofac'], 'Boolean');
            }
            if (data.hasOwnProperty('owner_document_onu')) {
                obj['owner_document_onu'] = ApiClient.convertToType(data['owner_document_onu'], 'Boolean');
            }
            if (data.hasOwnProperty('owner_document_pep')) {
                obj['owner_document_pep'] = ApiClient.convertToType(data['owner_document_pep'], 'Boolean');
            }
            if (data.hasOwnProperty('owner_document_ref')) {
                obj['owner_document_ref'] = ApiClient.convertToType(data['owner_document_ref'], 'Boolean');
            }
            if (data.hasOwnProperty('owner_birth')) {
                obj['owner_birth'] = ApiClient.convertToType(data['owner_birth'], 'Date');
            }
            if (data.hasOwnProperty('frontier')) {
                obj['frontier'] = ApiClient.convertToType(data['frontier'], 'Boolean');
            }
            if (data.hasOwnProperty('extract_name')) {
                obj['extract_name'] = ApiClient.convertToType(data['extract_name'], 'String');
            }
            if (data.hasOwnProperty('registered_omie')) {
                obj['registered_omie'] = ApiClient.convertToType(data['registered_omie'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Nome
 * @member {String} name
 */
EditSellerPartialDto.prototype['name'] = undefined;

/**
 * Descrição
 * @member {String} description
 */
EditSellerPartialDto.prototype['description'] = undefined;

/**
 * Documento
 * @member {String} document
 */
EditSellerPartialDto.prototype['document'] = undefined;

/**
 * Registro estadual
 * @member {String} state_registration
 */
EditSellerPartialDto.prototype['state_registration'] = undefined;

/**
 * Chave do Estabelecimento
 * @member {String} code
 */
EditSellerPartialDto.prototype['code'] = undefined;

/**
 * Tipo de liquidação
 * @member {module:model/EditSellerPartialDto.SettlementTypeEnum} settlement_type
 */
EditSellerPartialDto.prototype['settlement_type'] = undefined;

/**
 * Endereço
 * @member {module:model/CreateAddressDto} address
 */
EditSellerPartialDto.prototype['address'] = undefined;

/**
 * Conta bancária
 * @member {module:model/CreateBankAccountDto} bank_account
 */
EditSellerPartialDto.prototype['bank_account'] = undefined;

/**
 * Faturamento Mensal
 * @member {Number} monthly_billing
 */
EditSellerPartialDto.prototype['monthly_billing'] = undefined;

/**
 * Convênio
 * @member {String} covenant
 */
EditSellerPartialDto.prototype['covenant'] = undefined;

/**
 * Tem divisão de pagamento
 * @member {Boolean} is_split
 */
EditSellerPartialDto.prototype['is_split'] = undefined;

/**
 * Telefone
 * @member {String} phone
 */
EditSellerPartialDto.prototype['phone'] = undefined;

/**
 * Absorver Custos
 * @member {Array.<String>} absorb_costs
 */
EditSellerPartialDto.prototype['absorb_costs'] = undefined;

/**
 * Há PIX POS
 * @member {Boolean} pix_pos
 */
EditSellerPartialDto.prototype['pix_pos'] = undefined;

/**
 * Pagamentos não utilizados
 * @member {Array.<String>} no_payment_methods
 */
EditSellerPartialDto.prototype['no_payment_methods'] = undefined;

/**
 * Há divisão de pagamento
 * @member {Boolean} has_split_rules
 */
EditSellerPartialDto.prototype['has_split_rules'] = undefined;

/**
 * Customização de protocolos
 * @member {module:model/ProtocolCustomizations} protocol_customizations
 */
EditSellerPartialDto.prototype['protocol_customizations'] = undefined;

/**
 * Customização de emails
 * @member {module:model/SellerEmails} custom_emails
 */
EditSellerPartialDto.prototype['custom_emails'] = undefined;

/**
 * Personalização de relatórios
 * @member {module:model/ReportCustomization} report_customization
 */
EditSellerPartialDto.prototype['report_customization'] = undefined;

/**
 * Responsáveis pelo estabelecimento
 * @member {Array.<String>} responsibles
 */
EditSellerPartialDto.prototype['responsibles'] = undefined;

/**
 * Código do cartório de registro
 * @member {String} cns
 */
EditSellerPartialDto.prototype['cns'] = undefined;

/**
 * Classificação de atividades econômicas
 * @member {String} cnae
 */
EditSellerPartialDto.prototype['cnae'] = undefined;

/**
 * Atribuição do cartório
 * @member {module:model/EditSellerPartialDto.AssignmentEnum} assignment
 */
EditSellerPartialDto.prototype['assignment'] = undefined;

/**
 * Nome do proprietário
 * @member {String} owner_name
 */
EditSellerPartialDto.prototype['owner_name'] = undefined;

/**
 * Documento do proprietário
 * @member {String} owner_document
 */
EditSellerPartialDto.prototype['owner_document'] = undefined;

/**
 * Sistema de gestão utilizado
 * @member {String} erp
 */
EditSellerPartialDto.prototype['erp'] = undefined;

/**
 * @member {Boolean} document_ofac
 */
EditSellerPartialDto.prototype['document_ofac'] = undefined;

/**
 * @member {Boolean} document_onu
 */
EditSellerPartialDto.prototype['document_onu'] = undefined;

/**
 * @member {Boolean} document_rf
 */
EditSellerPartialDto.prototype['document_rf'] = undefined;

/**
 * @member {String} created_at
 */
EditSellerPartialDto.prototype['created_at'] = undefined;

/**
 * @member {module:model/EditSellerPartialDto.StatusEnum} status
 */
EditSellerPartialDto.prototype['status'] = undefined;

/**
 * @member {module:model/EditSellerPartialDto.TypeEnum} type
 */
EditSellerPartialDto.prototype['type'] = undefined;

/**
 * @member {String} merchant_id
 */
EditSellerPartialDto.prototype['merchant_id'] = undefined;

/**
 * @member {String} sale_plan_id
 */
EditSellerPartialDto.prototype['sale_plan_id'] = undefined;

/**
 * @member {module:model/EditSellerPartialDto.BilletProviderEnum} billet_provider
 */
EditSellerPartialDto.prototype['billet_provider'] = undefined;

/**
 * @member {module:model/EditSellerPartialDto.PixProviderEnum} pix_provider
 */
EditSellerPartialDto.prototype['pix_provider'] = undefined;

/**
 * @member {Boolean} owner_document_ofac
 */
EditSellerPartialDto.prototype['owner_document_ofac'] = undefined;

/**
 * @member {Boolean} owner_document_onu
 */
EditSellerPartialDto.prototype['owner_document_onu'] = undefined;

/**
 * @member {Boolean} owner_document_pep
 */
EditSellerPartialDto.prototype['owner_document_pep'] = undefined;

/**
 * @member {Boolean} owner_document_ref
 */
EditSellerPartialDto.prototype['owner_document_ref'] = undefined;

/**
 * @member {Date} owner_birth
 */
EditSellerPartialDto.prototype['owner_birth'] = undefined;

/**
 * @member {Boolean} frontier
 */
EditSellerPartialDto.prototype['frontier'] = undefined;

/**
 * @member {String} extract_name
 */
EditSellerPartialDto.prototype['extract_name'] = undefined;

/**
 * @member {Boolean} registered_omie
 */
EditSellerPartialDto.prototype['registered_omie'] = undefined;





/**
 * Allowed values for the <code>settlement_type</code> property.
 * @enum {String}
 * @readonly
 */
EditSellerPartialDto['SettlementTypeEnum'] = {

    /**
     * value: "PIX"
     * @const
     */
    "PIX": "PIX",

    /**
     * value: "TED"
     * @const
     */
    "TED": "TED"
};


/**
 * Allowed values for the <code>assignment</code> property.
 * @enum {String}
 * @readonly
 */
EditSellerPartialDto['AssignmentEnum'] = {

    /**
     * value: "legal_entity"
     * @const
     */
    "legal_entity": "legal_entity",

    /**
     * value: "civil"
     * @const
     */
    "civil": "civil",

    /**
     * value: "protest"
     * @const
     */
    "protest": "protest",

    /**
     * value: "note"
     * @const
     */
    "note": "note",

    /**
     * value: "properties"
     * @const
     */
    "properties": "properties"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
EditSellerPartialDto['StatusEnum'] = {

    /**
     * value: "activated"
     * @const
     */
    "activated": "activated",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "activation_sent"
     * @const
     */
    "activation_sent": "activation_sent"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
EditSellerPartialDto['TypeEnum'] = {

    /**
     * value: "transaction"
     * @const
     */
    "transaction": "transaction",

    /**
     * value: "registry"
     * @const
     */
    "registry": "registry",

    /**
     * value: "group"
     * @const
     */
    "group": "group",

    /**
     * value: "restricted_seller"
     * @const
     */
    "restricted_seller": "restricted_seller"
};


/**
 * Allowed values for the <code>billet_provider</code> property.
 * @enum {String}
 * @readonly
 */
EditSellerPartialDto['BilletProviderEnum'] = {

    /**
     * value: "adyen"
     * @const
     */
    "adyen": "adyen",

    /**
     * value: "bradesco"
     * @const
     */
    "bradesco": "bradesco",

    /**
     * value: "itau"
     * @const
     */
    "itau": "itau"
};


/**
 * Allowed values for the <code>pix_provider</code> property.
 * @enum {String}
 * @readonly
 */
EditSellerPartialDto['PixProviderEnum'] = {

    /**
     * value: "adyen"
     * @const
     */
    "adyen": "adyen",

    /**
     * value: "bradesco"
     * @const
     */
    "bradesco": "bradesco",

    /**
     * value: "itau"
     * @const
     */
    "itau": "itau"
};



export default EditSellerPartialDto;
