# ParcelaExpressApi.OmieApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**omieControllerIncludeAccountsPayable**](OmieApi.md#omieControllerIncludeAccountsPayable) | **POST** /v1/omie/accounts-payable/include | Incluir Lotes a Pagar



## omieControllerIncludeAccountsPayable

> omieControllerIncludeAccountsPayable()

Incluir Lotes a Pagar

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.OmieApi();
apiInstance.omieControllerIncludeAccountsPayable((error, data, response) => {
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

