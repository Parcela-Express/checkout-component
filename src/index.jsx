import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Adyen from './components/adyen';
import Rede from './components/rede';
import APIService from './services/api.service';
import { Flex, HStack, Skeleton, Stack, ChakraProvider } from '@chakra-ui/react';
import './outline.css';

const Checkout = (props) => {
  const { apiUrl, sellerKey } = props;
  const [provider, setProvider] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  if (!apiUrl) {
    throw new Error("Property 'apiUrl' is required");
  }

  if (!sellerKey) {
    throw new Error("Property 'sellerKey' is required");
  }

  useEffect(() => {
    const fetchData = async () => {
      const apiInstance = new APIService(apiUrl);

      try {
        const sellerData = await apiInstance.getSellerPaymentProvider(sellerKey);

        setProvider(sellerData.payment_provider);
      } catch (error) {
        setProvider('adyen');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderProviderComponent = () => {
    switch (provider) {
      case 'adyen':
        return <Adyen {...props} />;
      case 'rede':
        return <Rede {...props} />;
      default:
        return 'Invalid Payment Provider';
    }
  };

  return (
    <ChakraProvider>
      {isLoading ? (
        <Flex w="500px" bgColor="#fff">
          <Stack w="full" spacing={8}>
            <Skeleton height="30px" />
            <HStack>
              <Skeleton width="50%" height="30px" />
              <Skeleton width="50%" height="30px" />
            </HStack>
            <Skeleton height="30px" />
            <Skeleton height="30px" />
          </Stack>
        </Flex>
      ) : (
        renderProviderComponent()
      )}
    </ChakraProvider>
  );
};

Checkout.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  successReturnUrl: function (props, propName) {
    if (
      (props.customerData.form_payment === 'debit' || props.customerData.active_3ds) &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
      return new Error('Please provide a successReturnUrl string!');
    }
  },
  errorReturnUrl: function (props, propName) {
    if (
      (props.customerData.form_payment === 'debit' || props.customerData.active_3ds) &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
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
    form_payment: PropTypes.oneOf(['credit', 'debit']),
    installment_plan: PropTypes.shape({
      number_installments: PropTypes.number
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
        street: PropTypes.string
      })
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
