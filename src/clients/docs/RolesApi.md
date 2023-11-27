# ParcelaExpressApi.RolesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRole**](RolesApi.md#createRole) | **POST** /v1/roles | Criar um perfil de usuário
[**getRole**](RolesApi.md#getRole) | **GET** /v1/roles/{roleId} | Buscar perfil de usuário
[**listRoles**](RolesApi.md#listRoles) | **GET** /v1/roles/list | Lista perfis de usuário
[**listRolesByType**](RolesApi.md#listRolesByType) | **POST** /v1/roles/listByType | Lista perfis de usuário
[**updateRole**](RolesApi.md#updateRole) | **PATCH** /v1/roles/{roleId} | Atualizar um perfil de usuário



## createRole

> GetRoleDto createRole(CreateRoleDto)

Criar um perfil de usuário

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.RolesApi();
let CreateRoleDto = new ParcelaExpressApi.CreateRoleDto(); // CreateRoleDto | 
apiInstance.createRole(CreateRoleDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateRoleDto** | [**CreateRoleDto**](CreateRoleDto.md)|  | 

### Return type

[**GetRoleDto**](GetRoleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRole

> GetRoleDto getRole(roleId)

Buscar perfil de usuário

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.RolesApi();
let roleId = "roleId_example"; // String | 
apiInstance.getRole(roleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**|  | 

### Return type

[**GetRoleDto**](GetRoleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRoles

> [GetRoleDto] listRoles()

Lista perfis de usuário

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.RolesApi();
apiInstance.listRoles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[GetRoleDto]**](GetRoleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRolesByType

> [GetRoleDto] listRolesByType(ListByTypeDto)

Lista perfis de usuário

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.RolesApi();
let ListByTypeDto = new ParcelaExpressApi.ListByTypeDto(); // ListByTypeDto | 
apiInstance.listRolesByType(ListByTypeDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ListByTypeDto** | [**ListByTypeDto**](ListByTypeDto.md)|  | 

### Return type

[**[GetRoleDto]**](GetRoleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRole

> GetRoleDto updateRole(roleId, UpdateRoleDto)

Atualizar um perfil de usuário

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.RolesApi();
let roleId = "roleId_example"; // String | 
let UpdateRoleDto = new ParcelaExpressApi.UpdateRoleDto(); // UpdateRoleDto | 
apiInstance.updateRole(roleId, UpdateRoleDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**|  | 
 **UpdateRoleDto** | [**UpdateRoleDto**](UpdateRoleDto.md)|  | 

### Return type

[**GetRoleDto**](GetRoleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

