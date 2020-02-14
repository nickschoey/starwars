import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'nes-react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import Anchor from '../common/Anchor';
import loadImage from '../../helper/importImage';
import FilmsContainer from '../common/FilmsContainer';
import VehiclesContainer from '../common/VehiclesContainer';
import InfoElement from '../common/InfoElement';
import {
  MainContainer,
  FlexContainer,
  ImageContainer,
  Root
} from '../common/Containers';
import { disableVisible } from '../../actions/search';
import renderNumber from '../../helper/renderNumber';
import { device, colors } from '../../helper/constants';
import BackButton from '../common/BackButton';
import { changeView } from '../../actions/navigation';
import capitalize from '../../helper/capitalize';
import useTopScroll from '../../helper/useTopScroll';
import ElementTitle from '../common/ElementTitle';

const Character = () => {
  useTopScroll();
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(state => state.characters.data[id]);
  const planet = useSelector(state => state.planets.data[person.homeworld]);
  const species = useSelector(state =>
    person.species.lenght !== 0 ? state.species.data[person.species] : null
  );
  const speciesPlanet = useSelector(state =>
    species ? state.planets.data[species.homeworld] : null
  );
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage(person.id, setImage);
    dispatch(disableVisible());
    dispatch(changeView('people'));
  }, [dispatch, person.id]);

  const renderSpecies = () => {
    if (!species) {
      return (
        <div>
          <h2>Unknown Species</h2>
        </div>
      );
    }

    return (
      <div>
        <h2
          style={{ color: colors.starWarsRed }}
          data-tip
          data-for="speciesInfo"
        >
          {`(${species.name})`}
        </h2>
        <ReactTooltip id="speciesInfo" place="bottom">
          <p>
            {`${capitalize(species.classification)} ${species.designation} ${
              species.homeworld !== null
                ? ` originary from ${speciesPlanet.name}.`
                : `without a homeworld.`
            }`}
          </p>
        </ReactTooltip>
      </div>
    );
  };

  return (
    <Root>
      <BackButton />
      <MainContainer dark>
        <ElementTitle>{person.name}</ElementTitle>
        {renderSpecies()}

        <FlexContainer dark>
          <ImageContainer dark>
            <img src={image} alt={person.name} />
          </ImageContainer>
          <Container dark style={{ flexGrow: 1 }}>
            <FlexContainer dark>
              <div style={{ marginRight: '10px' }}>
                <InfoElement
                  title={
                    species && species.name === 'Droid'
                      ? 'Built in '
                      : 'Born in '
                  }
                  data={
                    <Anchor to={`/planet/${planet.id}`}>{planet.name}</Anchor>
                  }
                />
              </div>
              <InfoElement title="in " data={person.birth_year} />
            </FlexContainer>
            <FlexContainer dark>
              <div style={{ marginRight: '10px' }}>
                <InfoElement
                  title="Height: "
                  data={`${renderNumber(person.height, 'cm.')}`}
                />
              </div>
              <InfoElement
                title="Weight: "
                data={`${renderNumber(person.mass, 'kg.')}`}
              />
            </FlexContainer>
            <InfoElement
              title="Eye Color: "
              data={capitalize(person.eye_color)}
            />
            <InfoElement title="Hair: " data={capitalize(person.hair_color)} />
            <InfoElement title="Skin: " data={capitalize(person.skin_color)} />
          </Container>
        </FlexContainer>

        <VehiclesInfo>
          <VehiclesContainer
            vehicleIds={person.vehicles}
            type="vehicles"
            tooltipAlign="left"
            title="Vehicles"
          />
          <VehiclesContainer
            vehicleIds={person.starships}
            type="starships"
            tooltipAlign="right"
            title="Starships"
          />
        </VehiclesInfo>
        <FilmsContainer filmIds={person.films} />
      </MainContainer>
    </Root>
  );
};

const VehiclesInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding-bottom: 12px;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export default Character;
