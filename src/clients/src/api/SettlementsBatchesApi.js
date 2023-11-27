/**
 * Parcela Express API
 * Parcela Express API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateExportSettlementBatchSalesListDto from '../model/CreateExportSettlementBatchSalesListDto';
import CreateExportSettlementListDto from '../model/CreateExportSettlementListDto';
import GetFileExportRequestDto from '../model/GetFileExportRequestDto';
import GetSettlementResponseDto from '../model/GetSettlementResponseDto';
import PaginatedDto from '../model/PaginatedDto';
import SettlementBatch from '../model/SettlementBatch';
import UpdateSettlementBatchDTO from '../model/UpdateSettlementBatchDTO';

/**
* SettlementsBatches service.
* @module api/SettlementsBatchesApi
* @version 1.0
*/
export default class SettlementsBatchesApi {

    /**
    * Constructs a new SettlementsBatchesApi. 
    * @alias module:api/SettlementsBatchesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the concilExportRequest operation.
     * @callback module:api/SettlementsBatchesApi~concilExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação das vendas dos históricos de liquidações para conciliação
     * @param {module:model/CreateExportSettlementListDto} CreateExportSettlementListDto 
     * @param {module:api/SettlementsBatchesApi~concilExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFileExportRequestDto}
     */
    concilExportRequest(CreateExportSettlementListDto, callback) {
      let postBody = CreateExportSettlementListDto;
      // verify the required parameter 'CreateExportSettlementListDto' is set
      if (CreateExportSettlementListDto === undefined || CreateExportSettlementListDto === null) {
        throw new Error("Missing the required parameter 'CreateExportSettlementListDto' when calling concilExportRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetFileExportRequestDto;
      return this.apiClient.callApi(
        '/v1/settlement/list/transactions/concil/export/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSettlementBatchListExportRequest operation.
     * @callback module:api/SettlementsBatchesApi~createSettlementBatchListExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação dos históricos de liquidação
     * @param {module:model/CreateExportSettlementListDto} CreateExportSettlementListDto 
     * @param {module:api/SettlementsBatchesApi~createSettlementBatchListExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFileExportRequestDto}
     */
    createSettlementBatchListExportRequest(CreateExportSettlementListDto, callback) {
      let postBody = CreateExportSettlementListDto;
      // verify the required parameter 'CreateExportSettlementListDto' is set
      if (CreateExportSettlementListDto === undefined || CreateExportSettlementListDto === null) {
        throw new Error("Missing the required parameter 'CreateExportSettlementListDto' when calling createSettlementBatchListExportRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetFileExportRequestDto;
      return this.apiClient.callApi(
        '/v1/settlement/list/export/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createSettlementBatchSalesExportRequest operation.
     * @callback module:api/SettlementsBatchesApi~createSettlementBatchSalesExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação da lista das vendas de um lote de liquidação
     * @param {String} settlement_batch_id 
     * @param {module:model/CreateExportSettlementBatchSalesListDto} CreateExportSettlementBatchSalesListDto 
     * @param {module:api/SettlementsBatchesApi~createSettlementBatchSalesExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFileExportRequestDto}
     */
    createSettlementBatchSalesExportRequest(settlement_batch_id, CreateExportSettlementBatchSalesListDto, callback) {
      let postBody = CreateExportSettlementBatchSalesListDto;
      // verify the required parameter 'settlement_batch_id' is set
      if (settlement_batch_id === undefined || settlement_batch_id === null) {
        throw new Error("Missing the required parameter 'settlement_batch_id' when calling createSettlementBatchSalesExportRequest");
      }
      // verify the required parameter 'CreateExportSettlementBatchSalesListDto' is set
      if (CreateExportSettlementBatchSalesListDto === undefined || CreateExportSettlementBatchSalesListDto === null) {
        throw new Error("Missing the required parameter 'CreateExportSettlementBatchSalesListDto' when calling createSettlementBatchSalesExportRequest");
      }

      let pathParams = {
        'settlement_batch_id': settlement_batch_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetFileExportRequestDto;
      return this.apiClient.callApi(
        '/v1/settlement/{settlement_batch_id}/list/export/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTransactionsListExportRequest operation.
     * @callback module:api/SettlementsBatchesApi~createTransactionsListExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação das vendas dos históricos de liquidações
     * @param {module:model/CreateExportSettlementListDto} CreateExportSettlementListDto 
     * @param {module:api/SettlementsBatchesApi~createTransactionsListExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFileExportRequestDto}
     */
    createTransactionsListExportRequest(CreateExportSettlementListDto, callback) {
      let postBody = CreateExportSettlementListDto;
      // verify the required parameter 'CreateExportSettlementListDto' is set
      if (CreateExportSettlementListDto === undefined || CreateExportSettlementListDto === null) {
        throw new Error("Missing the required parameter 'CreateExportSettlementListDto' when calling createTransactionsListExportRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetFileExportRequestDto;
      return this.apiClient.callApi(
        '/v1/settlement/list/transactions/export/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllSettlement operation.
     * @callback module:api/SettlementsBatchesApi~listAllSettlementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar liquidações
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Formato: yyyy-mm-dd
     * @param {String} opts.endDate Formato: yyyy-mm-dd
     * @param {String} opts.id 
     * @param {module:model/String} opts.status 
     * @param {String} opts.sellerId 
     * @param {module:model/String} opts.type 
     * @param {Number} opts.limit 
     * @param {Number} opts.current_page 
     * @param {module:model/String} opts.order_by_field 
     * @param {module:model/String} opts.order_by_value 
     * @param {module:api/SettlementsBatchesApi~listAllSettlementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedDto}
     */
    listAllSettlement(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'id': opts['id'],
        'status': opts['status'],
        'sellerId': opts['sellerId'],
        'type': opts['type'],
        'limit': opts['limit'],
        'current_page': opts['current_page'],
        'order_by_field': opts['order_by_field'],
        'order_by_value': opts['order_by_value']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedDto;
      return this.apiClient.callApi(
        '/v1/settlement', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllSettlementDetailed operation.
     * @callback module:api/SettlementsBatchesApi~listAllSettlementDetailedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar todas as liquidações detalhadas
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Formato: yyyy-mm-dd
     * @param {String} opts.endDate Formato: yyyy-mm-dd
     * @param {String} opts.id 
     * @param {module:model/String} opts.status 
     * @param {module:model/String} opts.type 
     * @param {Number} opts.limit 
     * @param {Number} opts.current_page 
     * @param {module:model/String} opts.order_by_field 
     * @param {module:model/String} opts.order_by_value 
     * @param {module:api/SettlementsBatchesApi~listAllSettlementDetailedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedDto}
     */
    listAllSettlementDetailed(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'id': opts['id'],
        'status': opts['status'],
        'type': opts['type'],
        'limit': opts['limit'],
        'current_page': opts['current_page'],
        'order_by_field': opts['order_by_field'],
        'order_by_value': opts['order_by_value']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedDto;
      return this.apiClient.callApi(
        '/v1/settlement/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSellerSettlement operation.
     * @callback module:api/SettlementsBatchesApi~listSellerSettlementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar liquidações separadas por seller
     * @param {String} sellerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Formato: yyyy-mm-dd
     * @param {String} opts.endDate Formato: yyyy-mm-dd
     * @param {String} opts.id 
     * @param {module:model/String} opts.status 
     * @param {module:model/String} opts.type 
     * @param {Number} opts.limit 
     * @param {Number} opts.current_page 
     * @param {module:model/String} opts.order_by_field 
     * @param {module:model/String} opts.order_by_value 
     * @param {module:api/SettlementsBatchesApi~listSellerSettlementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedDto}
     */
    listSellerSettlement(sellerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling listSellerSettlement");
      }

      let pathParams = {
        'sellerId': sellerId
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'id': opts['id'],
        'status': opts['status'],
        'type': opts['type'],
        'limit': opts['limit'],
        'current_page': opts['current_page'],
        'order_by_field': opts['order_by_field'],
        'order_by_value': opts['order_by_value']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedDto;
      return this.apiClient.callApi(
        '/v1/settlement/{sellerId}/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the noPaginatedListAllSettlementDetailedWith operation.
     * @callback module:api/SettlementsBatchesApi~noPaginatedListAllSettlementDetailedWithCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar todas as liquidações detalhadas sem paginação
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Formato: yyyy-mm-dd
     * @param {String} opts.endDate Formato: yyyy-mm-dd
     * @param {String} opts.id 
     * @param {module:model/String} opts.status 
     * @param {module:model/String} opts.type 
     * @param {Number} opts.limit 
     * @param {Number} opts.current_page 
     * @param {module:model/String} opts.order_by_field 
     * @param {module:model/String} opts.order_by_value 
     * @param {String} opts.sellerId 
     * @param {String} opts.merchant_id 
     * @param {module:api/SettlementsBatchesApi~noPaginatedListAllSettlementDetailedWithCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedDto}
     */
    noPaginatedListAllSettlementDetailedWith(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'id': opts['id'],
        'status': opts['status'],
        'type': opts['type'],
        'limit': opts['limit'],
        'current_page': opts['current_page'],
        'order_by_field': opts['order_by_field'],
        'order_by_value': opts['order_by_value'],
        'sellerId': opts['sellerId'],
        'merchant_id': opts['merchant_id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedDto;
      return this.apiClient.callApi(
        '/v1/settlement/unpaginatedList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the settlementBatchControllerGetSettlementBatch operation.
     * @callback module:api/SettlementsBatchesApi~settlementBatchControllerGetSettlementBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSettlementResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar detalhes de liquidação
     * @param {Number} limit 
     * @param {Number} current_page 
     * @param {String} settlement_batch_id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Formato: yyyy-mm-dd
     * @param {String} opts.endDate Formato: yyyy-mm-dd
     * @param {module:model/String} opts.sort  (default to 'time-descending')
     * @param {Array.<module:model/String>} opts.settlement_status 
     * @param {String} opts.description 
     * @param {Number} opts.amount 
     * @param {Number} opts.original_amount 
     * @param {Array.<module:model/String>} opts.type 
     * @param {String} opts.name 
     * @param {Array.<module:model/String>} opts.form_payment 
     * @param {module:api/SettlementsBatchesApi~settlementBatchControllerGetSettlementBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSettlementResponseDto}
     */
    settlementBatchControllerGetSettlementBatch(limit, current_page, settlement_batch_id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling settlementBatchControllerGetSettlementBatch");
      }
      // verify the required parameter 'current_page' is set
      if (current_page === undefined || current_page === null) {
        throw new Error("Missing the required parameter 'current_page' when calling settlementBatchControllerGetSettlementBatch");
      }
      // verify the required parameter 'settlement_batch_id' is set
      if (settlement_batch_id === undefined || settlement_batch_id === null) {
        throw new Error("Missing the required parameter 'settlement_batch_id' when calling settlementBatchControllerGetSettlementBatch");
      }

      let pathParams = {
        'settlement_batch_id': settlement_batch_id
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'limit': limit,
        'current_page': current_page,
        'sort': opts['sort'],
        'settlement_status': this.apiClient.buildCollectionParam(opts['settlement_status'], 'multi'),
        'description': opts['description'],
        'amount': opts['amount'],
        'original_amount': opts['original_amount'],
        'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),
        'name': opts['name'],
        'form_payment': this.apiClient.buildCollectionParam(opts['form_payment'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSettlementResponseDto;
      return this.apiClient.callApi(
        '/v1/settlement/{settlement_batch_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the settlementBatchControllerUpdateSettlementBatch operation.
     * @callback module:api/SettlementsBatchesApi~settlementBatchControllerUpdateSettlementBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SettlementBatch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar lote de liquidação
     * @param {String} settlement_batch_id 
     * @param {module:model/UpdateSettlementBatchDTO} UpdateSettlementBatchDTO 
     * @param {module:api/SettlementsBatchesApi~settlementBatchControllerUpdateSettlementBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SettlementBatch}
     */
    settlementBatchControllerUpdateSettlementBatch(settlement_batch_id, UpdateSettlementBatchDTO, callback) {
      let postBody = UpdateSettlementBatchDTO;
      // verify the required parameter 'settlement_batch_id' is set
      if (settlement_batch_id === undefined || settlement_batch_id === null) {
        throw new Error("Missing the required parameter 'settlement_batch_id' when calling settlementBatchControllerUpdateSettlementBatch");
      }
      // verify the required parameter 'UpdateSettlementBatchDTO' is set
      if (UpdateSettlementBatchDTO === undefined || UpdateSettlementBatchDTO === null) {
        throw new Error("Missing the required parameter 'UpdateSettlementBatchDTO' when calling settlementBatchControllerUpdateSettlementBatch");
      }

      let pathParams = {
        'settlement_batch_id': settlement_batch_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SettlementBatch;
      return this.apiClient.callApi(
        '/v1/settlement/{settlement_batch_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
