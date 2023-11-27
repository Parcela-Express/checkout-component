# ParcelaExpressApi.GetProtestLinkDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**amount** | **Number** |  | 
**fee** | **Number** |  | 
**description** | **String** |  | 
**url** | **String** |  | 
**email** | **String** |  | 
**token** | **String** |  | 
**payer** | [**GetProtestLinkPayerDto**](GetProtestLinkPayerDto.md) |  | 
**user** | [**GetProtestLinkUserDto**](GetProtestLinkUserDto.md) |  | 
**status** | **String** |  | 
**formattedStatus** | **String** |  | 
**generatedByPayer** | **Boolean** |  | 
**formattedGeneratedByPayer** | **String** |  | 
**sale** | [**GetProtestLinkSaleDto**](GetProtestLinkSaleDto.md) |  | 
**seller** | [**GetProtestLinkSellerDto**](GetProtestLinkSellerDto.md) |  | 
**createdAt** | **String** |  | 
**updatedAt** | **String** |  | 
**expiresIn** | **String** |  | 
**billetPaymentIsPermitted** | **Boolean** |  | [optional] 
**qrcodePaymentIsPermitted** | **Boolean** |  | [optional] 
**cardPaymentIsPermitted** | **Boolean** |  | [optional] 
**qrcodeUrl** | **String** |  | [optional] 
**paymentMethods** | **[String]** |  | [optional] 
**preCapture** | **Boolean** |  | 
**logo** | [**GetLogoDto**](GetLogoDto.md) |  | 
**theme** | [**GetThemeDto**](GetThemeDto.md) |  | 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `active` (value: `"active"`)
* `pendingCapture` (value: `"pending_capture"`)
* `expired` (value: `"expired"`)
* `canceled` (value: `"canceled"`)
* `paid` (value: `"paid"`)

