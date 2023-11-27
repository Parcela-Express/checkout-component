# ParcelaExpressApi.ShippingReturnApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paginatedListUploads**](ShippingReturnApi.md#paginatedListUploads) | **GET** /v1/shipping-return | Listar envios de arquivos paginado
[**uploadReturnFile**](ShippingReturnApi.md#uploadReturnFile) | **POST** /v1/shipping-return/upload | Enviar arquivo de retorno (.ret) do Bradesco



## paginatedListUploads

> PaginatedDto paginatedListUploads(limit, current_page, opts)

Listar envios de arquivos paginado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ShippingReturnApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let opts = {
  'start_date': "start_date_example", // String | Formato: yyyy-mm-dd
  'end_date': "end_date_example" // String | Formato: yyyy-mm-dd
};
apiInstance.paginatedListUploads(limit, current_page, opts, (error, data, response) => {
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
 **start_date** | **String**| Formato: yyyy-mm-dd | [optional] 
 **end_date** | **String**| Formato: yyyy-mm-dd | [optional] 

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadReturnFile

> UploadReturnFileResponseDto uploadReturnFile(file)

Enviar arquivo de retorno (.ret) do Bradesco

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ShippingReturnApi();
let file = "/path/to/file"; // File | 
apiInstance.uploadReturnFile(file, (error, data, response) => {
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
 **file** | **File**|  | 

### Return type

[**UploadReturnFileResponseDto**](UploadReturnFileResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

