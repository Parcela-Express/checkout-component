import React from 'react';
import PropTypes from 'prop-types';

import AdyenCheckout from '@adyen/adyen-web';

import '@adyen/adyen-web/dist/adyen.css';

const threeDSConfiguration = {
  size: '02'
};

const PaymentThreeDS = ({ action, environment, clientKey }) => {
  const configuration = {
	locale: 'pt_BR',
	environment,
	clientKey,
	onAdditionalDetails: () => {},
  };

  React.useEffect(() => {
    const checkout = new AdyenCheckout(configuration);  

	checkout.createFromAction(action, threeDSConfiguration).mount('#three-checkout');
  }, [action, configuration]);

  return (
    <div id='three-checkout' />					
  );
};

PaymentThreeDS.propTypes = {
  environment: PropTypes.string.isRequired,
  clientKey: PropTypes.string.isRequired,
  action: PropTypes.any
};

export default PaymentThreeDS;
