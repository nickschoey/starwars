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
  margin: 5px;
  position: relative;
  padding: 1.5rem 2rem;
  border-color: ${colors.starWarsWhite};
  border-style: solid;
  border-width: 4px;
  border-radius: 3px;
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
