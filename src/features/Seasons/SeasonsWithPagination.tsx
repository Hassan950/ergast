import React from 'react';
import { fetchSeasons } from './services';
import WithPagination from '../../hocs/WithPagination';
import SeasonList from './SeasonList';
import SeasonCards from './SeasonCards';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const fetchSeasonsWithPagination = async (page: number, limit: number) => {
  const response = await fetchSeasons({ limit, offset: (page - 1) * limit });
  return response.data;
};

const SeasonsItemsWithPagination = WithPagination(SeasonList);
const SeasonsCardsWithPagination = WithPagination(SeasonCards);

const SeasonsItemsWrapper: React.FC = () => {
  const isCardView = useSelector(
    (state: RootState) => state.seasons.isCardView,
  );
  if (isCardView) {
    return (
      <SeasonsCardsWithPagination
        fetchData={fetchSeasonsWithPagination}
        itemsPerPage={10}
      />
    );
  }

  return (
    <SeasonsItemsWithPagination
      fetchData={fetchSeasonsWithPagination}
      itemsPerPage={10}
    />
  );
};

export default SeasonsItemsWrapper;
