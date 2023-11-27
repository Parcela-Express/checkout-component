# ParcelaExpressApi.TransactionsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /v1/transactions | Exibe transações de um seller

<a name="listTransactions"></a>
# **listTransactions**
> GetTransactionDto listTransactions(sellerId)

Exibe transações de um seller

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.TransactionsApi();
let sellerId = "sellerId_example"; // String | 

apiInstance.listTransactions(sellerId, (error, data, response) => {
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

[**GetTransactionDto**](GetTransactionDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

