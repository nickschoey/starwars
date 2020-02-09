import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'nes-react';
import ReactTooltip from 'react-tooltip';
import state from '../../data';
import {
  MainContainer,
  FlexContainer,
  ImageContainer
} from '../common/Containers';
import romanNumerals from '../../helper/romanNumerals';
import InfoElement from '../common/InfoElement';
import VehiclesContainer from '../common/VehiclesContainer';
import PeopleContainer from '../common/PeopleContainer';
import Anchor from '../common/Anchor';
import { disableVisible } from '../../actions/search';

const Film = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const film = state.films.data[id];
  const species = state.species.data;
  const planets = state.planets.data;
  const filmSpecies = film.species.map(speciesId => species[speciesId]);
  const filmPlanets = film.planets.map(planetId => planets[planetId]);

  useEffect(() => {
    dispatch(disableVisible());
  }, []);

  const renderSpecies = () =>
    filmSpecies.map(specie => {
      const speciesPlanet = planets[specie.homeworld];
      return (
        <div>
          <p style={{ color: '#b6231e' }} data-tip data-for={specie.url}>
            {`${specie.name}`}
          </p>
          <ReactTooltip id={specie.url} place="bottom">
            <p>
              {`${specie.classification} ${specie.designation} ${
                specie.homeworld !== null
                  ? ` originary from ${speciesPlanet.name}.`
                  : `without a homeworld.`
              }`}
            </p>
          </ReactTooltip>
        </div>
      );
    });
  const renderPlanets = () =>
    filmPlanets.map(planet => (
      <p>
        <Anchor to={`/planet/${planet.id}`}>{planet.name}</Anchor>
      </p>
    ));

  const romanNumeral = romanNumerals[film.episode_id];
  return (
    <MainContainer dark>
      <h1>{`Star Wars Episode ${romanNumeral}: ${film.title}`}</h1>
      <FlexContainer dark>
        <ImageContainer dark>
          <div style={{ fontSize: '5rem', padding: '10px' }}>
            {romanNumeral}
          </div>
        </ImageContainer>
        <Container dark style={{ width: '800px' }}>
          <InfoElement title="Title: " data={film.title} />
          <InfoElement title="Directed by " data={film.director} />
          <InfoElement title="Produced by " data={film.producer} />
          <InfoElement title="Release date: " data={film.release_date} />
        </Container>
      </FlexContainer>
      <div style={{ display: 'flex', width: '1100px' }}>
        <VehiclesContainer
          title="Vehicles"
          vehicleIds={film.vehicles}
          type="vehicles"
          tooltipAlign="left"
        />
        <VehiclesContainer
          title="Starships"
          vehicleIds={film.starships}
          type="starships"
          tooltipAlign="right"
        />
      </div>
      <div style={{ display: 'flex', width: '1100px' }}>
        <Container
          dark
          title="Species"
          style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
        >
          {renderSpecies()}
        </Container>
        <Container
          dark
          title="Planets"
          style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
        >
          {renderPlanets()}
        </Container>
      </div>
      <PeopleContainer
        title={`Characters appearing in ${film.title}`}
        styling={{ width: '1100px' }}
        peopleIds={film.characters}
      />
      <Container dark title="Opening Text" style={{ width: '1100px' }}>
        <p>{film.opening_crawl}</p>
      </Container>
    </MainContainer>
  );
};

export default Film;
