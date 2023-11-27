# ParcelaExpressApi.PaymentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capturePayment**](PaymentsApi.md#capturePayment) | **POST** /v1/payments/sellers/{seller_id}/sales/{sale_id}/capture | Capturar pagamento
[**createPayment**](PaymentsApi.md#createPayment) | **POST** /v1/payments/sellers/{seller_id} | Criar novo pagamento
[**createPaymentV3**](PaymentsApi.md#createPaymentV3) | **POST** /v3/payments/sellers/{seller_id} | Criar novo pagamento
[**createPaymentWithSplit**](PaymentsApi.md#createPaymentWithSplit) | **POST** /v2/payments/sellers/{seller_id} | Criar novo pagamento online
[**createPaymentWithSplitInternal**](PaymentsApi.md#createPaymentWithSplitInternal) | **POST** /v2/payments/sellers/{seller_id}/internal | Criar novo pagamento online
[**createPixPayment**](PaymentsApi.md#createPixPayment) | **POST** /v1/payments/sellers/{seller_id}/pix | Criar um pagamento usando Pix
[**createPixPaymentInternalWithSplits**](PaymentsApi.md#createPixPaymentInternalWithSplits) | **POST** /v2/payments/sellers/{seller_id}/pix/internal | Criar um pagamento usando Pix
[**createPixPaymentWithSplits**](PaymentsApi.md#createPixPaymentWithSplits) | **POST** /v2/payments/sellers/{seller_id}/pix | Criar um pagamento usando Pix
[**paymentDetails**](PaymentsApi.md#paymentDetails) | **POST** /v1/payments/sellers/{seller_id}/details/sale/{sale_id} | Verificar detalhes de pagamento
[**paymentsControllerCancelPayment**](PaymentsApi.md#paymentsControllerCancelPayment) | **POST** /v1/payments/sellers/{seller_id}/sales/{sale_id}/void | Cancelar um pagamento



## capturePayment

> GetSaleDto capturePayment(seller_id, sale_id, CapturePaymentDto)

Capturar pagamento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let sale_id = "sale_id_example"; // String | 
let CapturePaymentDto = new ParcelaExpressApi.CapturePaymentDto(); // CapturePaymentDto | 
apiInstance.capturePayment(seller_id, sale_id, CapturePaymentDto, (error, data, response) => {
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
 **sale_id** | **String**|  | 
 **CapturePaymentDto** | [**CapturePaymentDto**](CapturePaymentDto.md)|  | 

### Return type

[**GetSaleDto**](GetSaleDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPayment

> CreatePaymentResponseDTO createPayment(seller_id, CreatePaymentDto)

Criar novo pagamento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let CreatePaymentDto = new ParcelaExpressApi.CreatePaymentDto(); // CreatePaymentDto | 
apiInstance.createPayment(seller_id, CreatePaymentDto, (error, data, response) => {
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
 **CreatePaymentDto** | [**CreatePaymentDto**](CreatePaymentDto.md)|  | 

### Return type

[**CreatePaymentResponseDTO**](CreatePaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentV3

> CreatePaymentResponseDTO createPaymentV3(seller_id, CreatePaymentV3Dto)

Criar novo pagamento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let CreatePaymentV3Dto = new ParcelaExpressApi.CreatePaymentV3Dto(); // CreatePaymentV3Dto | 
apiInstance.createPaymentV3(seller_id, CreatePaymentV3Dto, (error, data, response) => {
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
 **CreatePaymentV3Dto** | [**CreatePaymentV3Dto**](CreatePaymentV3Dto.md)|  | 

### Return type

[**CreatePaymentResponseDTO**](CreatePaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentWithSplit

> CreatePaymentResponseDTO createPaymentWithSplit(seller_id, CreatePaymentWithSplitDto)

Criar novo pagamento online

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let CreatePaymentWithSplitDto = new ParcelaExpressApi.CreatePaymentWithSplitDto(); // CreatePaymentWithSplitDto | 
apiInstance.createPaymentWithSplit(seller_id, CreatePaymentWithSplitDto, (error, data, response) => {
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
 **CreatePaymentWithSplitDto** | [**CreatePaymentWithSplitDto**](CreatePaymentWithSplitDto.md)|  | 

### Return type

[**CreatePaymentResponseDTO**](CreatePaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentWithSplitInternal

> CreatePaymentResponseDTO createPaymentWithSplitInternal(seller_id, CreatePaymentWithSplitDto)

Criar novo pagamento online

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let CreatePaymentWithSplitDto = new ParcelaExpressApi.CreatePaymentWithSplitDto(); // CreatePaymentWithSplitDto | 
apiInstance.createPaymentWithSplitInternal(seller_id, CreatePaymentWithSplitDto, (error, data, response) => {
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
 **CreatePaymentWithSplitDto** | [**CreatePaymentWithSplitDto**](CreatePaymentWithSplitDto.md)|  | 

### Return type

[**CreatePaymentResponseDTO**](CreatePaymentResponseDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPixPayment

> CreatePixPaymentResponseDTO createPixPayment(seller_id, CreatePixPaymentDto)

Criar um pagamento usando Pix

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let CreatePixPaymentDto = new ParcelaExpressApi.CreatePixPaymentDto(); // CreatePixPaymentDto | 
apiInstance.createPixPayment(seller_id, CreatePixPaymentDto, (error, data, response) => {
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
 **CreatePixPaymentDto** | [**CreatePixPaymentDto**](CreatePixPaymentDto.md)|  | 

### Return type

[**CreatePixPaymentResponseDTO**](CreatePixPaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPixPaymentInternalWithSplits

> CreatePixPaymentWithSplitResponseDTO createPixPaymentInternalWithSplits(seller_id, CreatePixPaymentWithSplitInternalDto)

Criar um pagamento usando Pix

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let CreatePixPaymentWithSplitInternalDto = new ParcelaExpressApi.CreatePixPaymentWithSplitInternalDto(); // CreatePixPaymentWithSplitInternalDto | 
apiInstance.createPixPaymentInternalWithSplits(seller_id, CreatePixPaymentWithSplitInternalDto, (error, data, response) => {
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
 **CreatePixPaymentWithSplitInternalDto** | [**CreatePixPaymentWithSplitInternalDto**](CreatePixPaymentWithSplitInternalDto.md)|  | 

### Return type

[**CreatePixPaymentWithSplitResponseDTO**](CreatePixPaymentWithSplitResponseDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPixPaymentWithSplits

> CreatePixPaymentWithSplitResponseDTO createPixPaymentWithSplits(seller_id, CreatePixPaymentWithSplitDto)

Criar um pagamento usando Pix

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let CreatePixPaymentWithSplitDto = new ParcelaExpressApi.CreatePixPaymentWithSplitDto(); // CreatePixPaymentWithSplitDto | 
apiInstance.createPixPaymentWithSplits(seller_id, CreatePixPaymentWithSplitDto, (error, data, response) => {
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
 **CreatePixPaymentWithSplitDto** | [**CreatePixPaymentWithSplitDto**](CreatePixPaymentWithSplitDto.md)|  | 

### Return type

[**CreatePixPaymentWithSplitResponseDTO**](CreatePixPaymentWithSplitResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentDetails

> CreateDebitPaymentResponseDTO paymentDetails(seller_id, sale_id, PaymentDetailsDTO)

Verificar detalhes de pagamento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let sale_id = "sale_id_example"; // String | 
let PaymentDetailsDTO = new ParcelaExpressApi.PaymentDetailsDTO(); // PaymentDetailsDTO | 
apiInstance.paymentDetails(seller_id, sale_id, PaymentDetailsDTO, (error, data, response) => {
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
 **sale_id** | **String**|  | 
 **PaymentDetailsDTO** | [**PaymentDetailsDTO**](PaymentDetailsDTO.md)|  | 

### Return type

[**CreateDebitPaymentResponseDTO**](CreateDebitPaymentResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentsControllerCancelPayment

> CancelPaymentResponseDTO paymentsControllerCancelPayment(seller_id, sale_id, CancelPaymentDTO)

Cancelar um pagamento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PaymentsApi();
let seller_id = "seller_id_example"; // String | 
let sale_id = "sale_id_example"; // String | 
let CancelPaymentDTO = new ParcelaExpressApi.CancelPaymentDTO(); // CancelPaymentDTO | 
apiInstance.paymentsControllerCancelPayment(seller_id, sale_id, CancelPaymentDTO, (error, data, response) => {
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
 **sale_id** | **String**|  | 
 **CancelPaymentDTO** | [**CancelPaymentDTO**](CancelPaymentDTO.md)|  | 

### Return type

[**CancelPaymentResponseDTO**](CancelPaymentResponseDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

