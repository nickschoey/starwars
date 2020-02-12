import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function useLoadStatus() {
  const [isDataLoaded, setIsDataLoaded] = useState({ success: false });

  const characters = useSelector(state => state.characters);
  const films = useSelector(state => state.films);
  const planets = useSelector(state => state.planets);
  const species = useSelector(state => state.species);
  const starships = useSelector(state => state.starships);
  const vehicles = useSelector(state => state.vehicles);

  useEffect(() => {
    const isLoadingDone = () => {
      return (
        characters.pending === false &&
        films.pending === false &&
        planets.pending === false &&
        species.pending === false &&
        starships.pending === false &&
        vehicles.pending === false
      );
    };
    if (isLoadingDone()) setIsDataLoaded({ success: true });
  }, [
    characters.pending,
    films.pending,
    planets.pending,
    species.pending,
    starships.pending,
    vehicles.pending
  ]);

  return isDataLoaded;
}

export default useLoadStatus;
