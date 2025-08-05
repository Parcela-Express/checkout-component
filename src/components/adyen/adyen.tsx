import React from 'react';
import { AdyenCheckout, Card, CardConfiguration, CoreConfiguration } from '@adyen/adyen-web';
import PaymentThreeDS from './PaymentThreeDS';
import APIService from '../../services/api.service';
import CreatePaymentWithSplitDto from './types/create-payment.dto';
import './adyen.css';

const paymentMethods = {
  paymentMethods: [
    {
      brands: ['mc', 'visa', 'elo', 'amex', 'hipercard', 'maestro', 'hiper'],
      details: [
        {
          key: 'encryptedCardNumber',
          type: 'cardToken'
        },
        {
          key: 'encryptedSecurityCode',
          type: 'cardToken'
        },
        {
          key: 'encryptedExpiryMonth',
          type: 'cardToken'
        },
        {
          key: 'encryptedExpiryYear',
          type: 'cardToken'
        },
        {
          key: 'holderName',
          optional: true,
          type: 'text'
        }
      ],
      name: 'Credit Card',
      type: 'scheme'
    }
  ]
};

const Adyen = (props) => {
  const {
    environment,
    clientKey,
    customerData,
    apiUrl,
    sellerKey,
    successReturnUrl,
    errorReturnUrl,
    showPayButton,
    maskSecurityCode
  } = props;
  const [paymentResponse, setPaymentResponse] = React.useState(undefined);
  
  const configuration: CoreConfiguration = {
    locale: 'pt-br',
    countryCode: 'pt-br',
    environment: environment.toLowerCase(),
    clientKey,
    paymentMethodsResponse: paymentMethods,
    showPayButton: showPayButton !== undefined ? showPayButton : true,
    translations: {
      'pt-br': {
        payButton: 'Pagamento',
      }
    }
  };
  
  React.useEffect(() => {
    const mountComponent = async () => {
      
      const apiInstance = new APIService(apiUrl);
      const adyenCheckout = await AdyenCheckout(configuration);
      const callbacks: {
        onChange?: (state: any, component?: any) => void;
        onSubmit?: (state: any, component?: any) => void;
      } = {};
      
      if (props.onChange && typeof props.onChange === 'function') {
        callbacks.onChange = (state, component) => {
          return props.onChange(state);
        };
      }
      
      if (props.onSubmit && typeof props.onSubmit === 'function') {
        callbacks.onSubmit = async (state, component) => {
          const { data } = state;
          const { paymentMethod } = data;
          
          if (
            customerData.form_payment === 'debit' &&
            (typeof successReturnUrl !== 'string' || typeof errorReturnUrl !== 'string')
          ) {
            if (props.onSubmitError) {
              return props.onSubmitError(
                'Please provide successReturnUrl string and errorReturnUrl string!'
              );
            } else {
              console.error('Please provide successReturnUrl string and errorReturnUrl string!');
              return;
            }
          }
          
          const createPaymentDto: CreatePaymentWithSplitDto = {
            amount_cents: customerData.amount_cents,
            description: customerData.description,
            form_payment: customerData.form_payment,
            pre_capture: customerData.pre_capture,
            card_attributes: {
              holder_name: paymentMethod.holderName,
              number: paymentMethod.encryptedCardNumber,
              expiration_month: paymentMethod.encryptedExpiryMonth,
              expiration_year: paymentMethod.encryptedExpiryYear,
              security_code: paymentMethod.encryptedSecurityCode
            },
            installment_plan: customerData.installment_plan,
            customer: customerData.customer,
            sale_id: customerData.sale_id,
            has_split_rules: customerData.has_split_rules,
            split_rules: customerData.split_rules
          };
          
          if (customerData.active_3ds) {
            createPaymentDto.active_3ds = customerData.active_3ds;
          }
          
          if (customerData.service_id) {
            createPaymentDto.service_id = customerData.service_id;
          }
          
          if (customerData.protocol) {
            createPaymentDto.protocol = customerData.protocol;
          }
          
          if (customerData.risk_custom_field) {
            createPaymentDto.risk_custom_field = customerData.risk_custom_field;
          }
          
          if (customerData.extract_identification) {
            createPaymentDto.extract_identification = customerData.extract_identification;
          }
          
          if (customerData.confirmation_required) {
            createPaymentDto.confirmation_required = customerData.confirmation_required;
          }
          
          if (successReturnUrl) {
            createPaymentDto.success_return_url = successReturnUrl;
          }
          
          if (errorReturnUrl) {
            createPaymentDto.error_return_url = errorReturnUrl;
          }
          
          if (customerData.recurrence && customerData.recurrence_day) {
            createPaymentDto.recurrence = customerData.recurrence;
            createPaymentDto.recurrence_day = customerData.recurrence_day;
          }
          
          return new Promise((resolve, reject) => {
            props.beforeSubmit && props.beforeSubmit();
            
            apiInstance.createPaymentWithSplit(createPaymentDto, sellerKey, (err, data) => {
              props.afterSubmit && props.afterSubmit();
              
              if (err) {
                setPaymentResponse(undefined);
                if (props.onSubmitError) {
                  reject(props.onSubmitError(JSON.parse(err.message).message));
                } else {
                  reject(JSON.parse(err.message).message);
                }
              } else {
                setPaymentResponse(data);
                resolve(props.onSubmit(state, component, data));
              }
            });
          });
        };
      }
      
      const cardConfiguration: CardConfiguration = {
        maskSecurityCode: maskSecurityCode || false,
        hasHolderName: true,
        holderNameRequired: true,
        onSubmit: callbacks.onSubmit,
        onChange: callbacks.onChange,
        
      }
      const card = new Card(adyenCheckout, cardConfiguration).mount("#checkout-container")
    }
    
    mountComponent();
  });

  return (
    <>
      <div id="checkout-container" />
      {paymentResponse &&
        paymentResponse.action &&
        paymentResponse.action.type &&
        (paymentResponse.action.type === 'threeDS2Fingerprint' ||
          paymentResponse.action.type === 'redirect') && (
          <PaymentThreeDS
            environment={environment}
            clientKey={clientKey}
            action={paymentResponse.action}
          />
        )}
    </>
  );
};

export default Adyen;
