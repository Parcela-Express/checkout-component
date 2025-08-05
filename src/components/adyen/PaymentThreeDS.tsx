import React from 'react';
import PropTypes from 'prop-types';

import { AdyenCheckout, CoreConfiguration, ThreeDS2Challenge, ThreeDS2ChallengeConfiguration } from '@adyen/adyen-web';
import './adyen.css'


const PaymentThreeDS = ({ action, environment, clientKey }) => {
  const configuration: CoreConfiguration = {
    locale: 'pt-br',
    countryCode: 'pt-br',
    environment,
    clientKey,
    onAdditionalDetails: () => {},
    onPaymentCompleted: () => {},
    onPaymentFailed: () => {}
  };
  
  const threeDSConfiguration: ThreeDS2ChallengeConfiguration = {
    size: '02',
    onError: (e) => console.log(e),
  };
  
  React.useEffect(() => {
    const mountThreeDs = async () => {
      const threeDsDiv = document.createElement('div');
      const checkoutComponent = document.getElementById('checkout-container');
      threeDsDiv.setAttribute('id', 'three-checkout');
      const container = checkoutComponent?.parentNode;
      container?.insertBefore(threeDsDiv, checkoutComponent);

      try {
        const checkout = await AdyenCheckout(configuration);
    
        checkout.createFromAction(action, threeDSConfiguration).mount('#three-checkout');
      } catch (error) {
        console.log(error)
        console.log(JSON.stringify(error))
      }
    }

    if (action) {
      mountThreeDs();
    }
  }, [action, configuration]);
};

PaymentThreeDS.propTypes = {
  environment: PropTypes.string.isRequired,
  clientKey: PropTypes.string.isRequired,
  action: PropTypes.any
};

export default PaymentThreeDS;
