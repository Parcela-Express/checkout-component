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
import {CreateFileExportRequestDto} from '../model/CreateFileExportRequestDto';
import {GetFileExportRequestDto} from '../model/GetFileExportRequestDto';
import {InlineResponse200} from '../model/InlineResponse200';

/**
* FileExportRequests service.
* @module api/FileExportRequestsApi
* @version 1.0
*/
export class FileExportRequestsApi {

    /**
    * Constructs a new FileExportRequestsApi. 
    * @alias module:api/FileExportRequestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createFileExportRequest operation.
     * @callback moduleapi/FileExportRequestsApi~createFileExportRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFileExportRequestDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma requisição de exportação de arquivo
     * @param {module:model/CreateFileExportRequestDto} body 
     * @param {module:api/FileExportRequestsApi~createFileExportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createFileExportRequest(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFileExportRequest");
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
        '/v1/file-exports/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listFileExportRequests operation.
     * @callback moduleapi/FileExportRequestsApi~listFileExportRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar requisições de exportação de arquivos
     * @param {Number} limit 
     * @param {Number} currentPage 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Formato: yyyy-mm-dd
     * @param {String} opts.endDate Formato: yyyy-mm-dd
     * @param {Array.<module:model/String>} opts.status 
     * @param {String} opts.user 
     * @param {String} opts.sellerId 
     * @param {module:model/String} opts.sort  (default to <.>)
     * @param {module:api/FileExportRequestsApi~listFileExportRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listFileExportRequests(limit, currentPage, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling listFileExportRequests");
      }
      // verify the required parameter 'currentPage' is set
      if (currentPage === undefined || currentPage === null) {
        throw new Error("Missing the required parameter 'currentPage' when calling listFileExportRequests");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'startDate': opts['startDate'],'endDate': opts['endDate'],'status': this.apiClient.buildCollectionParam(opts['status'], 'multi'),'user': opts['user'],'sellerId': opts['sellerId'],'limit': limit,'current_page': currentPage,'sort': opts['sort']
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
        '/v1/file-exports/requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}