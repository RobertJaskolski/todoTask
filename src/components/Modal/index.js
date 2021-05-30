import React from 'react';
import ReactDOM from 'react-dom';
import { Flex, Box, Input, Label, Radio, Button, Close } from 'theme-ui';

function ModalUser({ isOpen, onClose }) {
  const modalContainer = document.getElementById('modal');
  return isOpen
    ? ReactDOM.createPortal(
        <Flex
          sx={{
            position: 'absolute',
            top: 0,
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            backgroundColor: 'rgba(0,0,0, 0.3)',
          }}
        >
          <Box
            sx={{
              flexBasis: ['80%', '70%', '35%', '25%'],
              backgroundColor: 'white',
              padding: ['30px 10px', '20px 50px 50px 50px'],
            }}
          >
            <form>
              <Flex sx={{ justifyContent: 'flex-end' }}>
                <Close onClick={onClose} />
              </Flex>
              <Label>
                <Box sx={{ width: '100px' }}>Nazwa:</Box>
                <Input placeholder='Wpisz nazwę...' />
              </Label>
              <Label>
                <Box sx={{ width: '100px' }}>Email:</Box>
                <Input type='email' placeholder='Wpisz email...' />
              </Label>
              <Label sx={{ justifyContent: 'flex-start' }}>
                <Box sx={{ width: '125px' }}>Mężczyzna</Box>
                <Radio name='gender' value='true' />
              </Label>
              <Label sx={{ justifyContent: 'flex-start' }}>
                <Box sx={{ width: '125px' }}>Kobieta</Box>
                <Radio name='gender' value='true' />
              </Label>
              <Button type='submit' sx={{ width: '100%' }}>
                Zapisz
              </Button>
            </form>
          </Box>
        </Flex>,
        modalContainer
      )
    : null;
}

export default ModalUser;
