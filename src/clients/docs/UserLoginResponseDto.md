# ParcelaExpressApi.UserLoginResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**created_at** | **String** |  | 
**email** | **String** |  | 
**seller** | [**GetUserLoginSellerDto**](GetUserLoginSellerDto.md) |  | [optional] 
**merchant** | [**GetMerchantDto**](GetMerchantDto.md) |  | [optional] 
**role** | [**Role**](Role.md) |  | 
**refresh_token** | **String** |  | 
**id_token** | **String** |  | 
**type** | **String** |  | 
**theme** | [**GetThemeDto**](GetThemeDto.md) |  | 
**logo** | [**GetLogoDto**](GetLogoDto.md) |  | 



## Enum: TypeEnum


* `merchant` (value: `"merchant"`)

* `seller` (value: `"seller"`)

* `backoffice` (value: `"backoffice"`)




