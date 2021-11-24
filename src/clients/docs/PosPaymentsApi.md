# ParcelaExpressApi.PosPaymentsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**posControllerCancelPayment**](PosPaymentsApi.md#posControllerCancelPayment) | **POST** /v1/pos/cancel_sale/{seller_id} | Cancelar uma venda via Pos
[**posControllerPaymentsRequest**](PosPaymentsApi.md#posControllerPaymentsRequest) | **POST** /v1/pos/payments/{seller_id} | Criar novo pagamento via Pos
[**posControllerV2PaymentsRequestWithSplit**](PosPaymentsApi.md#posControllerV2PaymentsRequestWithSplit) | **POST** /v2/pos/payments/{seller_id} | Criar novo pagamento via Pos

<a name="posControllerCancelPayment"></a>
# **posControllerCancelPayment**
> posControllerCancelPayment(body, sellerId)

Cancelar uma venda via Pos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PosPaymentsApi();
let body = new ParcelaExpressApi.CancelSalePos(); // CancelSalePos | 
let sellerId = "sellerId_example"; // String | 

apiInstance.posControllerCancelPayment(body, sellerId, (error, data, response) => {
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
 **body** | [**CancelSalePos**](CancelSalePos.md)|  | 
 **sellerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="posControllerPaymentsRequest"></a>
# **posControllerPaymentsRequest**
> Object posControllerPaymentsRequest(body, sellerId)

Criar novo pagamento via Pos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PosPaymentsApi();
let body = new ParcelaExpressApi.PaymentPosRequest(); // PaymentPosRequest | 
let sellerId = "sellerId_example"; // String | 

apiInstance.posControllerPaymentsRequest(body, sellerId, (error, data, response) => {
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
 **body** | [**PaymentPosRequest**](PaymentPosRequest.md)|  | 
 **sellerId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="posControllerV2PaymentsRequestWithSplit"></a>
# **posControllerV2PaymentsRequestWithSplit**
> Object posControllerV2PaymentsRequestWithSplit(body, sellerId)

Criar novo pagamento via Pos

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PosPaymentsApi();
let body = new ParcelaExpressApi.PaymentPosRequestDTOV2(); // PaymentPosRequestDTOV2 | 
let sellerId = "sellerId_example"; // String | 

apiInstance.posControllerV2PaymentsRequestWithSplit(body, sellerId, (error, data, response) => {
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
 **body** | [**PaymentPosRequestDTOV2**](PaymentPosRequestDTOV2.md)|  | 
 **sellerId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

