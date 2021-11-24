# ParcelaExpressApi.SimulationApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSimulation**](SimulationApi.md#listSimulation) | **GET** /v1/simulation/sellers/{seller_id} | Listar simulação de parcelas

<a name="listSimulation"></a>
# **listSimulation**
> [GetSimulationDto] listSimulation(sellerId, amountCents, opts)

Listar simulação de parcelas

### Example
```javascript
import {ParcelaExpressApi} from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SimulationApi();
let sellerId = "sellerId_example"; // String | 
let amountCents = 1.2; // Number | 
let opts = { 
  'fee': 1.2, // Number | 
  'isPos': true // Boolean | 
};
apiInstance.listSimulation(sellerId, amountCents, opts, (error, data, response) => {
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
 **amountCents** | **Number**|  | 
 **fee** | **Number**|  | [optional] 
 **isPos** | **Boolean**|  | [optional] 

### Return type

[**[GetSimulationDto]**](GetSimulationDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

