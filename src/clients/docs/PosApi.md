# ParcelaExpressApi.PosApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPos**](PosApi.md#listPos) | **GET** /v1/pos | Listar as máquinas de todos os estabelecimentos
[**updateBackofficePos**](PosApi.md#updateBackofficePos) | **PATCH** /v1/pos/{posId} | Atualizar pos via backoffice



## listPos

> PaginatedDto listPos(limit, current_page, status, opts)

Listar as máquinas de todos os estabelecimentos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PosApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let status = "status_example"; // String | 
let opts = {
  'sort': "'asc'" // String | 
};
apiInstance.listPos(limit, current_page, status, opts, (error, data, response) => {
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
 **status** | **String**|  | 
 **sort** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBackofficePos

> updateBackofficePos(posId, UpdateSellerPosDto)

Atualizar pos via backoffice

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PosApi();
let posId = "posId_example"; // String | 
let UpdateSellerPosDto = new ParcelaExpressApi.UpdateSellerPosDto(); // UpdateSellerPosDto | 
apiInstance.updateBackofficePos(posId, UpdateSellerPosDto, (error, data, response) => {
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
 **posId** | **String**|  | 
 **UpdateSellerPosDto** | [**UpdateSellerPosDto**](UpdateSellerPosDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

