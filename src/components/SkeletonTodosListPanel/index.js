import React from 'react';
import { Box, Flex, Spinner, Select, IconButton } from 'theme-ui';
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
// Recoil
import { useRecoilValue } from 'recoil';
import { filterTodosState, currentPageState } from '../../recoil/todo';

function SkeletonTodosListPanel({ isError }) {
  const { completed } = useRecoilValue(filterTodosState);
  const currentPage = useRecoilValue(currentPageState);

  return (
    <>
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
              backgroundColor: 'softGreen',
              borderRadius: '5px',
              boxShadow: '0 0 5px green',
              opacity: !completed ? 0.9 : 0,
            }}
          >
            Zakończone: <Spinner sx={{ width: '14px', height: '14px' }} />
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
            Niezakończone:
            <Spinner sx={{ width: '14px', height: '14px' }} />
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
              aria-label='Idź do pierwszej strony'
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
              aria-label='Cofnij stronę'
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px',
              }}
              disabled={true}
            >
              <BsChevronLeft />
            </IconButton>
            <Select aria-label='Wybierz stronę' sx={{ width: '60px' }}>
              <option value={currentPage}>{currentPage}</option>
            </Select>

            <IconButton
              aria-label='Następna strona'
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
              aria-label='Idź do ostatniej strony'
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
        {isError ? (
          <Box sx={{ width: '80%', height: '50vh', textAlign: 'center' }}>
            <h1>Wystąpił problem z siecią</h1>
          </Box>
        ) : (
          <Spinner sx={{ width: '80%', height: '80%' }} />
        )}
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
              aria-label='Idź do pierwszej strony'
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
              aria-label='Cofnij stronę'
              sx={{
                width: ['18%', '30px', '40px'],
                height: '40px',
                margin: '0px 5px',
              }}
              disabled={true}
            >
              <BsChevronLeft />
            </IconButton>
            <Select aria-label='Wybierz stronę' sx={{ width: '60px' }}>
              {10 &&
                [...Array(10).keys()].map((x) => (
                  <option key={x} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
            </Select>

            <IconButton
              aria-label='Następna strona'
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
              aria-label='Idź do ostatniej strony'
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
    </>
  );
}

SkeletonTodosListPanel.propTypes = {
  isError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default SkeletonTodosListPanel;
