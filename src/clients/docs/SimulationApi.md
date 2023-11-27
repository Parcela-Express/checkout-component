# ParcelaExpressApi.SimulationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCelcoinSimulation**](SimulationApi.md#listCelcoinSimulation) | **GET** /v1/simulation/sellers/{seller_id}/celcoin | Listar simulação de parcelas de Pagamento de Contas
[**listSimulation**](SimulationApi.md#listSimulation) | **GET** /v1/simulation/sellers/{seller_id} | Listar simulação de parcelas
[**listSimulationsFee**](SimulationApi.md#listSimulationsFee) | **POST** /v1/simulation/sellers/{seller_id} | Listar simulação de parcelas com ou sem split mostrando taxas



## listCelcoinSimulation

> [GetSimulationDto] listCelcoinSimulation(seller_id, amount_cents, opts)

Listar simulação de parcelas de Pagamento de Contas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SimulationApi();
let seller_id = "seller_id_example"; // String | 
let amount_cents = 3.4; // Number | 
let opts = {
  'is_pos': true // Boolean | 
};
apiInstance.listCelcoinSimulation(seller_id, amount_cents, opts, (error, data, response) => {
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
 **amount_cents** | **Number**|  | 
 **is_pos** | **Boolean**|  | [optional] 

### Return type

[**[GetSimulationDto]**](GetSimulationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSimulation

> [GetSimulationDto] listSimulation(seller_id, amount_cents, opts)

Listar simulação de parcelas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SimulationApi();
let seller_id = "seller_id_example"; // String | 
let amount_cents = 3.4; // Number | 
let opts = {
  'fee': 3.4, // Number | 
  'is_pos': true // Boolean | 
};
apiInstance.listSimulation(seller_id, amount_cents, opts, (error, data, response) => {
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
 **amount_cents** | **Number**|  | 
 **fee** | **Number**|  | [optional] 
 **is_pos** | **Boolean**|  | [optional] 

### Return type

[**[GetSimulationDto]**](GetSimulationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSimulationsFee

> [GetSimulationDto] listSimulationsFee(seller_id, GetSimulationPayloadDto)

Listar simulação de parcelas com ou sem split mostrando taxas

### Example

```javascript
import ParcelaExpressApi from 'parcela_express_api';

let apiInstance = new ParcelaExpressApi.SimulationApi();
let seller_id = "seller_id_example"; // String | 
let GetSimulationPayloadDto = new ParcelaExpressApi.GetSimulationPayloadDto(); // GetSimulationPayloadDto | 
apiInstance.listSimulationsFee(seller_id, GetSimulationPayloadDto, (error, data, response) => {
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
 **GetSimulationPayloadDto** | [**GetSimulationPayloadDto**](GetSimulationPayloadDto.md)|  | 

### Return type

[**[GetSimulationDto]**](GetSimulationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

