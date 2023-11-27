# ParcelaExpressApi.CreateSellerDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**description** | **String** |  | 
**document** | **String** |  | 
**document_ofac** | **Boolean** |  | [optional] 
**document_onu** | **Boolean** |  | [optional] 
**document_rf** | **Boolean** |  | [optional] 
**state_registration** | **String** |  | [optional] 
**code** | **String** |  | 
**created_at** | **String** |  | [optional] 
**settlement_type** | **String** |  | 
**address** | [**CreateAddressDto**](CreateAddressDto.md) |  | 
**bank_account** | [**CreateBankAccountDto**](CreateBankAccountDto.md) |  | 
**monthly_billing** | **Number** |  | 
**covenant** | **String** |  | [optional] 
**is_split** | **Boolean** |  | [optional] 
**phone** | **String** |  | [optional] 
**secondary_phone** | **String** |  | [optional] 
**tertiary_phone** | **String** |  | [optional] 
**absorb_costs** | **[String]** |  | [optional] 
**status** | **String** |  | 
**type** | **String** |  | 
**merchant_id** | **String** |  | 
**sale_plan_id** | **String** |  | 
**pix_pos** | **Boolean** |  | [optional] 
**acquirer** | **String** |  | 
**billet_provider** | **String** |  | 
**is_assignor** | **Boolean** |  | [optional] 
**no_payment_methods** | **[String]** |  | [optional] 
**has_split_rules** | **Boolean** |  | [optional] 
**confirmation_payment_limit** | **Boolean** |  | [optional] 
**confirmation_payment_limit_days** | **Number** |  | [optional] 
**protocol_customizations** | [**ProtocolCustomizations**](ProtocolCustomizations.md) |  | [optional] 
**pix_provider** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**secondary_email** | **String** |  | [optional] 
**tertiary_email** | **String** |  | [optional] 
**responsibles** | **[String]** |  | [optional] 
**cns** | **String** |  | [optional] 
**cnae** | **String** |  | [optional] 
**assignment** | **String** |  | [optional] 
**owner_name** | **String** |  | [optional] 
**owner_document** | **String** |  | [optional] 
**owner_document_ofac** | **Boolean** |  | [optional] 
**owner_document_onu** | **Boolean** |  | [optional] 
**owner_document_pep** | **Boolean** |  | [optional] 
**owner_document_ref** | **Boolean** |  | [optional] 
**owner_birth** | **Date** |  | [optional] 
**frontier** | **Boolean** |  | [optional] 
**owner_mother_name** | **String** |  | [optional] 
**erp** | **String** |  | [optional] 
**three_ds_active** | **Boolean** |  | [optional] 
**last_semestral_invoicing** | **Number** |  | [optional] 
**min_three_ds** | **Number** |  | [optional] 
**three_ds_value** | **Number** |  | [optional] 
**risk_active** | **Boolean** |  | [optional] 
**min_risk** | **Number** |  | [optional] 
**risk_value** | **Number** |  | [optional] 
**billet_code** | **Boolean** |  | [optional] 
**card_payer_check** | **Boolean** |  | [optional] 
**card_payer_check_min_value** | **Number** |  | [optional] 
**extract_name** | **String** |  | [optional] 
**accreditation_status** | **String** |  | [optional] 
**celcoin_value** | **Number** |  | [optional] 
**celcoin_fee_type** | **String** |  | [optional] 



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





## Enum: AccreditationStatusEnum


* `active` (value: `"active"`)

* `active_and_ownership_change` (value: `"active_and_ownership_change"`)

* `cancelled` (value: `"cancelled"`)

* `inactive_by_ownership_change` (value: `"inactive_by_ownership_change"`)





## Enum: CelcoinFeeTypeEnum


* `percentage` (value: `"percentage"`)

* `real` (value: `"real"`)




