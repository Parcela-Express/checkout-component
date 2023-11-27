# ParcelaExpressApi.SplitRulesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rollBackSplits**](SplitRulesApi.md#rollBackSplits) | **POST** /v1/split-rules/rollback | Cancela o split de uma venda e retorna o valor dela para a principal



## rollBackSplits

> rollBackSplits(RollbackSplitsDto)

Cancela o split de uma venda e retorna o valor dela para a principal

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';
let defaultClient = ParcelaExpressApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ParcelaExpressApi.SplitRulesApi();
let RollbackSplitsDto = new ParcelaExpressApi.RollbackSplitsDto(); // RollbackSplitsDto | 
apiInstance.rollBackSplits(RollbackSplitsDto, (error, data, response) => {
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
 **RollbackSplitsDto** | [**RollbackSplitsDto**](RollbackSplitsDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

