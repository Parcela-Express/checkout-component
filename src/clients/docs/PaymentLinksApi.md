# ParcelaExpressApi.PaymentLinksApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPaymentLink**](PaymentLinksApi.md#cancelPaymentLink) | **POST** /v1/payment-links/sellers/{sellerId}/{paymentLinkId}/cancel | Cancelar um link de pagamento
[**createPaymentLink**](PaymentLinksApi.md#createPaymentLink) | **POST** /v1/payment-links | Gerar link de pagamento para o pagador de um estabelecimento
[**createPaymentLinkV2**](PaymentLinksApi.md#createPaymentLinkV2) | **POST** /v2/payment-links | Gerar um lote ou um link de pagamento para o pagador de um estabelecimento
[**getPaymentLinkByToken**](PaymentLinksApi.md#getPaymentLinkByToken) | **GET** /v1/payment-links/{token} | Retornar os dados do link de pagamento informado
[**sentPaymentLinkReceiptMail**](PaymentLinksApi.md#sentPaymentLinkReceiptMail) | **POST** /v1/payment-links/{token}/receipt | Reenviar recibo para o email do pagador
[**updatePaymentLink**](PaymentLinksApi.md#updatePaymentLink) | **PATCH** /v1/payment-links/{paymentLinkId}/update | Atualizar um link de pagamento

<a name="cancelPaymentLink"></a>
# **cancelPaymentLink**
> cancelPaymentLink(sellerId, paymentLinkId)

Cancelar um link de pagamento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let sellerId = "sellerId_example"; // String | 
let paymentLinkId = "paymentLinkId_example"; // String | 

apiInstance.cancelPaymentLink(sellerId, paymentLinkId, (error, data, response) => {
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
 **sellerId** | **String**|  | 
 **paymentLinkId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createPaymentLink"></a>
# **createPaymentLink**
> GetPaymentLinkDto createPaymentLink(body)

Gerar link de pagamento para o pagador de um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let body = new ParcelaExpressApi.CreatePaymentLinkDto(); // CreatePaymentLinkDto | 

apiInstance.createPaymentLink(body, (error, data, response) => {
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
 **body** | [**CreatePaymentLinkDto**](CreatePaymentLinkDto.md)|  | 

### Return type

[**GetPaymentLinkDto**](GetPaymentLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPaymentLinkV2"></a>
# **createPaymentLinkV2**
> [CreatePaymentLinkResponseDto] createPaymentLinkV2(body)

Gerar um lote ou um link de pagamento para o pagador de um estabelecimento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let body = [new ParcelaExpressApi.CreatePaymentLinkDto()]; // [CreatePaymentLinkDto] | 

apiInstance.createPaymentLinkV2(body, (error, data, response) => {
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
 **body** | [**[CreatePaymentLinkDto]**](CreatePaymentLinkDto.md)|  | 

### Return type

[**[CreatePaymentLinkResponseDto]**](CreatePaymentLinkResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentLinkByToken"></a>
# **getPaymentLinkByToken**
> GetPaymentLinkDto getPaymentLinkByToken(token)

Retornar os dados do link de pagamento informado

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let token = "token_example"; // String | 

apiInstance.getPaymentLinkByToken(token, (error, data, response) => {
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
 **token** | **String**|  | 

### Return type

[**GetPaymentLinkDto**](GetPaymentLinkDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sentPaymentLinkReceiptMail"></a>
# **sentPaymentLinkReceiptMail**
> sentPaymentLinkReceiptMail(token)

Reenviar recibo para o email do pagador

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let token = "token_example"; // String | 

apiInstance.sentPaymentLinkReceiptMail(token, (error, data, response) => {
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
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePaymentLink"></a>
# **updatePaymentLink**
> GetPaymentLinkDto updatePaymentLink(body, paymentLinkId)

Atualizar um link de pagamento

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let body = new ParcelaExpressApi.UpdatePaymentLinkDto(); // UpdatePaymentLinkDto | 
let paymentLinkId = "paymentLinkId_example"; // String | 

apiInstance.updatePaymentLink(body, paymentLinkId, (error, data, response) => {
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
 **body** | [**UpdatePaymentLinkDto**](UpdatePaymentLinkDto.md)|  | 
 **paymentLinkId** | **String**|  | 

### Return type

[**GetPaymentLinkDto**](GetPaymentLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

