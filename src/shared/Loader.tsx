import { CircularProgress } from '@mui/material';
import PagingContainer from './PagingContainer';

const Loader = () => {
  return (
    <PagingContainer flex>
      <CircularProgress />
    </PagingContainer>
  );
};

export default Loader;
