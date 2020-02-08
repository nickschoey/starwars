import React from 'react';
import CardView from './common/CardView';
import state from '../data';
import PlanetCard from './Planets/PlanetCard';

const Planets = () => {
  const planets = state.planets.data;

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
