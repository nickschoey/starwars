import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../helper/constants';

const NesContainer = ({ children, title, titleSize, ...props }) => {
  return (
    <ContainerOuter {...props}>
      {title && <ContainerTitle titleSize={titleSize}>{title}</ContainerTitle>}
      {children}
    </ContainerOuter>
  );
};

const ContainerOuter = styled.div`
  position: relative;
  padding: 1.5rem 2rem;
  box-shadow: 5px 0 ${colors.starWarsWhite}, -5px 0 ${colors.starWarsWhite},
    0 -5px ${colors.starWarsWhite}, 0 5px ${colors.starWarsWhite};
  margin: 10px 10px;
`;

const ContainerTitle = styled.div`
  display: table;
  padding: 0 0.5rem;
  margin: -1.8rem 0 1rem;
  font-size: ${props => props.titleSize};
  font-weight: bold;
  background-color: ${colors.starWarsBlack};
`;

NesContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  titleSize: PropTypes.string
};

NesContainer.defaultProps = {
  title: null,
  titleSize: '0.8rem'
};
export default NesContainer;
