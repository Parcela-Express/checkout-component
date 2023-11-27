# ParcelaExpressApi.GetUserDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**email** | **String** |  | 
**type** | **String** |  | 
**role** | **String** |  | 
**status** | **String** |  | 
**createdAt** | **String** |  | 
**seller** | [**GetUserSellerDto**](GetUserSellerDto.md) |  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `merchant` (value: `"merchant"`)
* `seller` (value: `"seller"`)
* `backoffice` (value: `"backoffice"`)


<a name="RoleEnum"></a>
## Enum: RoleEnum

* `operationalBasic` (value: `"operational_basic"`)
* `operationalAdvanced` (value: `"operational_advanced"`)
* `financial` (value: `"financial"`)
* `admin` (value: `"admin"`)
* `adminNotCancel` (value: `"admin_not_cancel"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `active` (value: `"active"`)
* `inactive` (value: `"inactive"`)
* `pending` (value: `"pending"`)

