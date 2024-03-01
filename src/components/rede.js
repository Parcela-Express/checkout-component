import React from 'react';
import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
  Stack,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { FaLock } from 'react-icons/fa';
import CvcSvg from '../icons/cvc';
import NoCardSvg from '../icons/nocard';

const Rede = (props) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumberValid, setCardNumberValid] = useState(false);
  const [expiryValid, setExpiryValid] = useState(false);
  const [cvcValid, setCvcValid] = useState(false);
  const [cardHolderNameValid, setCardHolderNameValid] = useState(false);

  const validateCardNumber = (number) => {
    const cardNumber = number.replace(/\s/g, '');
    let sum = 0;
    let doubleUp = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
      if (doubleUp) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      doubleUp = !doubleUp;
    }

    return sum % 10 === 0;
  };

  const formatCardNumber = (number) => {
    return number
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    if (input.length <= 19) {
      const formattedInput = formatCardNumber(input);
      setCardNumber(formattedInput);
      if (!validateCardNumber(input)) {
        setCardNumberValid(false);
      } else {
        setCardNumberValid(true);
      }
    }
  };

  const handleExpiryChange = (e) => {
    const input = e.target.value;
    const formattedInput = input
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d{0,2})/, '$1/$2')
      .replace(/^(\d{2})\/(\d{2}).*/, '$1/$2');
    setExpiry(formattedInput);
    const isValidFormat = /^(0[1-9]|1[0-2])\/\d{2}$/.test(formattedInput);
    if (isValidFormat) {
      const [month, year] = formattedInput.split('/');
      const currentYear = new Date().getFullYear().toString().slice(-2);
      const currentMonth = new Date().getMonth() + 1;
      if (
        parseInt(year, 10) < parseInt(currentYear, 10) ||
        (parseInt(year, 10) === parseInt(currentYear, 10) && parseInt(month, 10) < currentMonth)
      ) {
        setExpiryValid(false);
      } else {
        setExpiryValid(true);
      }
    } else {
      setExpiryValid(false);
    }
  };

  const handleCvcChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/\D/g, '');
    setCvc(formattedInput);
    setCvcValid(/^\d{3,4}$/.test(input));
  };

  const handleCardHolderNameChange = (e) => {
    const input = e.target.value;
    setCardHolderName(input);
    setCardHolderNameValid(input.trim() !== '');
  };

  const handleSubmit = () => {
    if (cardHolderNameValid && cardNumberValid && expiryValid && cvcValid) {
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <Box width="full">
      <Stack spacing={4} fontFamily="Open Sans">
        <FormControl isInvalid={!cardNumberValid && cardNumber.length}>
          <FormLabel fontSize="0.875rem" fontWeight="600">
            Número do cartão
          </FormLabel>
          <InputGroup>
            <Input
              autocomplete="cc-number"
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 5678 9012 3456"
              fontSize="12px"
              fontWeight="400"
              color="#90a2bd"
              borderColor={cardNumberValid && cardNumber?.length === 19 ? 'green.500' : ''}
            />
            <InputRightElement pointerEvents="none">
              <NoCardSvg />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage fontSize="12px" fontWeight="400">
            {!cardNumberValid ? 'Número de cartão inválido' : ''}
          </FormErrorMessage>
        </FormControl>

        <Flex justify="space-between">
          <FormControl flex="1" isInvalid={!expiryValid && expiry.length}>
            <FormLabel noOfLines={1} fontSize="0.875rem" fontWeight="600" marginInlineEnd="0">
              Data de validade
            </FormLabel>
            <Input
              autocomplete="cc-exp"
              type="text"
              value={expiry}
              onChange={handleExpiryChange}
              placeholder="MM/AA"
              fontSize="12px"
              fontWeight="400"
              color="#90a2bd"
              borderColor={expiryValid && expiry?.length === 5 ? 'green.500' : ''}
            />
            <FormErrorMessage fontSize="12px" fontWeight="400">
              {!expiryValid ? 'Data inválida' : ''}
            </FormErrorMessage>
          </FormControl>

          <FormControl flex="1" ml={4} isInvalid={!cvcValid && cvc.length}>
            <FormLabel fontSize="0.875rem" fontWeight="600" marginInlineEnd="0">
              CVC / CVV
            </FormLabel>

            <InputGroup>
              <Input
                autocomplete="cc-csc"
                type="text"
                value={cvc}
                onChange={handleCvcChange}
                maxLength={3}
                placeholder="123"
                fontSize="12px"
                fontWeight="400"
                color="#90a2bd"
                borderColor={cvcValid && cvc.length === 3 ? 'green.500' : ''}
              />
              <InputRightElement pointerEvents="none">
                <CvcSvg />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage fontSize="12px" fontWeight="400">
              {!cvcValid ? 'Campo incompleto' : ''}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <FormControl isInvalid={!cardHolderNameValid && cardHolderName.length}>
          <FormLabel fontSize="0.875rem" fontWeight="600">
            Nome no cartão
          </FormLabel>
          <Input
            type="text"
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            placeholder="J. Smith"
            fontSize="12px"
            fontWeight="400"
            color="#90a2bd"
            borderColor={cardHolderNameValid && cardHolderName?.length > 0 ? 'green.500' : ''}
          />
        </FormControl>

        <Button
          background="#233660"
          border="0"
          borderRadius="6px"
          color="#fff"
          cursor="pointer"
          height="48px"
          margin="0"
          padding="15px"
          textDecoration="none"
          width="100%"
          onClick={handleSubmit}
          disabled={!(cardHolderNameValid && cardNumberValid && expiryValid && cvcValid)}
          leftIcon={<FaLock />}
          transition="background .3s ease-out, box-shadow .3s ease-out"
          _focus={{
            boxShadow: '0 0 0 2px #99c2ff',
            outline: '0'
          }}
          _hover={{
            background: '#1c3045',
            boxShadow: '0 0, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14)'
          }}
        >
          Pagamento
        </Button>
      </Stack>
    </Box>
  );
};

export default Rede;
