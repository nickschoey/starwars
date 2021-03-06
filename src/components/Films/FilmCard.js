import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import Anchor from '../common/Anchor';
import romanNumerals from '../../helper/romanNumerals';
import PersonMiniature from '../common/PersonMiniature';
import { device, colors } from '../../helper/constants';
import NesContainer from '../common/NesContainer';

const FilmCard = ({ film }) => {
  const allCharacters = useSelector(state => state.characters.data);
  const filmCharacters = film.characters.map(id => allCharacters[id]);

  return (
    <Anchor
      to={`/film/${film.id}`}
      color={colors.starWarsWhite}
      hoverColor={colors.starWarsYellow}
    >
      <FilmCardContainer>
        <InnerContainer>
          <BigText>{`${romanNumerals[film.episode_id]} ${film.title}`}</BigText>
          <FilmPeople>
            {filmCharacters.map(character => (
              <div key={character.url} data-tip data-for={character.url}>
                <PersonMiniature
                  justMiniature
                  withLabel={false}
                  id={character.id}
                />
                <ReactTooltip id={character.url}>
                  <p style={{ fontSize: '0.7rem' }}>{character.name}</p>
                </ReactTooltip>
              </div>
            ))}
          </FilmPeople>
        </InnerContainer>
      </FilmCardContainer>
    </Anchor>
  );
};

const FilmCardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 10px;
  max-width: 900px;
`;

const FilmPeople = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const InnerContainer = styled(NesContainer)`
  display: flex;
  flex-grow: 1;
  max-height: 100%;
  flex-direction: column;
  &:hover {
    box-shadow: 6px 0 ${colors.starWarsYellow}, -6px 0 ${colors.starWarsYellow},
      0 -6px ${colors.starWarsYellow}, 0 6px ${colors.starWarsYellow};
  }
`;

const BigText = styled.div`
  text-align: center;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;

FilmCard.propTypes = {
  film: PropTypes.object.isRequired
};

export default FilmCard;
