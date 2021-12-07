# ParcelaExpressApi.PaymentsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capturePayment**](PaymentsApi.md#capturePayment) | **POST** /v1/payments/sellers/{seller_id}/sales/{sale_id}/capture | Capturar pagamento
[**createPayment**](PaymentsApi.md#createPayment) | **POST** /v1/payments/sellers/{seller_id} | Criar novo pagamento
[**createPaymentWithSplit**](PaymentsApi.md#createPaymentWithSplit) | **POST** /v2/payments/sellers/{seller_id} | Criar novo pagamento online
[**createPixPayment**](PaymentsApi.md#createPixPayment) | **POST** /v1/payments/sellers/{seller_id}/pix | Criar um pagamento usando Pix
[**createPixPaymentWithSplits**](PaymentsApi.md#createPixPaymentWithSplits) | **POST** /v2/payments/sellers/{seller_id}/pix | Criar um pagamento usando Pix
[**paymentsControllerCancelPayment**](PaymentsApi.md#paymentsControllerCancelPayment) | **POST** /v1/payments/sellers/{seller_id}/sales/{sale_id}/void | Cancelar um pagamento

<a name="capturePayment"></a>
# **capturePayment**
> GetSaleDto capturePayment(body, sellerId, saleId)

Capturar pagamento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PaymentsApi();
let body = new ParcelaExpressApi.CapturePaymentDto(); // CapturePaymentDto | 
let sellerId = "sellerId_example"; // String | 
let saleId = "saleId_example"; // String | 

apiInstance.capturePayment(body, sellerId, saleId, (error, data, response) => {
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
 **body** | [**CapturePaymentDto**](CapturePaymentDto.md)|  | 
 **sellerId** | **String**|  | 
 **saleId** | **String**|  | 

### Return type

[**GetSaleDto**](GetSaleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPayment"></a>
# **createPayment**
> CreatePaymentResponseDTO createPayment(body, sellerId)

Criar novo pagamento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let body = new ParcelaExpressApi.CreatePaymentDto(); // CreatePaymentDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createPayment(body, sellerId, (error, data, response) => {
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
 **body** | [**CreatePaymentDto**](CreatePaymentDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**CreatePaymentResponseDTO**](CreatePaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPaymentWithSplit"></a>
# **createPaymentWithSplit**
> CreatePaymentResponseDTO createPaymentWithSplit(body, sellerId)

Criar novo pagamento online

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let body = new ParcelaExpressApi.CreatePaymentWithSplitDto(); // CreatePaymentWithSplitDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createPaymentWithSplit(body, sellerId, (error, data, response) => {
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
 **body** | [**CreatePaymentWithSplitDto**](CreatePaymentWithSplitDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**CreatePaymentResponseDTO**](CreatePaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPixPayment"></a>
# **createPixPayment**
> CreatePixPaymentResponseDTO createPixPayment(body, sellerId)

Criar um pagamento usando Pix

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let body = new ParcelaExpressApi.CreatePixPaymentDto(); // CreatePixPaymentDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createPixPayment(body, sellerId, (error, data, response) => {
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
 **body** | [**CreatePixPaymentDto**](CreatePixPaymentDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**CreatePixPaymentResponseDTO**](CreatePixPaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPixPaymentWithSplits"></a>
# **createPixPaymentWithSplits**
> CreatePixPaymentWithSplitResponseDTO createPixPaymentWithSplits(body, sellerId)

Criar um pagamento usando Pix

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let body = new ParcelaExpressApi.CreatePixPaymentWithSplitDto(); // CreatePixPaymentWithSplitDto | 
let sellerId = "sellerId_example"; // String | 

apiInstance.createPixPaymentWithSplits(body, sellerId, (error, data, response) => {
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
 **body** | [**CreatePixPaymentWithSplitDto**](CreatePixPaymentWithSplitDto.md)|  | 
 **sellerId** | **String**|  | 

### Return type

[**CreatePixPaymentWithSplitResponseDTO**](CreatePixPaymentWithSplitResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentsControllerCancelPayment"></a>
# **paymentsControllerCancelPayment**
> CancelPaymentResponseDTO paymentsControllerCancelPayment(body, sellerId, saleId)

Cancelar um pagamento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PaymentsApi();
let body = new ParcelaExpressApi.CancelPaymentDTO(); // CancelPaymentDTO | 
let sellerId = "sellerId_example"; // String | 
let saleId = "saleId_example"; // String | 

apiInstance.paymentsControllerCancelPayment(body, sellerId, saleId, (error, data, response) => {
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
 **body** | [**CancelPaymentDTO**](CancelPaymentDTO.md)|  | 
 **sellerId** | **String**|  | 
 **saleId** | **String**|  | 

### Return type

[**CancelPaymentResponseDTO**](CancelPaymentResponseDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

