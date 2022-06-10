# Parcela Express Checkout Component

[![npm](https://img.shields.io/npm/v/@parcelaexpress/checkout-react-component.svg)](http://npm.im/@parcelaexpress/checkout-react-component.svg)

## Instalação

Siga as instruções abaixo para realizar a instalação do componente em sua aplicação.

### NPM

1. Instale o componente [Parcela Checkout Component](https://www.npmjs.com/package/@parcelaexpress/checkout-react-component):

  ```sh
  npm install @parcelaexpress/checkout-react-component --save
  ```

2. Importe o componente dentro de sua aplicação:

  ```jsx
  import Checkout from '@parcelaexpress/checkout-react-component';

  const App = () => {
    const checkoutSubmitHandle = (state) => {
      alert(JSON.stringify(state));
    };

    const checkoutOnChangeHandle = (state) => {      
      console.log('state', state)
    };

    const onErrorHandle = (err) => {
      console.log(err);

      return;
    };

    return (
      <Checkout environment={'TEST'} 
        customerData={{
          amount_cents: 1000,
          description: 'Venda Teste',
          form_payment: 'debit',
          installment_plan: {
            number_installments: 1,
          },
          customer: {
            email: 'email@email.com.br',
            ip: '00.000.000.00',
            first_name: 'Testando',
            last_name: 'Teste',
            document: '00000000000',
            billing_address: {
              city: 'São Paulo',
              country: 'BR',
              house_number_or_name: '10',
              postal_code: '0000000',
              state: 'SP',
              street: 'Rua Teste'
            }
          },
          has_split_rules: true,
          split_rules: [
            {
              amount: 10000,
              seller_id: "741d17b7-3e7c-493a-8d8c-f91b423c2a79",
              description: "Descrição Teste"
            },
            {
              amount: 5000,
              seller_id: "5a6cda6a-8b90-417a-95de-982550bccfdf",
              no_cost: true
            },
          ],
          confirmation_required: false       
        }}
        sellerKey={'key'}
        clientKey={'clientKey'}
        onSubmit={checkoutSubmitHandle} 
        onChange={checkoutOnChangeHandle}
        onSubmitError={onErrorHandle}
        successReturnUrl={"http://success-url.com.br"}
        errorReturnUrl={"http://error-url.com.br"}
        showPayButton={true}
      />
    );
  }
  
  ```

  Os campos has_split_rules e split_rules(opcionais) são usados para dividir o valor da venda entre os estabelecimentos