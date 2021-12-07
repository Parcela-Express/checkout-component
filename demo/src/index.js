import React from "react";

import { render } from "react-dom";
import { Flex, Image, Stack, ChakraProvider } from "@chakra-ui/react";

import Checkout from "../../src";
import Loader from "./loader";

const Demo = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const checkoutSubmitHandle = (state, component, data) => {
    console.log(data);
  };

  const checkoutOnChangeHandle = (state) => {
    console.log("checkoutOnChangeHandle");
    console.log("state", state);
  };

  const onErrorHandle = (err) => {
    console.log(err);

    return;
  };

  return (
    <ChakraProvider>
      <Flex
        w={`100%`}
        h={`100vh`}
        alignItems={`center`}
        justifyContent={`center`}
      >
        <Stack isInline spacing={5} justifyContent={`center`}>
          <Flex flexDir={`column`}>
            <Image
              w={200}
              objectFit="cover"
              src="https://parcelaexpress-all-pos-web.s3.amazonaws.com/logo/cart.png"
              alt="Cart Express"
            />
          </Flex>
          <Flex
            w={`50%`}
            borderWidth={1}
            borderColor={`#ccc`}
            rounded={`xl`}
            p={10}
          >
            <Checkout
              environment={"TEST"}
              apiUrl={`http://a892-189-15-42-40.ngrok.io`}
              customerData={{
                amount_cents: 20000,
                description: "Venda Teste",
                form_payment: "debit",
                installment_plan: {
                  number_installments: 1,
                },
                customer: {
                  email: "teste@fulano.com.br",
                  ip: "99.106.129.24",
                  first_name: "Testando",
                  last_name: "Teste",
                  document: "29896147027",
                  billing_address: {
                    city: "Belo Horizonte",
                    country: "BR",
                    house_number_or_name: "10",
                    postal_code: "31010500",
                    state: "MG",
                    street: "Rua Adamina",
                  },
                },
                sale_id: "b826e94b-f76c-4e95-8d6b-6efd6e0c48e7",
                has_split_rules: true,
                split_rules: [
                  {
                    amount: 10000,
                    seller_id: "741d17b7-3e7c-493a-8d8c-f91b423c2a79",
                  },
                  {
                    amount: 5000,
                    seller_id: "5a6cda6a-8b90-417a-95de-982550bccfdf",
                  },
                ],
              }}
              sellerKey={"e137d1b6-8f84-4377-ab5c-d27dd24415bd"}
              clientKey={"test_IBIF7UD6SNB7ZJG3KVEGM3UP5M57BJ4B"}
              onSubmit={checkoutSubmitHandle}
              onChange={checkoutOnChangeHandle}
              onSubmitError={onErrorHandle}
              beforeSubmit={() => setIsLoading(true)}
              afterSubmit={() => setIsLoading(false)}
            />
          </Flex>
        </Stack>
      </Flex>
      <Loader isOpen={isLoading} />
    </ChakraProvider>
  );
};

render(<Demo />, document.querySelector("#demo"));
