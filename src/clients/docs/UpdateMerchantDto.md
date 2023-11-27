# ParcelaExpressApi.UpdateMerchantDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**code** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**is_active** | **Boolean** |  | [optional] 
**risk_active** | **Boolean** |  | [optional] 
**min_risk** | **Number** |  | [optional] 
**merchant_api_key** | **String** |  | [optional] 
**merchant_account** | **String** |  | [optional] 
**merchant_subjects** | **[String]** |  | [optional] 
**seller_subjects** | **[String]** |  | [optional] 
**logo** | [**Logo**](Logo.md) |  | [optional] 
**theme** | [**Theme**](Theme.md) |  | [optional] 
**accounting_account_spread_id** | **String** |  | [optional] 
**payment_by_link_url** | **String** |  | [optional] 
**payment_url** | **String** |  | [optional] 
**financial_emails** | **[String]** |  | [optional] 
**pre_capture** | **Boolean** |  | [optional] 
**reports_permissions** | [**UpdateMerchantReportsPermissionsDto**](UpdateMerchantReportsPermissionsDto.md) |  | [optional] 
**tables_permissions** | [**UpdateMerchantTablesPermissionsDto**](UpdateMerchantTablesPermissionsDto.md) |  | [optional] 
**three_ds_active** | **Boolean** |  | [optional] 
**min_three_ds** | **Number** |  | [optional] 
**three_ds_value** | **Number** |  | [optional] 
**risk_value** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 



## Enum: TypeEnum


* `base` (value: `"base"`)

* `central` (value: `"central"`)

* `others` (value: `"others"`)




