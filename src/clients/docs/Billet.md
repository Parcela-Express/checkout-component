# ParcelaExpressApi.Billet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**barcode** | **String** |  | 
**expires_at** | **String** |  | 
**status** | **String** |  | 
**provider** | **String** |  | 
**url** | **String** |  | 
**email** | **String** |  | [optional] 
**sale** | [**Sale**](Sale.md) |  | [optional] 
**sale_id** | **String** |  | [optional] 
**sale_type** | **String** |  | [optional] 
**sale_acquirer_reference** | **String** |  | [optional] 
**sale_status** | **String** |  | [optional] 
**payer** | [**Payer**](Payer.md) |  | [optional] 
**payer_id** | **String** |  | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**seller_id** | **String** |  | [optional] 
**seller_name** | **String** |  | [optional] 
**seller_document** | **String** |  | [optional] 
**sale_description** | **String** |  | [optional] 
**seller_type** | **String** |  | [optional] 
**sale_created_at** | **String** |  | [optional] 
**created_at** | **String** |  | [optional] 
**created_at_time** | **Number** |  | [optional] 
**created_at_unix_time** | **Number** |  | [optional] 
**sale_original_amount** | **Number** |  | [optional] 
**payer_document** | **String** |  | [optional] 
**payer_name** | **String** |  | [optional] 
**payer_email** | **String** |  | [optional] 
**payer_address** | [**Address**](Address.md) |  | [optional] 
**metadata** | **String** |  | [optional] 
**sale_amount** | **Number** |  | [optional] 
**qrcode_url** | **String** |  | [optional] 
**payment_link_url** | **String** |  | [optional] 
**instructions** | **String** |  | [optional] 



## Enum: ProviderEnum


* `adyen` (value: `"adyen"`)

* `bradesco` (value: `"bradesco"`)

* `itau` (value: `"itau"`)




