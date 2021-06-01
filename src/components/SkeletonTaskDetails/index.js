import React from 'react';
import { Flex, Box, Heading, Button, Spinner } from 'theme-ui';
import { useHistory } from 'react-router-dom';

export default function SkeletonTaskDetails({ isError }) {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'muted',
          borderRadius: '5px',
          padding: ['30px 10px 20px', '50px 20px 20px'],
          flexBasis: ['95%', '85%', '50%', '35%'],
          color: 'forms',
        }}
      >
        <Heading as='h1'>Szczegóły zadania</Heading>
        <Heading
          sx={{
            m: '20px 0px',
            textAlign: 'left',
            fontWeight: 'text',
            textTransform: 'none',
          }}
          as='h2'
        >
          <b>Tytuł:</b>{' '}
          {isError ? (
            'Wystąpił problem z siecią'
          ) : (
            <Spinner sx={{ width: '18px', height: '18px' }} />
          )}
        </Heading>
        <Heading
          sx={{
            m: '20px 0px',
            textAlign: 'left',
            fontWeight: 'text',
            textTransform: 'none',
          }}
          as='h2'
        >
          <b>Zakończone:</b> <Spinner sx={{ width: '18px', height: '18px' }} />
        </Heading>
        <Flex sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box>
            <b>Utworzono: </b>
            <Spinner sx={{ width: '12px', height: '12px' }} />
          </Box>
          <Box>
            <b>Aktualizacja: </b>
            <Spinner sx={{ width: '12px', height: '12px' }} />
          </Box>
        </Flex>
        <Flex
          sx={{ justifyContent: 'space-between', flexWrap: 'wrap', mt: '15px' }}
        >
          <Button onClick={handleGoBack} sx={{ mb: '15px' }}>
            Powrót
          </Button>
          <Box>
            <Button variant='deleted' sx={{ mr: '15px' }}>
              Usuń
            </Button>
            <Button variant='secondary'>Edytuj</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
