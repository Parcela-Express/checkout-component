# ParcelaExpressApi.FileExportRequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileExportRequest**](FileExportRequestsApi.md#createFileExportRequest) | **POST** /v1/file-exports/requests | Gerar uma requisição de exportação de arquivo
[**createFileExportRequestV2**](FileExportRequestsApi.md#createFileExportRequestV2) | **POST** /v2/file-exports/requests/seller/{sellerId} | Gerar uma requisição de exportação de arquivo
[**listFileExportRequests**](FileExportRequestsApi.md#listFileExportRequests) | **GET** /v1/file-exports/requests | Listar requisições de exportação de arquivos



## createFileExportRequest

> GetFileExportRequestDto createFileExportRequest(CreateFileExportRequestDto)

Gerar uma requisição de exportação de arquivo

Em alternativa a esta rota, utilize a v2.

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.FileExportRequestsApi();
let CreateFileExportRequestDto = new ParcelaExpressApi.CreateFileExportRequestDto(); // CreateFileExportRequestDto | 
apiInstance.createFileExportRequest(CreateFileExportRequestDto, (error, data, response) => {
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
 **CreateFileExportRequestDto** | [**CreateFileExportRequestDto**](CreateFileExportRequestDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFileExportRequestV2

> GetFileExportRequestDto createFileExportRequestV2(sellerId, CreateSellerFileExportRequestDto)

Gerar uma requisição de exportação de arquivo

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.FileExportRequestsApi();
let sellerId = "sellerId_example"; // String | 
let CreateSellerFileExportRequestDto = new ParcelaExpressApi.CreateSellerFileExportRequestDto(); // CreateSellerFileExportRequestDto | 
apiInstance.createFileExportRequestV2(sellerId, CreateSellerFileExportRequestDto, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **CreateSellerFileExportRequestDto** | [**CreateSellerFileExportRequestDto**](CreateSellerFileExportRequestDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listFileExportRequests

> PaginatedDto listFileExportRequests(limit, current_page, opts)

Listar requisições de exportação de arquivos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.FileExportRequestsApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let opts = {
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'status': ["null"], // [String] | 
  'type': ["null"], // [String] | 
  'user': "user_example", // String | 
  'sellerId': "sellerId_example", // String | 
  'sort': "'time-descending'" // String | 
};
apiInstance.listFileExportRequests(limit, current_page, opts, (error, data, response) => {
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
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **type** | [**[String]**](String.md)|  | [optional] 
 **user** | **String**|  | [optional] 
 **sellerId** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

