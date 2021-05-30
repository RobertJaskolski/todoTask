import React, { useEffect } from 'react';
import { Flex, Box, Select, IconButton } from 'theme-ui';
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { currentPageState } from '../../recoil/todos';

function PaginationTasks({ pagination }) {
  const { total, pages } = pagination;
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const handleNexPage = (e) => {
    setCurrentPage((page) => page + 1);
  };
  const handleBackPage = (e) => {
    setCurrentPage((page) => page - 1);
  };
  const handleGoToFirst = (e) => {
    setCurrentPage(1);
  };
  const handleGoToLast = (e) => {
    setCurrentPage(pages);
  };
  const handleSelectPage = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  useEffect(() => {
    if (currentPage > pages) {
      setCurrentPage(1);
    }
  });
  return (
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
        Łącznie: {total}
      </Box>
      <Flex sx={{ flexBasis: ['100%', 'auto'] }}>
        <IconButton
          aria-label='Idź do pierwszej strony'
          sx={{
            width: ['18%', '30px', '40px'],
            height: '40px',
            margin: '0px 5px',
          }}
          disabled={currentPage === 1}
          onClick={handleGoToFirst}
        >
          <BsChevronDoubleLeft />
        </IconButton>
        <IconButton
          aria-label='Cofnij stornę'
          sx={{
            width: ['18%', '30px', '40px'],
            height: '40px',
            margin: '0px 5px',
          }}
          disabled={currentPage < 2}
          onClick={handleBackPage}
        >
          <BsChevronLeft />
        </IconButton>
        <Select
          aria-label='zmień stronę'
          value={currentPage}
          onChange={handleSelectPage}
          sx={{ width: '60px' }}
        >
          {pages &&
            [...Array(pages).keys()].map((x) => (
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
          disabled={currentPage >= pages}
          onClick={handleNexPage}
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
          disabled={currentPage === pages}
          onClick={handleGoToLast}
        >
          <BsChevronDoubleRight />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default PaginationTasks;
