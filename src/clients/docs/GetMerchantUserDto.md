# ParcelaExpressApi.GetMerchantUserDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**email** | **String** |  | 
**type** | **String** |  | 
**merchant** | [**GetUserMerchantDto**](GetUserMerchantDto.md) |  | 
**role** | [**GetRoleDto**](GetRoleDto.md) |  | 
**status** | **String** |  | 
**created_at** | **String** |  | 



## Enum: TypeEnum


* `merchant` (value: `"merchant"`)

* `seller` (value: `"seller"`)

* `backoffice` (value: `"backoffice"`)





## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `pending` (value: `"pending"`)




