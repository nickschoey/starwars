import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardView from './common/CardView';
import state from '../data';
import PlanetCard from './Planets/PlanetCard';
import { enableVisible } from '../actions/search';

const Planets = () => {
  const planets = state.planets.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableVisible());
  }, []);

  const renderPlanets = () => {
    return Object.values(planets).map(planet => <PlanetCard planet={planet} />);
  };
  return (
    <div>
      <CardView>{renderPlanets()}</CardView>
    </div>
  );
};

export default Planets;
