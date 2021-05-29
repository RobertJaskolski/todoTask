import React from 'react';
import { Box, Flex, Switch, Spinner, Grid, Select, IconButton } from 'theme-ui';
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';

function SkeletonTasksListPanel() {
  return (
    <Box
      as='section'
      bg='muted'
      sx={{ flexBasis: '60%', height: '100vh', pt: 50, overflow: 'auto' }}
    >
      <Box sx={{ width: '90%', margin: '0px auto' }}>
        <Flex>
          <Box
            sx={{
              fontWeight: 'bold',
              padding: '10px 20px',
              opacity: 0.9,
            }}
          >
            <Switch label='Ukryj zakończone' />
          </Box>

          <Box
            sx={{
              width: '170px',
              ml: '20px',
              fontWeight: 'bold',
              padding: '10px 20px',
              opacity: 0.9,
            }}
          ></Box>
          <Box
            sx={{
              width: '190px',
              ml: '20px',
              fontWeight: 'bold',
              padding: '10px 20px',
              opacity: 0.9,
            }}
          ></Box>
        </Flex>
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '20px auto',
          bg: 'highlight',
          borderRadius: '5px',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            p: '20px',
            minHeight: '80px',
          }}
        >
          <Box sx={{ fontSize: 1 }}>
            Łącznie: <Spinner sx={{ width: '14px', height: '14px' }} />
          </Box>
          <Grid columns={[5]}>
            <IconButton disabled={true}>
              <BsChevronDoubleLeft />
            </IconButton>
            <IconButton disabled={true}>
              <BsChevronLeft />
            </IconButton>
            <Select disabled={true} sx={{ width: '55px' }}>
              {10 &&
                [...Array(10).keys()].map((x) => (
                  <option key={x} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
            </Select>
            <IconButton disabled={true}>
              <BsChevronRight />
            </IconButton>
            <IconButton disabled={true}>
              <BsChevronDoubleRight />
            </IconButton>
          </Grid>
        </Flex>
      </Box>
      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Spinner sx={{ width: '80%', height: '80%' }} />
      </Flex>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          p: '20px',
          minHeight: '80px',
        }}
      >
        <Box sx={{ fontSize: 1 }}>
          Łącznie: <Spinner sx={{ width: '14px', height: '14px' }} />
        </Box>
        <Grid columns={[5]}>
          <IconButton disabled={true}>
            <BsChevronDoubleLeft />
          </IconButton>
          <IconButton disabled={true}>
            <BsChevronLeft />
          </IconButton>
          <Select disabled={true} sx={{ width: '55px' }}>
            {10 &&
              [...Array(10).keys()].map((x) => (
                <option key={x} value={x + 1}>
                  {x + 1}
                </option>
              ))}
          </Select>
          <IconButton disabled={true}>
            <BsChevronRight />
          </IconButton>
          <IconButton disabled={true}>
            <BsChevronDoubleRight />
          </IconButton>
        </Grid>
      </Flex>
    </Box>
  );
}

export default SkeletonTasksListPanel;
