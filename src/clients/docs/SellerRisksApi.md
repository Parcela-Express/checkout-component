# ParcelaExpressApi.SellerRisksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSellerRisk**](SellerRisksApi.md#createSellerRisk) | **POST** /v1/seller-risks | Criar um risco de estabelecimento
[**editsellerRisk**](SellerRisksApi.md#editsellerRisk) | **PATCH** /v1/seller-risks/{sellerRiskId} | Editar risco do estabelecimento
[**getSellerRisk**](SellerRisksApi.md#getSellerRisk) | **GET** /v1/seller-risks/{sellerRiskId} | Obter risco pelo ID
[**getSellerRiskBySellerId**](SellerRisksApi.md#getSellerRiskBySellerId) | **GET** /v1/seller-risks/seller/{sellerId} | Obter risco pelo sellerId



## createSellerRisk

> GetSellerRiskDto createSellerRisk(CreateSellerRiskDto)

Criar um risco de estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellerRisksApi();
let CreateSellerRiskDto = new ParcelaExpressApi.CreateSellerRiskDto(); // CreateSellerRiskDto | 
apiInstance.createSellerRisk(CreateSellerRiskDto, (error, data, response) => {
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
 **CreateSellerRiskDto** | [**CreateSellerRiskDto**](CreateSellerRiskDto.md)|  | 

### Return type

[**GetSellerRiskDto**](GetSellerRiskDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## editsellerRisk

> GetSellerRiskDto editsellerRisk(sellerRiskId, UpdateSellerRiskDto)

Editar risco do estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellerRisksApi();
let sellerRiskId = "sellerRiskId_example"; // String | 
let UpdateSellerRiskDto = new ParcelaExpressApi.UpdateSellerRiskDto(); // UpdateSellerRiskDto | 
apiInstance.editsellerRisk(sellerRiskId, UpdateSellerRiskDto, (error, data, response) => {
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
 **sellerRiskId** | **String**|  | 
 **UpdateSellerRiskDto** | [**UpdateSellerRiskDto**](UpdateSellerRiskDto.md)|  | 

### Return type

[**GetSellerRiskDto**](GetSellerRiskDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSellerRisk

> GetSellerRiskDto getSellerRisk(sellerRiskId)

Obter risco pelo ID

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellerRisksApi();
let sellerRiskId = "sellerRiskId_example"; // String | 
apiInstance.getSellerRisk(sellerRiskId, (error, data, response) => {
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
 **sellerRiskId** | **String**|  | 

### Return type

[**GetSellerRiskDto**](GetSellerRiskDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSellerRiskBySellerId

> GetSellerRiskDto getSellerRiskBySellerId(sellerId)

Obter risco pelo sellerId

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SellerRisksApi();
let sellerId = "sellerId_example"; // String | 
apiInstance.getSellerRiskBySellerId(sellerId, (error, data, response) => {
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

### Return type

[**GetSellerRiskDto**](GetSellerRiskDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

