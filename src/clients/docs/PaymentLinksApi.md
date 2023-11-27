# ParcelaExpressApi.PaymentLinksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPaymentLink**](PaymentLinksApi.md#cancelPaymentLink) | **POST** /v1/payment-links/sellers/{sellerId}/{paymentLinkId}/cancel | Cancelar um link de pagamento
[**createPaymentLink**](PaymentLinksApi.md#createPaymentLink) | **POST** /v1/payment-links | Gerar link de pagamento para o pagador de um estabelecimento
[**createPaymentLinkV2**](PaymentLinksApi.md#createPaymentLinkV2) | **POST** /v2/payment-links | Gerar um lote ou um link de pagamento para o pagador de um estabelecimento
[**createSellerPaymentLinks**](PaymentLinksApi.md#createSellerPaymentLinks) | **POST** /v2/payment-links/sellers/{sellerId} | Gerar um lote ou um link de pagamento para o pagador de um estabelecimento
[**getPaymentLinkByToken**](PaymentLinksApi.md#getPaymentLinkByToken) | **GET** /v1/payment-links/{token} | Retornar os dados do link de pagamento informado
[**sentPaymentLinkReceiptMail**](PaymentLinksApi.md#sentPaymentLinkReceiptMail) | **POST** /v1/payment-links/{token}/receipt | Reenviar recibo para o email do pagador
[**updatePaymentLink**](PaymentLinksApi.md#updatePaymentLink) | **PATCH** /v1/payment-links/{paymentLinkId}/update | Atualizar um link de pagamento



## cancelPaymentLink

> cancelPaymentLink(sellerId, paymentLinkId)

Cancelar um link de pagamento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

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
- **Accept**: Not defined


## createPaymentLink

> GetPaymentLinkDto createPaymentLink(CreatePaymentLinkDto)

Gerar link de pagamento para o pagador de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let CreatePaymentLinkDto = new ParcelaExpressApi.CreatePaymentLinkDto(); // CreatePaymentLinkDto | 
apiInstance.createPaymentLink(CreatePaymentLinkDto, (error, data, response) => {
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
 **CreatePaymentLinkDto** | [**CreatePaymentLinkDto**](CreatePaymentLinkDto.md)|  | 

### Return type

[**GetPaymentLinkDto**](GetPaymentLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentLinkV2

> [CreatePaymentLinkResponseDto] createPaymentLinkV2(CreatePaymentLinkDto)

Gerar um lote ou um link de pagamento para o pagador de um estabelecimento

Em alternativa a esta rota, utilize a [Payment Links -&gt; createSellerPaymentLinks](#/Payment%20Links/createSellerPaymentLinks)

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let CreatePaymentLinkDto = [new ParcelaExpressApi.CreatePaymentLinkDto()]; // [CreatePaymentLinkDto] | 
apiInstance.createPaymentLinkV2(CreatePaymentLinkDto, (error, data, response) => {
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
 **CreatePaymentLinkDto** | [**[CreatePaymentLinkDto]**](CreatePaymentLinkDto.md)|  | 

### Return type

[**[CreatePaymentLinkResponseDto]**](CreatePaymentLinkResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSellerPaymentLinks

> [CreatePaymentLinkResponseDto] createSellerPaymentLinks(sellerId, CreatePaymentLinkDto)

Gerar um lote ou um link de pagamento para o pagador de um estabelecimento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let sellerId = "sellerId_example"; // String | 
let CreatePaymentLinkDto = [new ParcelaExpressApi.CreatePaymentLinkDto()]; // [CreatePaymentLinkDto] | 
apiInstance.createSellerPaymentLinks(sellerId, CreatePaymentLinkDto, (error, data, response) => {
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
 **CreatePaymentLinkDto** | [**[CreatePaymentLinkDto]**](CreatePaymentLinkDto.md)|  | 

### Return type

[**[CreatePaymentLinkResponseDto]**](CreatePaymentLinkResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPaymentLinkByToken

> GetPaymentLinkDto getPaymentLinkByToken(token)

Retornar os dados do link de pagamento informado

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

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


## sentPaymentLinkReceiptMail

> sentPaymentLinkReceiptMail(token)

Reenviar recibo para o email do pagador

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

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
- **Accept**: Not defined


## updatePaymentLink

> GetPaymentLinkDto updatePaymentLink(paymentLinkId, UpdatePaymentLinkDto)

Atualizar um link de pagamento

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.PaymentLinksApi();
let paymentLinkId = "paymentLinkId_example"; // String | 
let UpdatePaymentLinkDto = new ParcelaExpressApi.UpdatePaymentLinkDto(); // UpdatePaymentLinkDto | 
apiInstance.updatePaymentLink(paymentLinkId, UpdatePaymentLinkDto, (error, data, response) => {
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
 **paymentLinkId** | **String**|  | 
 **UpdatePaymentLinkDto** | [**UpdatePaymentLinkDto**](UpdatePaymentLinkDto.md)|  | 

### Return type

[**GetPaymentLinkDto**](GetPaymentLinkDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

