import React from "react";
import PropTypes from "prop-types";

import AdyenCheckout from "@adyen/adyen-web";

import * as ParcelaExpressApi from "./clients";

import PaymentThreeDS from "./components/PaymentThreeDS";

const paymentMethods = {
  paymentMethods: [
    {
      brands: ["mc", "visa", "elo", "amex", "hipercard", "maestro", "hiper"],
      details: [
        {
          key: "encryptedCardNumber",
          type: "cardToken",
        },
        {
          key: "encryptedSecurityCode",
          type: "cardToken",
        },
        {
          key: "encryptedExpiryMonth",
          type: "cardToken",
        },
        {
          key: "encryptedExpiryYear",
          type: "cardToken",
        },
        {
          key: "holderName",
          optional: true,
          type: "text",
        },
      ],
      name: "Credit Card",
      type: "scheme",
    },
  ],
};

const Checkout = (props) => {
  const {
    environment,
    clientKey,
    theme,
    customerData,
    apiUrl,
    sellerKey,
    successReturnUrl,
    errorReturnUrl,
    showPayButton
  } = props;

  const [paymentResponse, setPaymentResponse] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(false);

  switch (theme) {
    case "outline":
      require("./outline.css");
      break;

    default:
      require("./checkout.css");
      break;
  }

  const configuration = {
    locale: "pt-br",
    environment,
    clientKey,
    paymentMethodsResponse: paymentMethods,
    hasHolderName: true,
    showPayButton: showPayButton !== undefined ? showPayButton : true,
    translations: {
      "pt-br": {
        payButton: "Pagamento",
      },
    },
    styles: {
      base: {
        color: "#001b2b",
        fontSize: "12px",
        fontFamily: "Arial",
        fontWeight: "400",
      },
      placeholder: {
        color: "#90a2bd",
        fontWeight: "200",
      },
      error: {
        color: "#001b2b",
      },
    },
  };

  React.useEffect(() => {
    const apiInstance = new ParcelaExpressApi.PaymentsApi();

    apiInstance.apiClient.basePath =
      apiUrl || "https://api-prod.parcelaexpress.com.br";

    const card = new AdyenCheckout(configuration);
    const callbacks = {};

    if (props.onChange && typeof props.onChange === "function") {
      callbacks.onChange = (state, component) => {
        return props.onChange(state);
      };
    }

    if (props.onSubmit && typeof props.onSubmit === "function") {
      callbacks.onSubmit = (state, component) => {
        const { data } = state;
        const { paymentMethod } = data;

        if (customerData.form_payment === 'debit' && (typeof(successReturnUrl) !== 'string' || typeof(errorReturnUrl) !== 'string')) {
          if (props.onSubmitError) {
            return (props.onSubmitError('Please provide successReturnUrl string and errorReturnUrl string!'));
          } else {
            console.error('Please provide successReturnUrl string and errorReturnUrl string!');
            return;
          } 
        }

        const createPaymentDto = {
          amount_cents: customerData.amount_cents,
          description: customerData.description,
          form_payment: customerData.form_payment,
          pre_capture: customerData.pre_capture,
          card_attributes: {
            holder_name: paymentMethod.holderName,
            number: paymentMethod.encryptedCardNumber,
            expiration_month: paymentMethod.encryptedExpiryMonth,
            expiration_year: paymentMethod.encryptedExpiryYear,
            security_code: paymentMethod.encryptedSecurityCode,
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

          apiInstance.createPaymentWithSplit(
            createPaymentDto,
            sellerKey,
            (err, data) => {
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
            }
          );
        });
      };
    }
    card.create("card", callbacks).mount("#checkout-container");
  });

  return (
    <>
      <div id="checkout-container" />
      {paymentResponse &&
        paymentResponse.action &&
        paymentResponse.action.type &&
        (paymentResponse.action.type === "threeDS2Fingerprint" ||
          paymentResponse.action.type === "redirect") && (
          <PaymentThreeDS
            environment={environment}
            clientKey={clientKey}
            action={paymentResponse.action}
          />
        )}
    </>
  );
};

Checkout.propTypes = {
  apiUrl: PropTypes.string,
  successReturnUrl: function(props, propName) {
    if((props.customerData.form_payment === 'debit' || props.customerData.active_3ds) && (props[propName] === undefined || typeof(props[propName]) !== 'string')) {
      return new Error('Please provide a successReturnUrl string!');
    }
  },
  errorReturnUrl: function(props, propName) {
    if((props.customerData.form_payment === 'debit' || props.customerData.active_3ds) && (props[propName] === undefined || typeof(props[propName]) !== 'string')) {
      return new Error('Please provide a errorReturnUrl string!');
    }
  },
  sellerKey: PropTypes.string.isRequired,
  clientKey: PropTypes.string.isRequired,
  environment: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func,
  beforeSubmit: PropTypes.func,
  afterSubmit: PropTypes.func,
  customerData: PropTypes.shape({
    amount_cents: PropTypes.number,
    description: PropTypes.string,
    form_payment: PropTypes.oneOf(["credit", "debit"]),
    installment_plan: PropTypes.shape({
      number_installments: PropTypes.number,
    }),
    customer: PropTypes.shape({
      email: PropTypes.string,
      ip: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      document: PropTypes.string,
      billing_address: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
        house_number_or_name: PropTypes.string,
        postal_code: PropTypes.string,
        state: PropTypes.string,
        street: PropTypes.string,
      }),
    }),
    sale_id: PropTypes.string,
    active_3ds: PropTypes.bool,
    risk_custom_field: PropTypes.string,
    extract_identification: PropTypes.string,
    has_split_rules: PropTypes.bool,
    service_id: PropTypes.string,
    protocol: PropTypes.string,
    split_rules: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        seller_id: PropTypes.string.isRequired,
        no_cost: PropTypes.bool,
        description: PropTypes.string
      }).isRequired
    ),
    recurrence: PropTypes.bool,
    recurrence_day: PropTypes.number
  }).isRequired,
  showPayButton: PropTypes.bool
};

export default Checkout;
