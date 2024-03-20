# Parcela Express Checkout Component

[![npm](https://img.shields.io/npm/v/@parcelaexpress/checkout-react-component.svg)](http://npm.im/@parcelaexpress/checkout-react-component.svg)

## Instalação

Siga as instruções abaixo para realizar a instalação do componente em sua aplicação.

### NPM

Instale o componente [Parcela Checkout Component](https://www.npmjs.com/package/@parcelaexpress/checkout-react-component):

```sh
npm install @parcelaexpress/checkout-react-component --save
```
Ou

```sh
yarn add @parcelaexpress/checkout-react-component
```

## Uso

```jsx
import React from 'react';
import Checkout from '@parcelaexpress/checkout-react-component';

const App = () => {
  const checkoutSubmitHandle = (state) => {
    alert(JSON.stringify(state));
  };

  const checkoutOnChangeHandle = (state) => {
    console.log('state', state);
  };

  const onErrorHandle = (err) => {
    console.log(err);

    return;
  };

  return (
    <Checkout
      environment={'TEST'}
      apiUrl={'https://sandbox.parcelaexpress.com.br'}
      customerData={{
        amount_cents: 1000,
        description: 'Venda Teste',
        form_payment: 'debit',
        installment_plan: {
          number_installments: 1
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
            seller_id: '741d17b7-3e7c-493a-8d8c-f91b423c2a79',
            description: 'Descrição Teste'
          },
          {
            amount: 5000,
            seller_id: '5a6cda6a-8b90-417a-95de-982550bccfdf'
          }
        ],
        confirmation_required: false,
        active_3ds: true,
        extract_identification: 'Cartório Exemplo',
        service_id: 'seu id(opcional)',
        protocol: 'PROTOCOLO123658 (opcional)'
      }}
      sellerKey={'key'}
      clientKey={'clientKey'}
      onSubmit={checkoutSubmitHandle}
      onChange={checkoutOnChangeHandle}
      onSubmitError={onErrorHandle}
      successReturnUrl={'http://success-url.com.br'}
      errorReturnUrl={'http://error-url.com.br'}
      showPayButton={true}
    />
  );
};
```

Os campos has_split_rules e split_rules(opcionais) são usados para dividir o valor da venda entre os estabelecimentos.

## Props

| PropName           | Tipo     | Obrigatório | Descrição                                                                                                    |
| ------------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `apiUrl`           | string   | Sim         | URL da API.                                                                                                  |
| `successReturnUrl` | string   | Condicional | URL de retorno em caso de sucesso. Obrigatório se `form_payment` for 'debit' ou `active_3ds` for verdadeiro. |
| `errorReturnUrl`   | string   | Condicional | URL de retorno em caso de erro. Obrigatório se `form_payment` for 'debit' ou `active_3ds` for verdadeiro.    |
| `sellerKey`        | string   | Sim         | sellerKey.                                                                                                   |
| `clientKey`        | string   | Sim         | clientKey.                                                                                                   |
| `environment`      | string   | Sim         | Ambiente de execução.                                                                                        |
| `onSubmit`         | function | Sim         | Função a ser executada ao enviar o pagamento.                                                                |
| `onChange`         | function | Sim         | Função a ser executada ao alterar o componente.                                                              |
| `onSubmitError`    | function | Não         | Função a ser executada em caso de erro no envio.                                                             |
| `beforeSubmit`     | function | Não         | Função a ser executada antes do envio.                                                                       |
| `afterSubmit`      | function | Não         | Função a ser executada após o envio.                                                                         |
| `customerData`     | object   | Sim         | Dados do cliente. Consulte abaixo para detalhes sobre seus subcampos.                                        |
| `showPayButton`    | bool     | Não         | Define se o botão de pagamento será exibido.                                                                 |
| `shopper`          | object   | Não         | Detalhes do pagador                                                                                          |

### `customerData` Subcampos:

- `amount_cents` (number): Valor em centavos da compra. **(Obrigatório)**
- `description` (string): Descrição da compra. **(Obrigatório)**
- `form_payment` (string): Método de pagamento ('credit' ou 'debit'). **(Obrigatório)**
- `installment_plan` (object): Parcelamento. _(Opcional)_
  - `number_installments` (number): Número de parcelas. _(Opcional)_
- `customer` (object): Informações do cliente. **(Obrigatório)**
  - Consulte abaixo para detalhes.
- `sale_id` (string): ID da venda. _(Opcional)_
- `active_3ds` (bool): Indica se a autenticação 3D Secure está ativa. _(Opcional)_
- `risk_custom_field` (string): Campo personalizado de risco. _(Opcional)_
- `extract_identification` (string): Identificação no extrato. _(Opcional)_
- `has_split_rules` (bool): Indica se a venda possui regras de divisão. _(Opcional)_
- `service_id` (string): ID do serviço. _(Opcional)_
- `protocol` (string): Protocolo. _(Opcional)_
- `split_rules` (array): Regras de divisão da venda. _(Opcional)_
  - Consulte abaixo para detalhes.
- `recurrence` (bool): Indica se a venda é recorrente. _(Opcional)_
- `recurrence_day` (number): Dia da recorrência. _(Opcional)_

### `customerData.customer` Subcampos:

- `email` (string): Email do cliente. **(Obrigatório)**
- `ip` (string): Endereço IP do cliente. **(Obrigatório)**
- `first_name` (string): Primeiro nome do cliente. **(Obrigatório)**
- `last_name` (string): Sobrenome do cliente. **(Obrigatório)**
- `document` (string): Documento do cliente. **(Obrigatório)**
- `billing_address` (object): Endereço de cobrança do cliente. **(Obrigatório)**
  - Consulte abaixo para detalhes.

### `customerData.customer.billing_address` Subcampos:

- `city` (string): Cidade do cliente. **(Obrigatório)**
- `country` (string): País do cliente. **(Obrigatório)**
- `house_number_or_name` (string): Número ou nome do prédio do cliente. **(Obrigatório)**
- `postal_code` (string): Código postal do cliente. **(Obrigatório)**
- `state` (string): Estado do cliente. **(Obrigatório)**
- `street` (string): Rua do cliente. **(Obrigatório)**
