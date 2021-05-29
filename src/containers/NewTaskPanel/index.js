import React from 'react';
import { Heading, Textarea, Flex, Button, Box } from 'theme-ui';

function NewTaskPanel() {
  return (
    <Box
      as='section'
      sx={{
        flexBasis: ['100%', null, '40%'],
        minHeight: '100vh',
        pt: 100,
        pb: 50,
        position: 'relative',
      }}
    >
      <Heading as='h1' sx={{ color: 'forms' }}>
        Nowe zadanie
      </Heading>
      <Textarea placeholder='Wpisz swoje zadanie' rows={20} />
      <Flex
        sx={{
          justifyContent: 'flex-end',
          width: '80%',
          margin: '0px auto',
        }}
      >
        <Button aria-label='Dodaj zadanie' variant='secondary'>
          Dodaj zadanie
        </Button>
      </Flex>
    </Box>
  );
}

export default NewTaskPanel;
