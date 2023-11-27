# ParcelaExpressApi.PosPaymentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**posControllerCancelPayment**](PosPaymentsApi.md#posControllerCancelPayment) | **POST** /v1/pos/cancel_sale/{seller_id} | Cancelar uma venda via Pos
[**posControllerPaymentsRequest**](PosPaymentsApi.md#posControllerPaymentsRequest) | **POST** /v1/pos/payments/{seller_id} | Criar novo pagamento via Pos
[**posControllerV2PaymentsRequestWithSplit**](PosPaymentsApi.md#posControllerV2PaymentsRequestWithSplit) | **POST** /v2/pos/payments/{seller_id} | Criar novo pagamento via Pos



## posControllerCancelPayment

> posControllerCancelPayment(seller_id, CancelSalePos)

Cancelar uma venda via Pos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PosPaymentsApi();
let seller_id = "seller_id_example"; // String | 
let CancelSalePos = new ParcelaExpressApi.CancelSalePos(); // CancelSalePos | 
apiInstance.posControllerCancelPayment(seller_id, CancelSalePos, (error, data, response) => {
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
 **CancelSalePos** | [**CancelSalePos**](CancelSalePos.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## posControllerPaymentsRequest

> Object posControllerPaymentsRequest(seller_id, PaymentPosRequest)

Criar novo pagamento via Pos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PosPaymentsApi();
let seller_id = "seller_id_example"; // String | 
let PaymentPosRequest = new ParcelaExpressApi.PaymentPosRequest(); // PaymentPosRequest | 
apiInstance.posControllerPaymentsRequest(seller_id, PaymentPosRequest, (error, data, response) => {
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
 **seller_id** | **String**|  | 
 **PaymentPosRequest** | [**PaymentPosRequest**](PaymentPosRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## posControllerV2PaymentsRequestWithSplit

> Object posControllerV2PaymentsRequestWithSplit(seller_id, PaymentPosRequestDTOV2)

Criar novo pagamento via Pos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PosPaymentsApi();
let seller_id = "seller_id_example"; // String | 
let PaymentPosRequestDTOV2 = new ParcelaExpressApi.PaymentPosRequestDTOV2(); // PaymentPosRequestDTOV2 | 
apiInstance.posControllerV2PaymentsRequestWithSplit(seller_id, PaymentPosRequestDTOV2, (error, data, response) => {
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
 **seller_id** | **String**|  | 
 **PaymentPosRequestDTOV2** | [**PaymentPosRequestDTOV2**](PaymentPosRequestDTOV2.md)|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

