# ParcelaExpressApi.PaymentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**code** | **String** |  | 
**fee** | **Number** |  | 
**fee_type** | **String** |  | 
**description** | **String** |  | 
**installments** | **Number** |  | 
**teto** | **Number** |  | [optional] 
**piso** | **Number** |  | [optional] 
**operation_mode** | **String** |  | 
**min_rules** | **Number** |  | [optional] 



## Enum: FeeTypeEnum


* `fixed` (value: `"fixed"`)

* `percent` (value: `"percent"`)





## Enum: OperationModeEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)

* `pix` (value: `"pix"`)

* `billet` (value: `"billet"`)

* `billet_code` (value: `"billet_code"`)

* `pix_pos` (value: `"pix_pos"`)




