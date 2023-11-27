# ParcelaExpressApi.PosApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPos**](PosApi.md#listPos) | **GET** /v1/pos | Listar as máquinas de todos os estabelecimentos
[**updateBackofficePos**](PosApi.md#updateBackofficePos) | **PATCH** /v1/pos/{posId} | Atualizar pos via backoffice

<a name="listPos"></a>
# **listPos**
> InlineResponse200 listPos(limit, currentPage, status, opts)

Listar as máquinas de todos os estabelecimentos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PosApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let status = "status_example"; // String | 
let opts = { 
  'sort': "asc" // String | 
};
apiInstance.listPos(limit, currentPage, status, opts, (error, data, response) => {
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
 **status** | **String**|  | 
 **sort** | **String**|  | [optional] [default to asc]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBackofficePos"></a>
# **updateBackofficePos**
> updateBackofficePos(body, posId)

Atualizar pos via backoffice

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PosApi();
let body = new ParcelaExpressApi.UpdateSellerPosDto(); // UpdateSellerPosDto | 
let posId = "posId_example"; // String | 

apiInstance.updateBackofficePos(body, posId, (error, data, response) => {
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
 **body** | [**UpdateSellerPosDto**](UpdateSellerPosDto.md)|  | 
 **posId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

