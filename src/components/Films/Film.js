import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'nes-react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import {
  Root,
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
import { device, colors } from '../../helper/constants';
import BackButton from '../common/BackButton';
import { changeView } from '../../actions/navigation';
import useTopScroll from '../../helper/useTopScroll';
import ElementTitle from '../common/ElementTitle';
import capitalize from '../../helper/capitalize';

const Film = () => {
  useTopScroll();
  const { id } = useParams();
  const dispatch = useDispatch();
  const film = useSelector(state => state.films.data[id]);
  const species = useSelector(state => state.species.data);
  const planets = useSelector(state => state.planets.data);
  const filmSpecies = film.species.map(speciesId => species[speciesId]);
  const filmPlanets = film.planets.map(planetId => planets[planetId]);
  const romanNumeral = romanNumerals[film.episode_id];

  useEffect(() => {
    dispatch(disableVisible());
    dispatch(changeView('films'));
  }, [dispatch]);

  const renderSpecies = () =>
    filmSpecies.map(specie => {
      const speciesPlanet = planets[specie.homeworld];
      return (
        <div key={specie.url}>
          <p
            style={{ color: colors.starWarsRed }}
            data-tip
            data-for={specie.url}
          >
            {`${specie.name}`}
          </p>
          <ReactTooltip id={specie.url} place="bottom">
            <p>
              {`${capitalize(specie.classification)} ${specie.designation} ${
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
    filmPlanets.map(planet => {
      if (planet !== undefined) {
        return (
          <p key={planet.url}>
            <Anchor to={`/planet/${planet.id}`}>{planet.name}</Anchor>
          </p>
        );
      }
      return <p />;
    });

  return (
    <Root>
      <BackButton />
      <MainContainer dark>
        <ElementTitle>
          {`Star Wars Episode ${romanNumeral}: ${film.title}`}
        </ElementTitle>
        <FlexContainer dark>
          <ImageContainer dark>
            <div style={{ fontSize: '5rem', padding: '10px' }}>
              {romanNumeral}
            </div>
          </ImageContainer>
          <Container dark style={{ flexGrow: 1 }}>
            <InfoElement title="Title: " data={film.title} />
            <InfoElement title="Directed by " data={film.director} />
            <InfoElement title="Produced by " data={film.producer} />
            <InfoElement title="Release date: " data={film.release_date} />
          </Container>
        </FlexContainer>
        <SwitchingContainer>
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
        </SwitchingContainer>
        <SwitchingContainer>
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
        </SwitchingContainer>
        <PeopleContainer
          title={`Characters appearing in ${film.title}`}
          peopleIds={film.characters}
        />
        <Container style={{ width: '95%' }} dark title="Opening Text">
          <p>{film.opening_crawl}</p>
        </Container>
      </MainContainer>
    </Root>
  );
};

export default Film;

const SwitchingContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
