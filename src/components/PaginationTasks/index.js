import React, { useEffect } from 'react';
import { Flex, Box, Select, IconButton, Grid } from 'theme-ui';
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState, tasksState } from '../../recoil/todos';

function PaginationTasks() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const { pagination } = useRecoilValue(tasksState);
  const { total, pages } = pagination;

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
    setCurrentPage(e.target.value);
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
        justifyContent: 'space-between',
        p: '20px',
        minHeight: '80px',
      }}
    >
      <Box sx={{ fontSize: 1 }}>Łącznie: {total}</Box>
      <Grid columns={[5]}>
        <IconButton disabled={currentPage === 1} onClick={handleGoToFirst}>
          <BsChevronDoubleLeft />
        </IconButton>
        <IconButton disabled={currentPage < 2} onClick={handleBackPage}>
          <BsChevronLeft />
        </IconButton>
        <Select
          value={currentPage}
          onChange={handleSelectPage}
          sx={{ width: '55px' }}
        >
          {10 &&
            [...Array(pages).keys()].map((x) => (
              <option key={x} value={x + 1}>
                {x + 1}
              </option>
            ))}
        </Select>
        <IconButton disabled={currentPage >= pages} onClick={handleNexPage}>
          <BsChevronRight />
        </IconButton>
        <IconButton disabled={currentPage === pages} onClick={handleGoToLast}>
          <BsChevronDoubleRight />
        </IconButton>
      </Grid>
    </Flex>
  );
}

export default PaginationTasks;
