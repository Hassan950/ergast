// src/hocs/WithPagination.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Response } from '../types/api';
import { Box, Pagination, Stack } from '@mui/material';

interface WithPaginationProps {
  fetchData: (page: number, itemsPerPage: number) => Promise<Response>;
  itemsPerPage: number;
}

const WithPagination = (WrappedComponent: React.FC<any>) => {
  return ({ fetchData, itemsPerPage = 10 }: WithPaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      const page = parseInt(searchParams.get('page') || '1');
      if (isValidPage(page)) {
        setCurrentPage(page);
      } else {
        setSearchParams({ page: '1' });
        setCurrentPage(1);
      }
    }, [searchParams]);

    const { data, isLoading, isError } = useQuery({
      queryKey: ['data', currentPage],
      queryFn: () => fetchData(currentPage, itemsPerPage),
      placeholderData: keepPreviousData,
    });

    const pageCount = data
      ? Math.ceil(Number.parseInt(data.MRData.total) / itemsPerPage)
      : 0;
    const isValidPage = (page: number) => {
      if (!data) return false;
      return page >= 1 && page <= pageCount;
    };

    const goToPage = (page: number) => {
      if (!isValidPage(page)) return;
      setSearchParams({ page: String(page) });
      setCurrentPage(page);
    };

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error fetching data!</div>;
    }

    if (!data) {
      return <div>No data found!</div>;
    }

    return (
      <Stack alignItems={'center'} justifyContent={'center'}>
        <Box height={'80vh'} overflow={'auto'} width={'100%'} padding={2}>
          <WrappedComponent data={data} />
        </Box>
        <Pagination
          count={pageCount}
          shape="rounded"
          page={currentPage}
          onChange={(_e, page) => goToPage(page)}
        />
      </Stack>
    );
  };
};

export default WithPagination;
