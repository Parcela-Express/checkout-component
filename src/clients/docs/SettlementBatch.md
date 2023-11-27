# ParcelaExpressApi.SettlementBatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**seller_id** | **String** |  | [optional] 
**seller_name** | **String** |  | [optional] 
**seller_document** | **String** |  | [optional] 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**merchant_id** | **String** |  | [optional] 
**status** | **String** |  | 
**settlement_day** | **Date** |  | 
**settlement_date** | **Date** |  | 
**type** | **String** |  | 
**discount_bank_account_id** | **String** |  | 
**discount_bank_account** | [**DiscountBankAccount**](DiscountBankAccount.md) |  | [optional] 
**total_spread** | **Number** |  | [optional] 
**total** | **Number** |  | 
**cnab_id** | **String** |  | [optional] 
**cnab_filename** | **String** |  | [optional] 
**is_retry** | **Boolean** |  | 
**created_at** | **String** |  | [optional] 
**updated_at** | **String** |  | [optional] 
**registered_omie** | **Boolean** |  | [optional] 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)

* `sent` (value: `"sent"`)

* `pending_cancel` (value: `"pending_cancel"`)

* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `resent` (value: `"resent"`)





## Enum: TypeEnum


* `PIX` (value: `"PIX"`)

* `TED` (value: `"TED"`)




