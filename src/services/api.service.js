class APIService {
  constructor(apiUrl = 'https://api-prod.parcelaexpress.com.br') {
    this.apiUrl = apiUrl;
  }

  async getSellerPaymentProvider(sellerId) {
    if (sellerId === undefined || sellerId === null) {
      throw new Error(
        "Missing the required parameter 'seller_id' when calling getSellerPaymentProvider"
      );
    }

    try {
      const response = await fetch(`${this.apiUrl}/v1/sellers/${sellerId}/payment-provider`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Error finding Seller.');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async createPaymentWithSplit(createPaymentDto, sellerId, callback) {
    if (sellerId === undefined || sellerId === null) {
      throw new Error(
        "Missing the required parameter 'seller_id' when calling createPaymentWithSplit"
      );
    }
    if (createPaymentDto === undefined || createPaymentDto === null) {
      throw new Error(
        "Missing the required parameter 'CreatePaymentWithSplitDto' when calling createPaymentWithSplit"
      );
    }

    try {
      const response = await fetch(`${this.apiUrl}/v2/payments/sellers/${sellerId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createPaymentDto)
      });

      if (!response.ok) {
        const error = new Error('Error occurred while making the request.');
        if (callback) {
          callback(error);
        }
        throw error;
      }

      const data = await response.json();

      if (callback) {
        callback(null, data);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = APIService;
