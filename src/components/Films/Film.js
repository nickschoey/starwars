import React from 'react';
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

const Film = () => {
  const { id } = useParams();
  const film = state.films.data[id];
  const species = state.species.data;
  const planets = state.planets.data;
  const filmSpecies = film.species.map(speciesId => species[speciesId]);
  const filmPlanets = film.planets.map(planetId => planets[planetId]);

  const renderSpecies = () =>
    filmSpecies.map(specie => {
      const speciesPlanet = planets[specie.homeworld];
      console.log(speciesPlanet);
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
          vehicleIds={film.vehicles}
          type="vehicles"
          tooltipAlign="left"
        />
        <VehiclesContainer
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

// {
//     title: 'The Force Awakens',
//     episode_id: 7,
//     opening_crawl:
//       "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts....",
//     director: 'J. J. Abrams',
//     producer: 'Kathleen Kennedy, J. J. Abrams, Bryan Burk',
//     release_date: '2015-12-11',
//     characters: [1, 3, 5, 13, 14, 27, 84, 85, 86, 87, 88],
//     planets: [61],
//     starships: [77, 10],
//     vehicles: [],
//     species: [3, 2, 1],
//     created: '2015-04-17T06:51:30.504780Z',
//     edited: '2015-12-17T14:31:47.617768Z',
//     url: 'https://swapi.co/api/films/7/',
//     id: 7
//   }
export default Film;
