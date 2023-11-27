# ParcelaExpressApi.CreatePaymentLinkResponseDto

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
**payer** | [**CreatePaymentLinkPayerResponseDto**](CreatePaymentLinkPayerResponseDto.md) |  | 
**status** | **String** |  | 
**formattedStatus** | **String** |  | 
**sale** | [**CreatePaymentLinkSaleResponseDto**](CreatePaymentLinkSaleResponseDto.md) |  | 
**seller** | [**CreatePaymentLinkSellerResponseDto**](CreatePaymentLinkSellerResponseDto.md) |  | 
**createdAt** | **String** |  | 
**expiresIn** | **String** |  | 
**qrcodeUrl** | **String** |  | [optional] 
**paymentMethods** | **[String]** |  | [optional] 
**preCapture** | **Boolean** |  | 
**metadata** | **Object** |  | 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `active` (value: `"active"`)
* `pendingCapture` (value: `"pending_capture"`)
* `expired` (value: `"expired"`)
* `canceled` (value: `"canceled"`)
* `paid` (value: `"paid"`)

