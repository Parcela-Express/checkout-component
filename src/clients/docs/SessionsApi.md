# ParcelaExpressApi.SessionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSession**](SessionsApi.md#cancelSession) | **POST** /v1/sessions/{sellerId}/{sessionId}/cancel | Cancelar uma sessão ativa
[**listSellerSessions**](SessionsApi.md#listSellerSessions) | **GET** /v1/sessions/{sellerId} | Listar as Sessões de um seller



## cancelSession

> cancelSession(sellerId, sessionId)

Cancelar uma sessão ativa

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SessionsApi();
let sellerId = "sellerId_example"; // String | 
let sessionId = "sessionId_example"; // String | 
apiInstance.cancelSession(sellerId, sessionId, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **sessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listSellerSessions

> PaginatedDto listSellerSessions(limit, current_page, status, sellerId, opts)

Listar as Sessões de um seller

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SessionsApi();
let limit = 10; // Number | 
let current_page = 1; // Number | 
let status = "status_example"; // String | 
let sellerId = "sellerId_example"; // String | 
let opts = {
  'sort': "'time-descending'" // String | 
};
apiInstance.listSellerSessions(limit, current_page, status, sellerId, opts, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **sort** | **String**|  | [optional] [default to &#39;time-descending&#39;]

### Return type

[**PaginatedDto**](PaginatedDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

