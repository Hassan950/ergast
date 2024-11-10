import React from 'react';
import { fetchRacesForSeason } from './services';
import WithPagination from '../../hocs/WithPagination';
import RaceList from './RaceList';
import RaceCards from './RaceCards';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { GetRacesResponse } from './types';
import { useNavigate, useParams } from 'react-router-dom';

const RacesView: React.FC<{ data: GetRacesResponse }> = (props) => {
  const isCardView = useSelector(
    (state: RootState) => state.pinnedRaces.isCardView,
  );
  const pinnedRaces = useSelector(
    (state: RootState) => state.pinnedRaces.pinnedRaces,
  );

  const season = props.data.MRData.RaceTable.season;
  props.data.MRData.RaceTable.Races?.sort((a, b) => {
    const aPinned = pinnedRaces[season]?.some((r) => r.round === a.round);
    const bPinned = pinnedRaces[season]?.some((r) => r.round === b.round);
    if (aPinned && !bPinned) {
      return -1;
    }
    if (!aPinned && bPinned) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  return <>{isCardView ? <RaceCards {...props} /> : <RaceList {...props} />}</>;
};

const RacesItemsWithPagination = WithPagination(RacesView);

const RacesItemsWrapper: React.FC = () => {
  const { seasonId } = useParams<{ seasonId: string }>();
  const navigate = useNavigate();

  const fetchRacesWithPagination = async (page: number, limit: number) => {
    const response = await fetchRacesForSeason(seasonId || '', {
      limit,
      offset: (page - 1) * limit,
    });
    return response.data;
  };

  if (!seasonId) {
    navigate('/');
    return null;
  }

  return (
    <RacesItemsWithPagination
      fetchData={fetchRacesWithPagination}
      itemsPerPage={10}
      queryKey={['seasons', seasonId]}
    />
  );
};

export default RacesItemsWrapper;
