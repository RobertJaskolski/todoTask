import React from 'react';
import { Box, Flex } from 'theme-ui';

function InfoAboutTasks() {
  return (
    <Flex>
      <Box
        sx={{
          fontWeight: 'bold',
          padding: '10px 20px',
          backgroundColor: 'softGreen',
          borderRadius: '5px',
          boxShadow: '0 0 5px green',
          opacity: 0.9,
        }}
      >
        Zakończone / 12
      </Box>
      <Box
        sx={{
          ml: '20px',
          fontWeight: 'bold',
          padding: '10px 20px',
          backgroundColor: 'lightRed',
          borderRadius: '5px',
          boxShadow: '0 0 5px red',
          opacity: 0.9,
        }}
      >
        Niezakończone / 12
      </Box>
    </Flex>
  );
}

export default InfoAboutTasks;
