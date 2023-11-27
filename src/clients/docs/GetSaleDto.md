# ParcelaExpressApi.GetSaleDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**description** | **String** |  | 
**protocol** | **String** |  | 
**createdAt** | **String** |  | 
**updatedAt** | **String** |  | 
**originalAmount** | **Number** |  | 
**amount** | **Number** |  | 
**type** | **String** |  | 
**formattedType** | **String** |  | [optional] 
**formPayment** | **String** |  | 
**status** | **String** |  | 
**settlementDay** | **String** |  | [optional] 
**settlementStatus** | **String** |  | [optional] 
**seller** | [**GetSaleSellerDto**](GetSaleSellerDto.md) |  | 
**salePlan** | [**GetSaleSalesPlanDto**](GetSaleSalesPlanDto.md) |  | 
**user** | [**GetSaleUserDto**](GetSaleUserDto.md) |  | 
**paymentType** | [**GetSalePlanPaymentTypeDto**](GetSalePlanPaymentTypeDto.md) |  | 
**payer** | [**GetSalePayerDto**](GetSalePayerDto.md) |  | 
**billet** | [**GetBilletDto**](GetBilletDto.md) |  | 
**paymentLink** | [**GetPaymentLinkDto**](GetPaymentLinkDto.md) |  | 
**splitRules** | [**GetSplitRulesEntity**](GetSplitRulesEntity.md) |  | 
**hasSplitRules** | **Boolean** |  | [optional] 
**formattedDescription** | **String** |  | [optional] 
**installments** | **Number** |  | 
**sellerName** | **String** |  | 
**sellerDocument** | **String** |  | 
**paymentTypeCode** | **String** |  | 
**paymentTypeDescription** | **String** |  | 
**paymentTypeInstallments** | **Number** |  | 
**payerName** | **String** |  | 
**payerEmail** | **String** |  | 
**payerDocument** | **String** |  | 
**payerAddress** | [**GetSalePayerAddressDto**](GetSalePayerAddressDto.md) |  | 
**salePlanName** | **String** |  | 
**createdByUserName** | **String** |  | 
**createdByUserEmail** | **String** |  | 
**preCapture** | **Boolean** |  | 
**settlementDayCancellation** | **String** |  | [optional] 
**settlementStatusCancellation** | **String** |  | [optional] 
**paymentDay** | **String** |  | [optional] 
**fee** | **Number** |  | [optional] 
**orderNumber** | **Number** |  | 
**metadata** | **Object** |  | 
**cardNumber** | **String** |  | [optional] 
**cardBrand** | **String** |  | [optional] 
**cardHolderName** | **String** |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `boleto` (value: `"boleto"`)
* `pos` (value: `"pos"`)
* `paymentLink` (value: `"payment_link"`)
* `protestLink` (value: `"protest_link"`)
* `online` (value: `"online"`)
* `autoGeneratePaymentLink` (value: `"auto_generate_payment_link"`)
* `autoGenerateProtestLink` (value: `"auto_generate_protest_link"`)


<a name="FormPaymentEnum"></a>
## Enum: FormPaymentEnum

* `credit` (value: `"credit"`)
* `debit` (value: `"debit"`)
* `billet` (value: `"billet"`)
* `pix` (value: `"pix"`)
* `pending` (value: `"pending"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `pending` (value: `"pending"`)
* `pendingCapture` (value: `"pending_capture"`)
* `inProgressCapture` (value: `"in_progress_capture"`)
* `succeeded` (value: `"succeeded"`)
* `canceled` (value: `"canceled"`)
* `pendingCancel` (value: `"pending_cancel"`)
* `abort` (value: `"abort"`)
* `failed` (value: `"failed"`)

