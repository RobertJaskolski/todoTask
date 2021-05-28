import React from 'react';
import { Flex, Box, Switch, useColorMode, Button } from 'theme-ui';

function Header() {
  const [colorMode, setColorMode] = useColorMode();

  const handleChangeColor = (e) => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default');
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
          <Button aria-label='Konfiguracja konta' variant='primary'>
            Konfiguracja konta
          </Button>
        </Box>
        <Box>
          <Switch onChange={handleChangeColor} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
