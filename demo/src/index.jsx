import React, { useEffect } from 'react';

import { createRoot } from 'react-dom/client';
import { Flex, Image, Stack, ChakraProvider, Icon, Text, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import Checkout from '../../src';
import Loader from './loader';

const Demo = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [finishedPayment, setFinishedPayment] = React.useState(false);

  const handleRefresh = () => {
    window.location.href = window.location.origin + window.location.pathname;
  };

  const checkoutSubmitHandle = (state, component, data) => {
    console.log(data);
    if (data.resultCode === 'Authorised') {
      setFinishedPayment(true);
    }
  };

  const checkoutOnChangeHandle = (state) => {
    console.log('checkoutOnChangeHandle');
    console.log('state', state);
  };

  const onErrorHandle = (err) => {
    console.log(err);

    return;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const finishedValue = urlParams.get('finished');
    const error = urlParams.get('error');

    if (finishedValue === 'true') {
      setFinishedPayment(true);
    }
    if (error === 'true') {
      alert('Erro na autenticação 3DS')
    }
  }, []);

  return (
    <ChakraProvider>
      <Flex w={`100%`} h={`100vh`} alignItems={`center`} justifyContent={`center`}>
        <Stack isInline spacing={5} justifyContent={`center`}>
          {!finishedPayment ? (
            <>
              <Flex flexDir={`column`}>
                <Image
                  w={200}
                  objectFit="cover"
                  src="https://parcelaexpress-all-pos-web.s3.amazonaws.com/logo/cart.png"
                  alt="Cart Express"
                />
              </Flex>
              <Flex w={`50%`} borderWidth={1} borderColor={`#ccc`} rounded={`xl`} p={10}>
                <Checkout
                  environment={'TEST'}
                  apiUrl={`https://sandbox.parcelaexpress.com.br`}
                  customerData={{
                    amount_cents: 20000,
                    description: 'Venda Teste',
                    form_payment: 'debit',
                    installment_plan: {
                      number_installments: 1
                    },
                    customer: {
                      email: 'teste@fulano.com.br',
                      ip: '99.106.129.24',
                      first_name: 'Testando',
                      last_name: 'Teste',
                      document: '29896147027',
                      billing_address: {
                        city: 'Belo Horizonte',
                        country: 'BR',
                        house_number_or_name: '10',
                        postal_code: '31010500',
                        state: 'MG',
                        street: 'Rua Adamina'
                      }
                    },
                    has_split_rules: false,
                    split_rules: [
                      {
                        amount: 10000,
                        seller_id: '741d17b7-3e7c-493a-8d8c-f91b423c2a79',
                        description: 'Descrição do split'
                      },
                      {
                        amount: 5000,
                        seller_id: '5a6cda6a-8b90-417a-95de-982550bccfdf'
                      }
                    ],
                    confirmation_required: false,
                    active_3ds: false,
                    extract_identification: 'Cartório exemplo',
                    service_id: 'seu id (opcional)',
                    protocol: 'PROTOCOLO123658',
                    recurrence: false,
                    recurrence_day: 10
                  }}
                  sellerKey={'741d17b7-3e7c-493a-8d8c-f91b423c2a79'}
                  clientKey={'test_IBIF7UD6SNB7ZJG3KVEGM3UP5M57BJ4B'}
                  onSubmit={checkoutSubmitHandle}
                  onChange={checkoutOnChangeHandle}
                  onSubmitError={onErrorHandle}
                  beforeSubmit={() => setIsLoading(true)}
                  afterSubmit={() => setIsLoading(false)}
                  successReturnUrl={'https://sandbox.parcelaexpress.com.br?finished=true'}
                  errorReturnUrl={'https://sandbox.parcelaexpress.com.br?error=true'}
                  showPayButton={true}
                  maskSecurityCode={true}
                />
              </Flex>
            </>
          ) : (
            <Flex
              direction="column"
              align="center"
              justify="center"
              p={8}
              borderRadius="md"
              boxShadow="md"
              maxW="md"
              mx="auto"
              my={10}
              textAlign="center"
            >
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                Pagamento concluído
              </Text>
              <Icon as={CheckCircleIcon} w={12} h={12} color="green.500" mb={4} />
              <Button colorScheme="blue" onClick={handleRefresh} mt={4}>
                Testar Novamente
              </Button>
            </Flex>
          )}
        </Stack>
      </Flex>
      <Loader isOpen={isLoading} />
    </ChakraProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Demo />, document.querySelector('#root'));
