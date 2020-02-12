import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'nes-react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import state from '../../data';
import Anchor from '../common/Anchor';
import loadImage from '../../helper/importImage';
import FilmsContainer from '../common/FilmsContainer';
import VehiclesContainer from '../common/VehiclesContainer';
import InfoElement from '../common/InfoElement';
import {
  MainContainer,
  FlexContainer,
  ImageContainer
} from '../common/Containers';
import { disableVisible } from '../../actions/search';
import renderNumber from '../../helper/renderNumber';
import { device, colors } from '../../helper/constants';

const Character = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = state.characters.data[id];
  const planet = state.planets.data[person.homeworld];
  const species = state.species.data[person.species];
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage(person.id, setImage);
    dispatch(disableVisible());
  }, [dispatch, person.id]);

  const renderSpecies = () => {
    if (!species) {
      return (
        <div>
          <h2>Unknown Species</h2>
        </div>
      );
    }

    const speciesPlanet = state.planets.data[species.homeworld];
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
            {`${species.classification} ${species.designation} ${
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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MainContainer dark>
        <h1 style={{ textAlign: 'center' }}>{person.name}</h1>
        {renderSpecies()}

        <FlexContainer dark>
          <ImageContainer dark>
            <img src={image} alt={person.name} />
          </ImageContainer>
          <Container dark>
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
            <InfoElement title="Eye Color: " data={person.eye_color} />
            <InfoElement title="Hair: " data={person.hair_color} />
            <InfoElement title="Skin: " data={person.skin_color} />
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
    </div>
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
