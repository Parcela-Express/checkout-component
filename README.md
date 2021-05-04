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

    return (
        <Checkout
            environment={`TEST`}
            clientKey={process.env.MINHA_CLIENT_KEY}
            onSubmit={checkoutSubmitHandle}
            onChange={checkoutOnChangeHandle}
        />
    );
  }
  
  ```