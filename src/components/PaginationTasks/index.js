import React from 'react';
import { Flex, Box, Select, IconButton, Grid } from 'theme-ui';
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';

function PaginationTasks() {
  return (
    <Flex
      sx={{ alignItems: 'center', justifyContent: 'space-between', p: '20px' }}
    >
      <Box sx={{ fontSize: 1 }}>Wyniki: 1 do 20 z 1000</Box>
      <Grid columns={[5]}>
        <IconButton>
          <BsChevronDoubleLeft />
        </IconButton>
        <IconButton>
          <BsChevronLeft />
        </IconButton>
        <Select sx={{ width: '45px' }}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'> 3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </Select>
        <IconButton>
          <BsChevronRight />
        </IconButton>
        <IconButton>
          <BsChevronDoubleRight />
        </IconButton>
      </Grid>
    </Flex>
  );
}

export default PaginationTasks;
