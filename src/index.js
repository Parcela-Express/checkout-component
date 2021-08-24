import React from "react";

import AdyenCheckout from "@adyen/adyen-web";

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

export default (props) => {
  const { environment, clientKey, theme } = props;

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
    showPayButton: true,
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

  React.useLayoutEffect(() => {
    const card = new AdyenCheckout(configuration);

    const callbacks = {};

    if (props.onChange && typeof props.onChange === "function") {
      callbacks.onChange = (state, component) => {
        return props.onChange(state);
      };
    }

    if (props.onSubmit && typeof props.onSubmit === "function") {
      callbacks.onSubmit = (state, component) => {
        return props.onSubmit(state, component);
      };
    }
    card.create("card", callbacks).mount("#checkout-container");
  });

  return <div id="checkout-container" />;
};
