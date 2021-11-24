# ParcelaExpressApi.AccountingAccountsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccountingAccount**](AccountingAccountsApi.md#createAccountingAccount) | **POST** /v1/accounting-accounts | Criar conta contábil
[**listAccountingAccount**](AccountingAccountsApi.md#listAccountingAccount) | **GET** /v1/accounting-accounts | Listar contas contábeis

<a name="createAccountingAccount"></a>
# **createAccountingAccount**
> AccountingAccountDto createAccountingAccount(body)

Criar conta contábil

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.AccountingAccountsApi();
let body = new ParcelaExpressApi.CreateAccountingAccountDto(); // CreateAccountingAccountDto | 

apiInstance.createAccountingAccount(body, (error, data, response) => {
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
 **body** | [**CreateAccountingAccountDto**](CreateAccountingAccountDto.md)|  | 

### Return type

[**AccountingAccountDto**](AccountingAccountDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAccountingAccount"></a>
# **listAccountingAccount**
> [GetAccountingAccountDto] listAccountingAccount()

Listar contas contábeis

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;


let apiInstance = new ParcelaExpressApi.AccountingAccountsApi();
apiInstance.listAccountingAccount((error, data, response) => {
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

[**[GetAccountingAccountDto]**](GetAccountingAccountDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

