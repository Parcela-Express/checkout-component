# ParcelaExpressApi.GetProtocolsQueryDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**seller_id** | **String** |  | 
**limit** | **Number** |  | [default to 10]
**current_page** | **Number** |  | [default to 1]
**number** | **Number** |  | [optional] 
**status** | **[String]** |  | [optional] 
**status_date_start** | **String** |  | [optional] 
**status_date_end** | **String** |  | [optional] 
**creation_date_start** | **String** |  | [optional] 
**creation_date_end** | **String** |  | [optional] 
**alert_date_start** | **String** |  | [optional] 
**alert_date_end** | **String** |  | [optional] 
**due_date_start** | **String** |  | [optional] 
**due_date_end** | **String** |  | [optional] 



## Enum: [StatusEnum]


* `pending` (value: `"pending"`)

* `alert` (value: `"alert"`)

* `paid` (value: `"paid"`)

* `overdued` (value: `"overdued"`)

* `canceled` (value: `"canceled"`)




