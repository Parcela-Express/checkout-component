# ParcelaExpressApi.ThemeApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateMerchantTheme**](ThemeApi.md#updateMerchantTheme) | **PUT** /v1/theme | Atualizar o tema do marketplace

<a name="updateMerchantTheme"></a>
# **updateMerchantTheme**
> updateMerchantTheme(body)

Atualizar o tema do marketplace

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.ThemeApi();
let body = new ParcelaExpressApi.UpdateMerchantThemeDto(); // UpdateMerchantThemeDto | 

apiInstance.updateMerchantTheme(body, (error, data, response) => {
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
 **body** | [**UpdateMerchantThemeDto**](UpdateMerchantThemeDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

