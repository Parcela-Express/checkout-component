# ParcelaExpressApi.GetUserLoginSellerDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**description** | **String** |  | 
**document** | **String** |  | 
**state_registration** | **String** |  | 
**code** | **String** |  | 
**absorb_costs** | **[String]** |  | [optional] 
**settlement_type** | **String** |  | 
**acquirers** | [**[GetAcquirerDto]**](GetAcquirerDto.md) |  | [optional] 
**address** | [**GetAddressDto**](GetAddressDto.md) |  | 
**bank_account** | [**GetBankAccountDto**](GetBankAccountDto.md) |  | 
**is_split** | **Boolean** |  | 
**phone** | **String** |  | 
**status** | **String** |  | 
**type** | **String** |  | 
**merchant** | [**GetMerchantDto**](GetMerchantDto.md) |  | 
**sale_plan_id** | **String** |  | 
**pix_pos** | **Boolean** |  | 
**billet_provider** | **String** |  | 
**no_payment_methods** | **[String]** |  | [optional] 
**logo** | [**GetLogoDto**](GetLogoDto.md) |  | [optional] 
**theme** | [**GetThemeDto**](GetThemeDto.md) |  | [optional] 
**has_split_rules** | **Boolean** |  | [optional] 
**protocol_customizations** | [**ProtocolCustomizations**](ProtocolCustomizations.md) |  | [optional] 
**custom_emails** | [**SellerEmails**](SellerEmails.md) |  | [optional] 
**report_customization** | [**ReportCustomization**](ReportCustomization.md) |  | [optional] 
**billet_code** | **Boolean** |  | [optional] 



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




