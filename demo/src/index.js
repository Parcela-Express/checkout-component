import React from 'react'

import { render } from 'react-dom'
import { Flex, Image, Stack } from '@chakra-ui/react';

import Checkout from '../../src'

const Demo = () => {
  const checkoutSubmitHandle = (state) => {
    alert(JSON.stringify(state));

    console.log(state);
  };

  const checkoutOnChangeHandle = (state) => {
    console.log('checkoutOnChangeHandle');
    console.log('state', state)
  };

  return (
    <Flex w={`100%`} h={`100vh`} alignItems={`center`} justifyContent={`center`}>
      <Stack isInline spacing={5} justifyContent={`center`}>
        <Flex flexDir={`column`}>
          <Image
            w={200}
            objectFit="cover"
            src="https://parcelaexpress-all-pos-web.s3.amazonaws.com/logo/cart.png"
            alt="Cart Express"
          />          
        </Flex>      
        <Flex w={`50%`} borderWidth={1} borderColor={`#ccc`} rounded={`xl`} p={10}>
          <Checkout environment={'TEST'} 
            clientKey={'test_IBIF7UD6SNB7ZJG3KVEGM3UP5M57BJ4B'}
            onSubmit={checkoutSubmitHandle} 
            onChange={checkoutOnChangeHandle} />
        </Flex>
      </Stack>
    </Flex>
  )
}
  
render(<Demo/>, document.querySelector('#demo'))
