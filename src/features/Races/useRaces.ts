import { useDispatch, useSelector } from 'react-redux';
import { Race } from './types';
import { RootState } from '../../store';
import { pinRace, unpinRace } from './slice';

const useRaces = (race: Race) => {
  const dispatch = useDispatch();
  const { round, season } = race;
  const pinnedRaces = useSelector(
    (state: RootState) => state.pinnedRaces.pinnedRaces[season],
  );

  const isPinned = pinnedRaces?.some((r) => r.round === round);
  const handlePinned = () => {
    if (isPinned) {
      return dispatch(unpinRace(race));
    }
    return dispatch(pinRace(race));
  };

  return { isPinned, handlePinned };
};

export default useRaces;
