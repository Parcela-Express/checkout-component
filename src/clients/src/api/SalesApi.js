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
import {CreateExportSalesListDto} from '../model/CreateExportSalesListDto';
import {GetFileExportRequestDto} from '../model/GetFileExportRequestDto';
import {GetSaleDto} from '../model/GetSaleDto';
import {GetSaleSummaryChartDto} from '../model/GetSaleSummaryChartDto';
import {GetSaleSummaryDto} from '../model/GetSaleSummaryDto';
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Sales service.
* @module api/SalesApi
* @version 1.0
*/
export class SalesApi {

    /**
    * Constructs a new SalesApi. 
    * @alias module:api/SalesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createSalesListExportRequest operation.
     * @callback moduleapi/SalesApi~createSalesListExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação da lista de vendas
     * @param {module:model/CreateExportSalesListDto} body 
     * @param {module:api/SalesApi~createSalesListExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createSalesListExportRequest(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSalesListExportRequest");
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
        '/v1/sales/list/export/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllSalesSummary operation.
     * @callback moduleapi/SalesApi~getAllSalesSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSaleSummaryDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar resumo de venda de todos Estabelecimentos
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate 
     * @param {String} opts.endDate 
     * @param {module:model/String} opts.status 
     * @param {module:api/SalesApi~getAllSalesSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllSalesSummary(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'startDate': opts['startDate'],'endDate': opts['endDate'],'status': opts['status']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSaleSummaryDto;

      return this.apiClient.callApi(
        '/v1/sales/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllSalesSummaryChart operation.
     * @callback moduleapi/SalesApi~getAllSalesSummaryChartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSaleSummaryChartDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar resumo dos ultimos 6 meses de todos Estabelecimentos
     * @param {module:api/SalesApi~getAllSalesSummaryChartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllSalesSummaryChart(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSaleSummaryChartDto;

      return this.apiClient.callApi(
        '/v1/sales/summary-chart', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSale operation.
     * @callback moduleapi/SalesApi~getSaleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSaleDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retornar dados de uma venda especifica
     * @param {String} saleId 
     * @param {module:api/SalesApi~getSaleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getSale(saleId, callback) {
      
      let postBody = null;
      // verify the required parameter 'saleId' is set
      if (saleId === undefined || saleId === null) {
        throw new Error("Missing the required parameter 'saleId' when calling getSale");
      }

      let pathParams = {
        'saleId': saleId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSaleDto;

      return this.apiClient.callApi(
        '/v1/sales/{saleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listSales operation.
     * @callback moduleapi/SalesApi~listSalesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar as vendas de todos os estabelecimentos
     * @param {Number} limit 
     * @param {Number} currentPage 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Formato: yyyy-mm-dd
     * @param {String} opts.endDate Formato: yyyy-mm-dd
     * @param {module:model/String} opts.sort  (default to <.>)
     * @param {String} opts.id 
     * @param {Array.<module:model/String>} opts.status 
     * @param {String} opts.description 
     * @param {Number} opts.amount 
     * @param {Number} opts.originalAmount 
     * @param {Array.<module:model/String>} opts.type 
     * @param {String} opts.name 
     * @param {String} opts.user 
     * @param {Array.<module:model/String>} opts.formPayment 
     * @param {Number} opts.lastNumberSales 
     * @param {module:api/SalesApi~listSalesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listSales(limit, currentPage, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling listSales");
      }
      // verify the required parameter 'currentPage' is set
      if (currentPage === undefined || currentPage === null) {
        throw new Error("Missing the required parameter 'currentPage' when calling listSales");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'startDate': opts['startDate'],'endDate': opts['endDate'],'limit': limit,'current_page': currentPage,'sort': opts['sort'],'id': opts['id'],'status': this.apiClient.buildCollectionParam(opts['status'], 'multi'),'description': opts['description'],'amount': opts['amount'],'original_amount': opts['originalAmount'],'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),'name': opts['name'],'user': opts['user'],'form_payment': this.apiClient.buildCollectionParam(opts['formPayment'], 'multi'),'last_number_sales': opts['lastNumberSales']
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
        '/v1/sales', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the payPix operation.
     * @callback moduleapi/SalesApi~payPixCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pagar PIX (em ambiente de desenvolvimento)
     * @param {String} saleId 
     * @param {module:api/SalesApi~payPixCallback} callback The callback function, accepting three arguments: error, data, response
     */
    payPix(saleId, callback) {
      
      let postBody = null;
      // verify the required parameter 'saleId' is set
      if (saleId === undefined || saleId === null) {
        throw new Error("Missing the required parameter 'saleId' when calling payPix");
      }

      let pathParams = {
        'saleId': saleId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1/sales/{saleId}/pix/pay', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}