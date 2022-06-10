# ParcelaExpressApi.TransactionDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**sellerId** | **String** |  | 
**transactionNumber** | **String** | Número de controle para agrupar transações da mesma venda. ex.: compra + estorno/cancelamento. | 
**amountWithoutFees** | **Number** |  | 
**amountWithFees** | **Number** |  | 
**description** | **String** |  | 
**fees** | [**[FeeTransactionDto]**](FeeTransactionDto.md) |  | 
**paymentMethod** | [**PaymentMethodTransactionDto**](PaymentMethodTransactionDto.md) |  | 
**operationType** | [**OperationEnum**](OperationEnum.md) |  | 
**currency** | [**CurrencyEnum**](CurrencyEnum.md) |  | 
**source** | [**SourceTransactionDto**](SourceTransactionDto.md) |  | 
**status** | [**StatusEnum**](StatusEnum.md) |  | 
**metadata** | [**CreateMetadataDto**](CreateMetadataDto.md) |  | 
**createdAt** | **String** |  | 
**updatedAt** | **String** |  | 
**accountingAccountId** | **String** |  | 
**merchantHasPreCapture** | **Boolean** |  | 
**preCapture** | **Boolean** |  | 
**installments** | **Number** |  | 
**createdAtTimestamp** | **Number** |  | 
**orderNumber** | **Number** |  | 
**sellerCode** | **String** |  | 
**cardBrand** | **String** |  | 
**competenceDate** | **String** |  | 
**paymentTypeId** | **String** |  | 
**paymentTypeCode** | **String** |  | 
**eventCode** | **String** |  | 
**type** | **String** |  | 
**formPayment** | **String** |  | [optional] 
**isStandalone** | **Boolean** |  | [optional] 

<a name="CardBrandEnum"></a>
## Enum: CardBrandEnum

* `visa` (value: `"visa"`)
* `elo` (value: `"elo"`)
* `mc` (value: `"mc"`)
* `amex` (value: `"amex"`)
* `hipercard` (value: `"hipercard"`)

