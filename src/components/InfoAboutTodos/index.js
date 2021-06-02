import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

function InfoAboutTodos({ completed, totalCompleted, totalUncompleted }) {
  return (
    <>
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
    </>
  );
}

InfoAboutTodos.propTypes = {
  completed: PropTypes.bool.isRequired,
  totalCompleted: PropTypes.number.isRequired,
  totalUncompleted: PropTypes.number.isRequired,
};

export default InfoAboutTodos;
