# ParcelaExpressApi.UserLoginResponseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**createdAt** | **String** |  | 
**email** | **String** |  | 
**seller** | [**GetUserLoginSellerDto**](GetUserLoginSellerDto.md) |  | [optional] 
**merchant** | [**GetMerchantDto**](GetMerchantDto.md) |  | [optional] 
**role** | **String** |  | 
**refreshToken** | **String** |  | 
**idToken** | **String** |  | 
**type** | **String** |  | 
**theme** | [**GetThemeDto**](GetThemeDto.md) |  | 
**logo** | [**GetLogoDto**](GetLogoDto.md) |  | 

<a name="RoleEnum"></a>
## Enum: RoleEnum

* `operationalBasic` (value: `"operational_basic"`)
* `operationalAdvanced` (value: `"operational_advanced"`)
* `financial` (value: `"financial"`)
* `admin` (value: `"admin"`)
* `adminNotCancel` (value: `"admin_not_cancel"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `merchant` (value: `"merchant"`)
* `seller` (value: `"seller"`)
* `backoffice` (value: `"backoffice"`)

