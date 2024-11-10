import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Response } from '../types/api';
import { CircularProgress, Pagination, Stack } from '@mui/material';
import PagingContainer from '../shared/PagingContainer';

interface WithPaginationProps {
  fetchData: (page: number, itemsPerPage: number) => Promise<Response>;
  itemsPerPage: number;
  queryKey: string[];
}

const WithPagination = (WrappedComponent: React.FC<any>) => {
  return ({ fetchData, itemsPerPage = 10, queryKey }: WithPaginationProps) => {
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
      queryKey: [...queryKey, currentPage],
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
      return (
        <PagingContainer flex>
          <CircularProgress />
        </PagingContainer>
      );
    }

    if (isError) {
      return <PagingContainer flex>Error fetching data!</PagingContainer>;
    }

    if (!data || data.MRData.total === '0') {
      return <PagingContainer flex>No data found!</PagingContainer>;
    }

    return (
      <Stack alignItems={'center'} justifyContent={'center'}>
        <PagingContainer>
          <WrappedComponent data={data} />
        </PagingContainer>
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
