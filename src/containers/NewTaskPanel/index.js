import React from 'react';
import { Heading, Textarea, Flex, Button, IconButton } from 'theme-ui';
import { IoIosArrowDropleft } from 'react-icons/io';
function NewTaskPanel() {
  return (
    <>
      <IconButton
        sx={{
          position: 'absolute',
          top: 50,
          right: -15,
          fontSize: '50px',
          color: 'background',
          cursor: 'pointer',
          backgroundColor: 'secondary',
          opacity: 0.7,
          transition: 'opacity 0.2s ease-in-out',
          '&:hover': {
            opacity: 1,
            cursor: 'pointer',
          },
        }}
      >
        <IoIosArrowDropleft />
      </IconButton>

      <Heading as='h1'>Nowe zadanie</Heading>
      <Textarea placeholder='Wpisz swoje zadanie' rows={20} />
      <Flex
        sx={{
          justifyContent: 'flex-end',
          width: '80%',
          margin: '0px auto',
        }}
      >
        <Button variant='secondary'>Dodaj zadanie</Button>
      </Flex>
    </>
  );
}

export default NewTaskPanel;
