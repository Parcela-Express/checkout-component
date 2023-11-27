# ParcelaExpressApi.CelcoinApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](CelcoinApi.md#authorize) | **POST** /v1/celcoin | Autoriza um pagamento na celcoin
[**cancel**](CelcoinApi.md#cancel) | **DELETE** /v1/celcoin/payment/{transactionId} | Cancela um pagamento.
[**celcoinCashin**](CelcoinApi.md#celcoinCashin) | **GET** /v1/celcoin/process/cash_in | Criar novo pagamento celcoin via Pos
[**celcoinPos**](CelcoinApi.md#celcoinPos) | **POST** /v1/celcoin/pos/{seller_id} | Criar novo pagamento celcoin via Pos
[**getPayment**](CelcoinApi.md#getPayment) | **GET** /v1/celcoin/payment/{transactionId} | Busca um status de pagamento na celcoin



## authorize

> Object authorize(AuthorizeTransactionDTO)

Autoriza um pagamento na celcoin

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CelcoinApi();
let AuthorizeTransactionDTO = new ParcelaExpressApi.AuthorizeTransactionDTO(); // AuthorizeTransactionDTO | 
apiInstance.authorize(AuthorizeTransactionDTO, (error, data, response) => {
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
 **AuthorizeTransactionDTO** | [**AuthorizeTransactionDTO**](AuthorizeTransactionDTO.md)|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancel

> Object cancel(transactionId)

Cancela um pagamento.

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CelcoinApi();
let transactionId = "transactionId_example"; // String | 
apiInstance.cancel(transactionId, (error, data, response) => {
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
 **transactionId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## celcoinCashin

> [Object] celcoinCashin()

Criar novo pagamento celcoin via Pos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CelcoinApi();
apiInstance.celcoinCashin((error, data, response) => {
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

**[Object]**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## celcoinPos

> Object celcoinPos(seller_id, PaymentPosRequest)

Criar novo pagamento celcoin via Pos

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CelcoinApi();
let seller_id = "seller_id_example"; // String | 
let PaymentPosRequest = new ParcelaExpressApi.PaymentPosRequest(); // PaymentPosRequest | 
apiInstance.celcoinPos(seller_id, PaymentPosRequest, (error, data, response) => {
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


## getPayment

> Object getPayment(transactionId)

Busca um status de pagamento na celcoin

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.CelcoinApi();
let transactionId = "transactionId_example"; // String | 
apiInstance.getPayment(transactionId, (error, data, response) => {
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
 **transactionId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

