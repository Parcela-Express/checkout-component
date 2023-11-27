# ParcelaExpressApi.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBackofficeUser**](UsersApi.md#createBackofficeUser) | **POST** /v1/users | Criar usuário de backoffice
[**listUsers**](UsersApi.md#listUsers) | **GET** /v1/users | Listar os usuários de todos os estabelecimentos
[**updateBackofficeUser**](UsersApi.md#updateBackofficeUser) | **PUT** /v1/users/{userId} | Atualizar um usuário de backoffice



## createBackofficeUser

> GetUserDto createBackofficeUser(CreateUserDto)

Criar usuário de backoffice

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.UsersApi();
let CreateUserDto = new ParcelaExpressApi.CreateUserDto(); // CreateUserDto | 
apiInstance.createBackofficeUser(CreateUserDto, (error, data, response) => {
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
 **CreateUserDto** | [**CreateUserDto**](CreateUserDto.md)|  | 

### Return type

[**GetUserDto**](GetUserDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listUsers

> PaginatedDto listUsers(limit, current_page, type, opts)

Listar os usuários de todos os estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.UsersApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let type = "type_example"; // String | 
let opts = {
  'sort': "'time-descending'" // String | 
};
apiInstance.listUsers(limit, current_page, type, opts, (error, data, response) => {
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
 **current_page** | **Number**|  | [default to 1]
 **type** | **String**|  | 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBackofficeUser

> updateBackofficeUser(userId, UpdateUserDto)

Atualizar um usuário de backoffice

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.UsersApi();
let userId = "userId_example"; // String | 
let UpdateUserDto = new ParcelaExpressApi.UpdateUserDto(); // UpdateUserDto | 
apiInstance.updateBackofficeUser(userId, UpdateUserDto, (error, data, response) => {
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
 **userId** | **String**|  | 
 **UpdateUserDto** | [**UpdateUserDto**](UpdateUserDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

