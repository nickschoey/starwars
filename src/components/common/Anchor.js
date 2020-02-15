import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../helper/constants';

const Anchor = ({ children, to, color, hoverColor }) => {
  return (
    <StyledLink
      data-test="component-anchor"
      color={color}
      to={to}
      hoverColor={hoverColor}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  &:hover {
    color: ${props => props.hoverColor};
    text-decoration: none;
  }
`;

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string
};

Anchor.defaultProps = {
  color: colors.starWarsYellow,
  hoverColor: colors.starWarsYellowSecondary
};

export default Anchor;
