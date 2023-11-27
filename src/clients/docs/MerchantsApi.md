# ParcelaExpressApi.MerchantsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMerchantSalesPlans**](MerchantsApi.md#listMerchantSalesPlans) | **GET** /v1/merchants/{merchantId}/sales-plans | Listar planos de vendas do estabelecimento principal
[**listMerchants**](MerchantsApi.md#listMerchants) | **GET** /v1/merchants | Listar estabelecimentos principais

<a name="listMerchantSalesPlans"></a>
# **listMerchantSalesPlans**
> [GetMerchantSalePlanDto] listMerchantSalesPlans(merchantId)

Listar planos de vendas do estabelecimento principal

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.MerchantsApi();
let merchantId = "merchantId_example"; // String | 

apiInstance.listMerchantSalesPlans(merchantId, (error, data, response) => {
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
 **merchantId** | **String**|  | 

### Return type

[**[GetMerchantSalePlanDto]**](GetMerchantSalePlanDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listMerchants"></a>
# **listMerchants**
> [GetMerchantDto] listMerchants()

Listar estabelecimentos principais

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.MerchantsApi();
apiInstance.listMerchants((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[GetMerchantDto]**](GetMerchantDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

