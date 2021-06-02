import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Switch } from 'theme-ui';

function InfoAboutTodos({
  completed,
  totalCompleted,
  totalUncompleted,
  handleToggleCompleted,
  my,
  handleToggleMy,
}) {
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <Box
        sx={{
          flexBasis: ['80%', null, '40%'],
          fontSize: [3, null, 1, 2],
          ml: '10px',
          mb: '10px',
          fontWeight: 'bold',
          padding: '10px 20px',
          backgroundColor: 'softGreen',
          borderRadius: '5px',
          boxShadow: '0 0 5px green',
          opacity: !completed ? 0.9 : 0,
        }}
      >
        Zakończone: {totalCompleted}
      </Box>
      <Box
        sx={{
          flexBasis: ['80%', null, '40%'],
          fontSize: [3, null, 1, 2],
          ml: '10px',
          mb: '10px',
          fontWeight: 'bold',
          padding: '10px 20px',
          backgroundColor: 'lightRed',
          borderRadius: '5px',
          boxShadow: '0 0 5px red',
          opacity: !completed ? 0.9 : 0,
        }}
      >
        Niezakończone: {totalUncompleted}
      </Box>
      <Box
        sx={{
          fontWeight: 'bold',
          padding: '0px 20px',
          opacity: 0.9,
          flexBasis: ['100%'],
        }}
      >
        <Switch
          defaultChecked={completed}
          onChange={handleToggleCompleted}
          label='Ukryj zakończone'
          aria-label='Ukryj zakończone'
        />
      </Box>
      <Box
        sx={{
          fontWeight: 'bold',
          padding: '0px 20px',
          opacity: 0.9,
          flexBasis: ['100%'],
          mb: ['10px', null, '0px'],
        }}
      >
        <Switch
          defaultChecked={my}
          onChange={handleToggleMy}
          label='Pokaż moje'
          aria-label='Pokaż moje'
        />
      </Box>
    </Flex>
  );
}

InfoAboutTodos.propTypes = {
  completed: PropTypes.bool.isRequired,
  totalCompleted: PropTypes.number.isRequired,
  totalUncompleted: PropTypes.number.isRequired,
  handleToggleCompleted: PropTypes.func.isRequired,
  my: PropTypes.bool.isRequired,
  handleToggleMy: PropTypes.func.isRequired,
};

export default InfoAboutTodos;
