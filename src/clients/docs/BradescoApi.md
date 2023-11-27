# ParcelaExpressApi.BradescoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bradescoControllerCreateShipping**](BradescoApi.md#bradescoControllerCreateShipping) | **POST** /v1/bradesco/shipping | Criar uma nova remessa



## bradescoControllerCreateShipping

> bradescoControllerCreateShipping(GenerateShippingDTO)

Criar uma nova remessa

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.BradescoApi();
let GenerateShippingDTO = new ParcelaExpressApi.GenerateShippingDTO(); // GenerateShippingDTO | 
apiInstance.bradescoControllerCreateShipping(GenerateShippingDTO, (error, data, response) => {
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
 **GenerateShippingDTO** | [**GenerateShippingDTO**](GenerateShippingDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

