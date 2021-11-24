# ParcelaExpressApi.UsersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBackofficeUser**](UsersApi.md#createBackofficeUser) | **POST** /v1/users | Criar usuário de backoffice
[**listUsers**](UsersApi.md#listUsers) | **GET** /v1/users | Listar os usuários de todos os estabelecimentos
[**updateBackofficeUser**](UsersApi.md#updateBackofficeUser) | **PUT** /v1/users/{userId} | Atualizar um usuário de backoffice

<a name="createBackofficeUser"></a>
# **createBackofficeUser**
> GetUserDto createBackofficeUser(body)

Criar usuário de backoffice

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.UsersApi();
let body = new ParcelaExpressApi.CreateUserDto(); // CreateUserDto | 

apiInstance.createBackofficeUser(body, (error, data, response) => {
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
 **body** | [**CreateUserDto**](CreateUserDto.md)|  | 

### Return type

[**GetUserDto**](GetUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUsers"></a>
# **listUsers**
> InlineResponse200 listUsers(limit, currentPage, type, opts)

Listar os usuários de todos os estabelecimentos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.UsersApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let type = "type_example"; // String | 
let opts = { 
  'sort': "time-descending" // String | 
};
apiInstance.listUsers(limit, currentPage, type, opts, (error, data, response) => {
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
 **limit** | **Number**|  | [default to 10]
 **currentPage** | **Number**|  | [default to 1]
 **type** | **String**|  | 
 **sort** | **String**|  | [optional] [default to time-descending]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBackofficeUser"></a>
# **updateBackofficeUser**
> updateBackofficeUser(body, userId)

Atualizar um usuário de backoffice

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.UsersApi();
let body = new ParcelaExpressApi.UpdateUserDto(); // UpdateUserDto | 
let userId = "userId_example"; // String | 

apiInstance.updateBackofficeUser(body, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateUserDto**](UpdateUserDto.md)|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

