# ParcelaExpressApi.GetMerchantDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**document** | **String** |  | 
**name** | **String** |  | 
**code** | **String** |  | 
**description** | **String** |  | 
**is_active** | **Boolean** |  | [optional] 
**payment_by_link_url** | **String** |  | [optional] 
**payment_url** | **String** |  | [optional] 
**accounting_account_spread_id** | **String** |  | [optional] 
**financial_emails** | **[String]** |  | [optional] 
**pre_capture** | **Boolean** |  | [optional] 
**risk_active** | **Boolean** |  | [optional] 
**min_risk** | **Number** |  | [optional] 
**merchant_api_key** | **String** |  | [optional] 
**merchant_account** | **String** |  | [optional] 
**logo** | [**Logo**](Logo.md) |  | [optional] 
**theme** | [**Theme**](Theme.md) |  | [optional] 
**merchant_subjects** | **[String]** |  | [optional] 
**seller_subjects** | **[String]** |  | [optional] 
**reports_permissions** | [**GetMerchantReportsPermissionsDto**](GetMerchantReportsPermissionsDto.md) |  | [optional] 
**tables_permissions** | [**GetMerchantTablesPermissionsDto**](GetMerchantTablesPermissionsDto.md) |  | [optional] 
**three_ds_active** | **Boolean** |  | [optional] 
**min_three_ds** | **Number** |  | [optional] 
**three_ds_value** | **Number** |  | [optional] 
**risk_value** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 



## Enum: TypeEnum


* `base` (value: `"base"`)

* `central` (value: `"central"`)

* `others` (value: `"others"`)




