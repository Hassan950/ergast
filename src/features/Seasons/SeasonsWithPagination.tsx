import React from 'react';
import { fetchSeasons } from './services';
import WithPagination from '../../hocs/WithPagination';
import SeasonList from './SeasonList';
import SeasonCards from './SeasonCards';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { GetSeasonsResponse } from './types';

const fetchSeasonsWithPagination = async (page: number, limit: number) => {
  const response = await fetchSeasons({ limit, offset: (page - 1) * limit });
  return response.data;
};

const SeasonsView: React.FC<{ data: GetSeasonsResponse }> = (props) => {
  const isCardView = useSelector(
    (state: RootState) => state.seasons.isCardView,
  );
  if (isCardView) {
    return <SeasonCards {...props} />;
  }

  return <SeasonList {...props} />;
};

const SeasonsItemsWithPagination = WithPagination(SeasonsView);

const SeasonsItemsWrapper: React.FC = () => {
  return (
    <SeasonsItemsWithPagination
      fetchData={fetchSeasonsWithPagination}
      itemsPerPage={10}
      queryKey={['seasons']}
    />
  );
};

export default SeasonsItemsWrapper;
