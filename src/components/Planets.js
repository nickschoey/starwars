import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardView from './common/CardView';
import PlanetCard from './Planets/PlanetCard';
import { enableVisible, resetSearch } from '../actions/search';
import applyFilter from '../helper/applyFilter';
import sortCollection from '../helper/sortCollection';
import { GridContainer } from './common/Containers';
import { changeView } from '../actions/navigation';
import useTopScroll from '../helper/useTopScroll';
import NesContainer from './common/NesContainer';
import NesButton from './common/NesButton';

const Planets = () => {
  useTopScroll();
  const dispatch = useDispatch();
  const allPlanets = useSelector(state => state.planets.data);
  const [planets, setPlanets] = useState(allPlanets);
  const [ascendingSort, setAscendingSort] = useState(true);
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
    dispatch(changeView('planets'));
  }, [dispatch]);

  const onHandleSort = value => {
    const planetsArray = Object.values(planets);
    const sortedPlanets = sortCollection(planetsArray, value, ascendingSort);
    setAscendingSort(!ascendingSort);
    setPlanets(sortedPlanets);
  };

  const renderPlanets = () => {
    return Object.values(planets).map(planet => (
      <PlanetCard key={planet.url} planet={planet} />
    ));
  };
  return (
    <GridContainer>
      <h1>Planets</h1>
      <div style={{ alignSelf: 'center' }}>
        <NesContainer title="Sort">
          <NesButton onClick={() => onHandleSort('name')}>
            {`Name ${ascendingSort ? 'A↓Z' : 'Z↑A'}`}
          </NesButton>
        </NesContainer>
      </div>
      <CardView>{renderPlanets()}</CardView>
    </GridContainer>
  );
};

export default Planets;
