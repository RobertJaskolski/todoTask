import React from 'react';
import PropTypes from 'prop-types';
import { Box, Switch, Input, Flex } from 'theme-ui';

function FiltersList({
  completed,
  handleToggleCompleted,
  my,
  handleToggleMy,
  handleOnChangeSearchText,
  search,
}) {
  return (
    <Box sx={{ width: '92%', margin: '0px auto', color: 'forms' }}>
      <Flex
        sx={{
          flexWrap: 'wrap',
          margin: '20px auto',
        }}
      >
        <Box
          sx={{
            fontWeight: 'bold',
            padding: '0px 20px',
            opacity: 0.9,
            flexBasis: ['100%', null, '48%'],
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
            flexBasis: ['100%', null, '48%'],
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
        <Box
          sx={{
            fontWeight: 'bold',
            padding: '0px 20px',
            opacity: 0.9,
            flexBasis: ['100%'],
            mb: ['10px', null, '0px'],
          }}
        >
          <Input
            value={search}
            onChange={handleOnChangeSearchText}
            placeholder='Wyszukaj po treści...'
            sx={{ margin: '0px' }}
          />
        </Box>
      </Flex>
    </Box>
  );
}

FiltersList.propTypes = {
  completed: PropTypes.bool.isRequired,
  handleToggleCompleted: PropTypes.func.isRequired,
  my: PropTypes.bool.isRequired,
  handleToggleMy: PropTypes.func.isRequired,
  handleOnChangeSearchText: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default FiltersList;
