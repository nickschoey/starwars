import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'nes-react';
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

const Film = () => {
  const { id } = useParams();
  const film = state.films.data[id];
  const romanNumeral = romanNumerals[film.episode_id];
  console.log(film);
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
      <PeopleContainer
        title={`Characters appearing in ${film.title}`}
        styling={{ width: '1100px' }}
        peopleIds={film.characters}
      />
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
