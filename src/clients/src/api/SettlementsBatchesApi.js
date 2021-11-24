/*
 * Parcela Express API
 * Parcela Express API
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {CreateExportSettlementBatchSalesListDto} from '../model/CreateExportSettlementBatchSalesListDto';
import {CreateExportSettlementListDto} from '../model/CreateExportSettlementListDto';
import {GetFileExportRequestDto} from '../model/GetFileExportRequestDto';
import {GetSettlementResponseDto} from '../model/GetSettlementResponseDto';
import {InlineResponse200} from '../model/InlineResponse200';
import {UpdateSettlementBatchDTO} from '../model/UpdateSettlementBatchDTO';

/**
* SettlementsBatches service.
* @module api/SettlementsBatchesApi
* @version 1.0
*/
export class SettlementsBatchesApi {

    /**
    * Constructs a new SettlementsBatchesApi. 
    * @alias module:api/SettlementsBatchesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createSettlementBatchListExportRequest operation.
     * @callback moduleapi/SettlementsBatchesApi~createSettlementBatchListExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação dos históricos de liquidação
     * @param {module:model/CreateExportSettlementListDto} body 
     * @param {module:api/SettlementsBatchesApi~createSettlementBatchListExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createSettlementBatchListExportRequest(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSettlementBatchListExportRequest");
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createSettlementBatchSalesExportRequest operation.
     * @callback moduleapi/SettlementsBatchesApi~createSettlementBatchSalesExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação da lista das vendas de um lote de liquidação
     * @param {module:model/CreateExportSettlementBatchSalesListDto} body 
     * @param {String} settlementBatchId 
     * @param {module:api/SettlementsBatchesApi~createSettlementBatchSalesExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createSettlementBatchSalesExportRequest(body, settlementBatchId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSettlementBatchSalesExportRequest");
      }
      // verify the required parameter 'settlementBatchId' is set
      if (settlementBatchId === undefined || settlementBatchId === null) {
        throw new Error("Missing the required parameter 'settlementBatchId' when calling createSettlementBatchSalesExportRequest");
      }

      let pathParams = {
        'settlement_batch_id': settlementBatchId
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createTransactionsListExportRequest operation.
     * @callback moduleapi/SettlementsBatchesApi~createTransactionsListExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação das vendas dos históricos de liquidações
     * @param {module:model/CreateExportSettlementListDto} body 
     * @param {module:api/SettlementsBatchesApi~createTransactionsListExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTransactionsListExportRequest(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTransactionsListExportRequest");
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listAllSettlement operation.
     * @callback moduleapi/SettlementsBatchesApi~listAllSettlementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
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
     * @param {Number} opts.currentPage 
     * @param {module:model/String} opts.orderByField 
     * @param {module:model/String} opts.orderByValue 
     * @param {module:api/SettlementsBatchesApi~listAllSettlementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listAllSettlement(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'startDate': opts['startDate'],'endDate': opts['endDate'],'id': opts['id'],'status': opts['status'],'sellerId': opts['sellerId'],'type': opts['type'],'limit': opts['limit'],'current_page': opts['currentPage'],'order_by_field': opts['orderByField'],'order_by_value': opts['orderByValue']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/v1/settlement', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listAllSettlementDetailed operation.
     * @callback moduleapi/SettlementsBatchesApi~listAllSettlementDetailedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
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
     * @param {Number} opts.currentPage 
     * @param {module:model/String} opts.orderByField 
     * @param {module:model/String} opts.orderByValue 
     * @param {module:api/SettlementsBatchesApi~listAllSettlementDetailedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listAllSettlementDetailed(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'startDate': opts['startDate'],'endDate': opts['endDate'],'id': opts['id'],'status': opts['status'],'type': opts['type'],'limit': opts['limit'],'current_page': opts['currentPage'],'order_by_field': opts['orderByField'],'order_by_value': opts['orderByValue']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/v1/settlement/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listSellerSettlement operation.
     * @callback moduleapi/SettlementsBatchesApi~listSellerSettlementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
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
     * @param {Number} opts.currentPage 
     * @param {module:model/String} opts.orderByField 
     * @param {module:model/String} opts.orderByValue 
     * @param {module:api/SettlementsBatchesApi~listSellerSettlementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
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
        'startDate': opts['startDate'],'endDate': opts['endDate'],'id': opts['id'],'status': opts['status'],'type': opts['type'],'limit': opts['limit'],'current_page': opts['currentPage'],'order_by_field': opts['orderByField'],'order_by_value': opts['orderByValue']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/v1/settlement/{sellerId}/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the noPaginatedListAllSettlementDetailedWith operation.
     * @callback moduleapi/SettlementsBatchesApi~noPaginatedListAllSettlementDetailedWithCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
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
     * @param {Number} opts.currentPage 
     * @param {module:model/String} opts.orderByField 
     * @param {module:model/String} opts.orderByValue 
     * @param {String} opts.sellerId 
     * @param {module:api/SettlementsBatchesApi~noPaginatedListAllSettlementDetailedWithCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    noPaginatedListAllSettlementDetailedWith(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'startDate': opts['startDate'],'endDate': opts['endDate'],'id': opts['id'],'status': opts['status'],'type': opts['type'],'limit': opts['limit'],'current_page': opts['currentPage'],'order_by_field': opts['orderByField'],'order_by_value': opts['orderByValue'],'sellerId': opts['sellerId']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/v1/settlement/unpaginatedList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the settlementBatchControllerGetSettlementBatch operation.
     * @callback moduleapi/SettlementsBatchesApi~settlementBatchControllerGetSettlementBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSettlementResponseDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar detalhes de liquidação
     * @param {Number} limit 
     * @param {Number} currentPage 
     * @param {String} settlementBatchId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Formato: yyyy-mm-dd
     * @param {String} opts.endDate Formato: yyyy-mm-dd
     * @param {module:model/String} opts.sort  (default to <.>)
     * @param {Array.<module:model/String>} opts.settlementStatus 
     * @param {String} opts.description 
     * @param {Number} opts.amount 
     * @param {Number} opts.originalAmount 
     * @param {Array.<module:model/String>} opts.type 
     * @param {String} opts.name 
     * @param {Array.<module:model/String>} opts.formPayment 
     * @param {module:api/SettlementsBatchesApi~settlementBatchControllerGetSettlementBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    settlementBatchControllerGetSettlementBatch(limit, currentPage, settlementBatchId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling settlementBatchControllerGetSettlementBatch");
      }
      // verify the required parameter 'currentPage' is set
      if (currentPage === undefined || currentPage === null) {
        throw new Error("Missing the required parameter 'currentPage' when calling settlementBatchControllerGetSettlementBatch");
      }
      // verify the required parameter 'settlementBatchId' is set
      if (settlementBatchId === undefined || settlementBatchId === null) {
        throw new Error("Missing the required parameter 'settlementBatchId' when calling settlementBatchControllerGetSettlementBatch");
      }

      let pathParams = {
        'settlement_batch_id': settlementBatchId
      };
      let queryParams = {
        'startDate': opts['startDate'],'endDate': opts['endDate'],'limit': limit,'current_page': currentPage,'sort': opts['sort'],'settlement_status': this.apiClient.buildCollectionParam(opts['settlementStatus'], 'multi'),'description': opts['description'],'amount': opts['amount'],'original_amount': opts['originalAmount'],'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),'name': opts['name'],'form_payment': this.apiClient.buildCollectionParam(opts['formPayment'], 'multi')
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the settlementBatchControllerUpdateSettlementBatch operation.
     * @callback moduleapi/SettlementsBatchesApi~settlementBatchControllerUpdateSettlementBatchCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar lote de liquidação
     * @param {module:model/UpdateSettlementBatchDTO} body 
     * @param {String} settlementBatchId 
     * @param {module:api/SettlementsBatchesApi~settlementBatchControllerUpdateSettlementBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    settlementBatchControllerUpdateSettlementBatch(body, settlementBatchId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling settlementBatchControllerUpdateSettlementBatch");
      }
      // verify the required parameter 'settlementBatchId' is set
      if (settlementBatchId === undefined || settlementBatchId === null) {
        throw new Error("Missing the required parameter 'settlementBatchId' when calling settlementBatchControllerUpdateSettlementBatch");
      }

      let pathParams = {
        'settlement_batch_id': settlementBatchId
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
      let returnType = Object;

      return this.apiClient.callApi(
        '/v1/settlement/{settlement_batch_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}