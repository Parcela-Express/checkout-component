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
          }            
        }}
        sellerKey={'key'}
        clientKey={'clientKey'}
        onSubmit={checkoutSubmitHandle} 
        onChange={checkoutOnChangeHandle}
        onSubmitError={onErrorHandle} />
    );
  }
  
  ```