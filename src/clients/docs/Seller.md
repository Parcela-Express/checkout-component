# ParcelaExpressApi.Seller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | 
**description** | **String** |  | 
**document** | **String** |  | 
**document_ofac** | **Boolean** |  | [optional] 
**document_onu** | **Boolean** |  | [optional] 
**document_rf** | **Boolean** |  | [optional] 
**state_registration** | **String** |  | [optional] 
**code** | **String** |  | 
**is_active** | **Boolean** |  | [optional] 
**created_at** | **String** |  | [optional] 
**updated_at** | **Date** |  | [optional] 
**settlement_type** | **String** |  | 
**address** | [**Address**](Address.md) |  | 
**bank_account** | [**BankAccount**](BankAccount.md) |  | 
**monthly_billing** | **Number** |  | 
**covenant** | **String** |  | [optional] 
**acquirers** | [**[Acquirer]**](Acquirer.md) |  | [optional] 
**is_split** | **Boolean** |  | [optional] 
**phone** | **String** |  | [optional] 
**secondary_phone** | **String** |  | [optional] 
**tertiary_phone** | **String** |  | [optional] 
**status** | **String** |  | 
**type** | **String** |  | 
**merchant** | [**Merchant**](Merchant.md) |  | 
**merchant_id** | **String** |  | [optional] 
**sale_plan** | [**SalePlan**](SalePlan.md) |  | 
**sale_plan_id** | **String** |  | [optional] 
**absorb_costs** | **[String]** |  | [optional] 
**accounting_account_settlement_id** | **String** |  | 
**pix_pos** | **Boolean** |  | [optional] 
**billet_provider** | **String** |  | 
**is_assignor** | **Boolean** |  | [optional] 
**no_payment_methods** | **[String]** |  | [optional] 
**payment_calculation_rules** | [**[PaymentCalculationRules]**](PaymentCalculationRules.md) |  | [optional] 
**logo** | [**Logo**](Logo.md) |  | [optional] 
**logo_id** | **String** |  | [optional] 
**theme** | [**Theme**](Theme.md) |  | [optional] 
**theme_id** | **String** |  | [optional] 
**has_split_rules** | **Boolean** |  | [optional] 
**pix_provider** | **String** |  | [optional] 
**confirmation_payment_limit** | **Boolean** |  | [optional] 
**confirmation_payment_limit_days** | **Number** |  | [optional] 
**protocol_customizations** | [**ProtocolCustomizations**](ProtocolCustomizations.md) |  | [optional] 
**email** | **String** |  | [optional] 
**secondary_email** | **String** |  | [optional] 
**tertiary_email** | **String** |  | [optional] 
**custom_emails** | [**SellerEmails**](SellerEmails.md) |  | [optional] 
**is_internal** | **Boolean** |  | [optional] 
**report_customization** | [**ReportCustomization**](ReportCustomization.md) |  | [optional] 
**billet_code_fee** | **Boolean** |  | [optional] 
**no_spreading_pix** | **Boolean** |  | [optional] 
**responsibles** | [**[Responsible]**](Responsible.md) |  | [optional] 
**cns** | **String** |  | [optional] 
**assignment** | **String** |  | [optional] 
**owner_name** | **String** |  | [optional] 
**owner_document** | **String** |  | [optional] 
**owner_document_ofac** | **Boolean** |  | [optional] 
**owner_document_onu** | **Boolean** |  | [optional] 
**owner_document_pep** | **Boolean** |  | [optional] 
**owner_document_ref** | **Boolean** |  | [optional] 
**owner_mother_name** | **String** |  | [optional] 
**owner_birth** | **Date** |  | [optional] 
**frontier** | **Boolean** |  | [optional] 
**cnae** | **String** |  | [optional] 
**last_semestral_invoicing** | **Number** |  | [optional] 
**temperature** | **String** |  | [optional] 
**erp** | **String** |  | [optional] 
**marketplace_name** | **String** |  | [optional] 
**risk_active** | **Boolean** |  | [optional] 
**min_risk** | **Number** |  | [optional] 
**three_ds_active** | **Boolean** |  | [optional] 
**min_three_ds** | **Number** |  | [optional] 
**three_ds_value** | **Number** |  | [optional] 
**risk_value** | **Number** |  | [optional] 
**billet_code** | **Boolean** |  | [optional] 
**celcoin_value** | **Number** |  | [optional] 
**celcoin_fee_type** | **String** |  | [optional] 
**card_payer_check** | **Boolean** |  | [optional] 
**card_payer_check_min_value** | **Number** |  | [optional] 
**extract_name** | **String** |  | [optional] 
**accreditation_status** | **String** |  | [optional] 
**registered_omie** | **Boolean** |  | [optional] 



## Enum: SettlementTypeEnum


* `PIX` (value: `"PIX"`)

* `TED` (value: `"TED"`)





## Enum: StatusEnum


* `activated` (value: `"activated"`)

* `inactive` (value: `"inactive"`)

* `pending` (value: `"pending"`)

* `activation_sent` (value: `"activation_sent"`)





## Enum: TypeEnum


* `transaction` (value: `"transaction"`)

* `registry` (value: `"registry"`)

* `group` (value: `"group"`)

* `restricted_seller` (value: `"restricted_seller"`)





## Enum: BilletProviderEnum


* `adyen` (value: `"adyen"`)

* `bradesco` (value: `"bradesco"`)

* `itau` (value: `"itau"`)





## Enum: PixProviderEnum


* `adyen` (value: `"adyen"`)

* `bradesco` (value: `"bradesco"`)

* `itau` (value: `"itau"`)





## Enum: AssignmentEnum


* `legal_entity` (value: `"legal_entity"`)

* `civil` (value: `"civil"`)

* `protest` (value: `"protest"`)

* `note` (value: `"note"`)

* `properties` (value: `"properties"`)





## Enum: TemperatureEnum


* `super_cold` (value: `"super_cold"`)

* `cold` (value: `"cold"`)

* `warm` (value: `"warm"`)

* `hot` (value: `"hot"`)

* `super_hot` (value: `"super_hot"`)





## Enum: CelcoinFeeTypeEnum


* `percentage` (value: `"percentage"`)

* `real` (value: `"real"`)





## Enum: AccreditationStatusEnum


* `active` (value: `"active"`)

* `active_and_ownership_change` (value: `"active_and_ownership_change"`)

* `cancelled` (value: `"cancelled"`)

* `inactive_by_ownership_change` (value: `"inactive_by_ownership_change"`)




