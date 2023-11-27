# ParcelaExpressApi.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | 
**email** | **String** |  | 
**password** | **String** |  | 
**type** | **String** |  | 
**role** | [**Role**](Role.md) |  | [optional] 
**role_id** | **String** |  | [optional] 
**status** | **String** |  | 
**id_token** | **String** |  | [optional] 
**refresh_token** | **String** |  | [optional] 
**created_at** | **String** |  | [optional] 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**merchant_id** | **String** |  | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**seller_id** | **String** |  | [optional] 
**logo** | [**Logo**](Logo.md) |  | [optional] 
**logo_id** | **String** |  | [optional] 
**theme** | [**Theme**](Theme.md) |  | [optional] 
**theme_id** | **String** |  | [optional] 
**subjects** | **[String]** |  | [optional] 



## Enum: TypeEnum


* `merchant` (value: `"merchant"`)

* `seller` (value: `"seller"`)

* `backoffice` (value: `"backoffice"`)





## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `pending` (value: `"pending"`)




