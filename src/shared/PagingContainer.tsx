import { Box } from '@mui/material';
import { FC } from 'react';

interface PagingContainerProps {
  children: React.ReactNode;
  flex?: boolean;
}

const PagingContainer: FC<PagingContainerProps> = ({ children, flex }) => {
  const style = flex
    ? {
        sx: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }
    : {};
  return (
    <Box
      height={'80vh'}
      overflow={'auto'}
      width={'100%'}
      padding={2}
      {...style}
    >
      {children}
    </Box>
  );
};

export default PagingContainer;
