# ParcelaExpressApi.AccreditationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccreditation**](AccreditationApi.md#createAccreditation) | **POST** /v1/accreditations/{seller_id} | Iniciar rotina de credenciamento.



## createAccreditation

> createAccreditation(seller_id)

Iniciar rotina de credenciamento.

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.AccreditationApi();
let seller_id = "seller_id_example"; // String | 
apiInstance.createAccreditation(seller_id, (error, data, response) => {
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
 **seller_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

