import * as React from 'react';

import { 
  Spinner, 
  Box, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalBody
} from '@chakra-ui/react';

const Loader = (props) => {
  const { isOpen } = props;

  if (!isOpen) {
    return <></>;
  }
  return (
    <Modal isOpen={isOpen} onClose={() => {}} closeOnOverlayClick={true} closeOnEsc={false} isCentered={true}>
      <ModalOverlay />
      <ModalContent width={`auto`}>
        <ModalBody px={4}>
          <Box bgColor={props.bgColor || `#fff`} p={1}>
            <Spinner thickness='4px' speed='0.3s' emptyColor='gray.200' color='blue.500' size='md' mt={1} />
          </Box>	
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Loader;
