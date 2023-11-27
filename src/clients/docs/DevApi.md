# ParcelaExpressApi.DevApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**simulateSessionsRecurrence**](DevApi.md#simulateSessionsRecurrence) | **POST** /v1/dev/sessions/simulate | Efetuar simulação de pagamentos de recorrencia (DEV)



## simulateSessionsRecurrence

> simulateSessionsRecurrence()

Efetuar simulação de pagamentos de recorrencia (DEV)

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.DevApi();
apiInstance.simulateSessionsRecurrence((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

