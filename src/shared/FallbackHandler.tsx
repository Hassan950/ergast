import React from 'react';
import PagingContainer from './PagingContainer';
import Loader from './Loader';

interface FallbackHandlerProps {
  isLoading: boolean;
  isError: boolean;
  data: any;
  children: React.ReactNode;
}

const FallbackHandler: React.FC<FallbackHandlerProps> = ({
  isLoading,
  isError,
  data,
  children,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <PagingContainer flex>Error fetching data!</PagingContainer>;
  }

  if (!data || data.MRData.total === '0') {
    return <PagingContainer flex>No data found!</PagingContainer>;
  }

  return <>{children}</>;
};

export default FallbackHandler;
