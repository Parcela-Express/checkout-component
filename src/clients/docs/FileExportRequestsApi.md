# ParcelaExpressApi.FileExportRequestsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileExportRequest**](FileExportRequestsApi.md#createFileExportRequest) | **POST** /v1/file-exports/requests | Gerar uma requisição de exportação de arquivo
[**listFileExportRequests**](FileExportRequestsApi.md#listFileExportRequests) | **GET** /v1/file-exports/requests | Listar requisições de exportação de arquivos

<a name="createFileExportRequest"></a>
# **createFileExportRequest**
> GetFileExportRequestDto createFileExportRequest(body)

Gerar uma requisição de exportação de arquivo

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.FileExportRequestsApi();
let body = new ParcelaExpressApi.CreateFileExportRequestDto(); // CreateFileExportRequestDto | 

apiInstance.createFileExportRequest(body, (error, data, response) => {
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
 **body** | [**CreateFileExportRequestDto**](CreateFileExportRequestDto.md)|  | 

### Return type

[**GetFileExportRequestDto**](GetFileExportRequestDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFileExportRequests"></a>
# **listFileExportRequests**
> InlineResponse200 listFileExportRequests(limit, currentPage, opts)

Listar requisições de exportação de arquivos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.FileExportRequestsApi();
let limit = 10; // Number | 
let currentPage = 1; // Number | 
let opts = { 
  'startDate': "startDate_example", // String | Formato: yyyy-mm-dd
  'endDate': "endDate_example", // String | Formato: yyyy-mm-dd
  'status': ["status_example"], // [String] | 
  'user': "user_example", // String | 
  'sellerId': "sellerId_example", // String | 
  'sort': "time-descending" // String | 
};
apiInstance.listFileExportRequests(limit, currentPage, opts, (error, data, response) => {
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
 **startDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **endDate** | **String**| Formato: yyyy-mm-dd | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **user** | **String**|  | [optional] 
 **sellerId** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] [default to time-descending]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

