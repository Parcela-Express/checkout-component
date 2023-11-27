# ParcelaExpressApi.ThemeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateMerchantTheme**](ThemeApi.md#updateMerchantTheme) | **PUT** /v1/theme | Atualizar o tema do marketplace



## updateMerchantTheme

> updateMerchantTheme(UpdateMerchantThemeDto)

Atualizar o tema do marketplace

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.ThemeApi();
let UpdateMerchantThemeDto = new ParcelaExpressApi.UpdateMerchantThemeDto(); // UpdateMerchantThemeDto | 
apiInstance.updateMerchantTheme(UpdateMerchantThemeDto, (error, data, response) => {
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
 **UpdateMerchantThemeDto** | [**UpdateMerchantThemeDto**](UpdateMerchantThemeDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

