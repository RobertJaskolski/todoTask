import React, { useState } from 'react';
import { Flex, Box, Switch, useColorMode, Button } from 'theme-ui';
import UserForm from '../UserForm';

// Hocs
import WithModal from '../../hoc/WithModal';

const UserFormModal = WithModal(UserForm);

function Header() {
  const [colorMode, setColorMode] = useColorMode();
  const [showModal, setShowModal] = useState(false);
  const handleChangeColor = (e) => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default');
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Box
      as='header'
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        padding: '10px 15px',
        zIndex: '10',
      }}
    >
      <Flex as='nav' sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Button
            aria-label='Konfiguracja konta'
            variant='primary'
            onClick={handleToggleModal}
          >
            Konfiguracja konta
          </Button>
        </Box>
        <Box>
          <Switch onChange={handleChangeColor} />
        </Box>
      </Flex>
      <UserFormModal onClose={handleToggleModal} isOpen={showModal} />
    </Box>
  );
}

export default Header;
