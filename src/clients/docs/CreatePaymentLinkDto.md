# ParcelaExpressApi.CreatePaymentLinkDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Valor | 
**description** | **String** | Descrição | 
**expires_in** | **Date** | Data de vencimento | [optional] 
**payer** | [**CreatePaymentLinkPayerDto**](CreatePaymentLinkPayerDto.md) | Pagador | 
**payment_methods** | **[String]** | Métodos de pagamento | 
**pre_capture** | **Boolean** | Pré captura | [optional] 
**note** | **String** | Observação | [optional] 
**billet** | [**CreateBilletDto**](CreateBilletDto.md) | Boleto | [optional] 
**seller_id** | **String** |  | 
**metadata** | **Object** |  | [optional] 



## Enum: [PaymentMethodsEnum]


* `card` (value: `"card"`)

* `billet` (value: `"billet"`)

* `pix` (value: `"pix"`)




