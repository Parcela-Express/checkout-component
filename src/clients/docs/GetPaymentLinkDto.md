# ParcelaExpressApi.GetPaymentLinkDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**amount** | **Number** |  | 
**description** | **String** |  | 
**url** | **String** |  | 
**email** | **String** |  | 
**phone** | **String** |  | 
**token** | **String** |  | 
**payerName** | **String** |  | 
**payerDocument** | **String** |  | 
**payer** | [**GetPaymentLinkPayerDto**](GetPaymentLinkPayerDto.md) |  | 
**user** | [**GetPaymentLinkUserDto**](GetPaymentLinkUserDto.md) |  | 
**status** | **String** |  | 
**formattedStatus** | **String** |  | 
**generatedByPayer** | **Boolean** |  | 
**formattedGeneratedByPayer** | **String** |  | 
**sale** | [**GetPaymentLinkSaleDto**](GetPaymentLinkSaleDto.md) |  | 
**seller** | [**GetPaymentLinkSellerDto**](GetPaymentLinkSellerDto.md) |  | 
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
**metadata** | **Object** |  | 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `active` (value: `"active"`)
* `pendingCapture` (value: `"pending_capture"`)
* `expired` (value: `"expired"`)
* `canceled` (value: `"canceled"`)
* `paid` (value: `"paid"`)

