import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardView from './common/CardView';
import state from '../data';
import PlanetCard from './Planets/PlanetCard';
import { enableVisible, resetSearch } from '../actions/search';
import applyFilter from '../helper/applyFilter';

const Planets = () => {
  const dispatch = useDispatch();
  const allPlanets = state.planets.data;
  const [planets, setPlanets] = useState(allPlanets);
  const searchText = useSelector(stat => stat.search.text);

  useEffect(() => {
    if (searchText !== '') {
      const filteredData = applyFilter(searchText, Object.values(allPlanets), [
        'name'
      ]);
      setPlanets(filteredData);
    } else {
      setPlanets(allPlanets);
    }
  }, [searchText, allPlanets]);

  useEffect(() => {
    dispatch(resetSearch());
    dispatch(enableVisible());
  }, [dispatch]);

  const renderPlanets = () => {
    return Object.values(planets).map(planet => (
      <PlanetCard key={planet.url} planet={planet} />
    ));
  };
  return (
    <div>
      <CardView>{renderPlanets()}</CardView>
    </div>
  );
};

export default Planets;
