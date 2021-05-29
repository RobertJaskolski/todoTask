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
      sx={{
        flexBasis: ['100%', null, '60%'],
        minheight: '100vh',
        maxHeight: [null, null, '100vh'],
        pt: 50,
        overflow: 'auto',
      }}
    >
      {/* INFO SECTION */}
      <Box sx={{ width: '90%', margin: '0px auto' }}>
        <Flex sx={{ flexWrap: 'wrap' }}>
          <Box
            sx={{
              flexBasis: ['80%', null, '40%'],
              fontSize: [3, null, 1, 2],
              ml: '10px',
              mb: '10px',
              fontWeight: 'bold',
              padding: '10px 20px',
              opacity: 0,
            }}
          >
            Zakończone
          </Box>
          <Box
            sx={{
              flexBasis: ['80%', null, '40%'],
              fontSize: [3, null, 1, 2],
              ml: '10px',
              mb: '10px',
              fontWeight: 'bold',
              padding: '10px 20px',
              opacity: 0,
            }}
          >
            Niezakończone:
          </Box>
          <Box
            sx={{
              fontWeight: 'bold',
              padding: '10px 20px',
              opacity: 0.9,
              flexBasis: ['100%', null, '33%'],
              mb: ['10px', null, '0px'],
            }}
          >
            <Switch label='Ukryj zakończone' />
          </Box>
        </Flex>
      </Box>
      {/* PADDING SECTION */}
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
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            p: '20px',
            minHeight: '80px',
          }}
        >
          <Box
            sx={{
              fontSize: 1,
              flexBasis: ['100%', 'auto'],
              textAlign: 'center',
              mb: ['10px', '0px'],
            }}
          >
            Łącznie: <Spinner sx={{ width: '14px', height: '14px' }} />
          </Box>
          <Flex sx={{ flexBasis: ['100%', 'auto'] }}>
            <IconButton
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px',
              }}
              disabled={true}
            >
              <BsChevronDoubleLeft />
            </IconButton>
            <IconButton
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px',
              }}
              disabled={true}
            >
              <BsChevronLeft />
            </IconButton>
            <Select sx={{ width: '60px' }}>
              {10 &&
                [...Array(10).keys()].map((x) => (
                  <option key={x} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
            </Select>

            <IconButton
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px 0px 10px',
              }}
              disabled={true}
            >
              <BsChevronRight />
            </IconButton>

            <IconButton
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px',
              }}
              disabled={true}
            >
              <BsChevronDoubleRight />
            </IconButton>
          </Flex>
        </Flex>
      </Box>
      {/* SPINNER SECTION */}
      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Spinner sx={{ width: '80%', height: '80%' }} />
      </Flex>
      {/* PADDING SECTION */}
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
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            p: '20px',
            minHeight: '80px',
          }}
        >
          <Box
            sx={{
              fontSize: 1,
              flexBasis: ['100%', 'auto'],
              textAlign: 'center',
              mb: ['10px', '0px'],
            }}
          >
            Łącznie: <Spinner sx={{ width: '14px', height: '14px' }} />
          </Box>
          <Flex sx={{ flexBasis: ['100%', 'auto'] }}>
            <IconButton
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px',
              }}
              disabled={true}
            >
              <BsChevronDoubleLeft />
            </IconButton>
            <IconButton
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px',
              }}
              disabled={true}
            >
              <BsChevronLeft />
            </IconButton>
            <Select sx={{ width: '60px' }}>
              {10 &&
                [...Array(10).keys()].map((x) => (
                  <option key={x} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
            </Select>

            <IconButton
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px 0px 10px',
              }}
              disabled={true}
            >
              <BsChevronRight />
            </IconButton>

            <IconButton
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px',
              }}
              disabled={true}
            >
              <BsChevronDoubleRight />
            </IconButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default SkeletonTasksListPanel;
