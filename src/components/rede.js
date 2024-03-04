import React from 'react';
import { useState, useEffect } from 'react';
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
import VisaSvg from '../icons/visa';
import McSvg from '../icons/mc';
import EloSvg from '../icons/elo';
import AmexSvg from '../icons/amex';
import HiperSvg from '../icons/hiper';
import { encryptData } from '../services/encrypt';
import { getBrowserInfo } from '../services/browserInfo';
import {
  detectCardType,
  validateCardNumber,
  formatCardNumber,
  formatExpiry,
  isValidExpiryDate,
  isValidExpiryFormat
} from '../services/cardUtils';

const Rede = (props) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumberValid, setCardNumberValid] = useState(false);
  const [expiryValid, setExpiryValid] = useState(false);
  const [cvcValid, setCvcValid] = useState(false);
  const [cardHolderNameValid, setCardHolderNameValid] = useState(false);
  const [cardIcon, setCardIcon] = useState(<NoCardSvg />);

  useEffect(() => {
    propsOnchange();
  }, [cardNumberValid, expiryValid, cvcValid, cardHolderNameValid]);

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const cardType = detectCardType(input);
    const cardIcons = {
      visa: <VisaSvg />,
      mc: <McSvg />,
      elo: <EloSvg />,
      amex: <AmexSvg />,
      hipercard: <HiperSvg />,
      maestro: <McSvg />,
      default: <NoCardSvg />
    };
    setCardIcon(cardIcons[cardType]);
    if (input.length <= 19) {
      const formattedInput = formatCardNumber(input);
      const isValid = validateCardNumber(input);
      setCardNumber(formattedInput);
      setCardNumberValid(isValid);
    }
  };

  const handleExpiryChange = (e) => {
    const input = e.target.value;
    const formattedInput = formatExpiry(input);
    const isValidFormat = isValidExpiryFormat(formattedInput);
    const isValidExpiry = isValidExpiryDate(formattedInput);
    setExpiryValid(isValidFormat && isValidExpiry);
    setExpiry(formattedInput);
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

  const propsOnchange = () => {
    const [month, year] = expiry.split('/');
    const isValid = !!(cardHolderNameValid && cardNumberValid && expiryValid && cvcValid);
    const state = {
      isValid,
      data: {
        paymentMethod: {
          encryptedCardNumber: encryptData(cardNumber) || '',
          encryptedExpiryMonth: encryptData(month) || '',
          encryptedExpiryYear: encryptData(year) || '',
          encryptedSecurityCode: encryptData(cvc) || ''
        },
        browserInfo: getBrowserInfo()
      }
    };
    return props.onChange(state);
  };

  const handleSubmit = () => {
    if (cardHolderNameValid && cardNumberValid && expiryValid && cvcValid) {
      const [month, year] = expiry.split('/');
      const encryptedCardNumber = encryptData(cardNumber);
      const encryptedExpiryMonth = encryptData(month);
      const encryptedExpiryYear = encryptData(year);
      const encryptedSecurityCode = encryptData(cvc);
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
            <InputRightElement w={'27px'} mr={2} pointerEvents="none">
              {cardIcon}
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
