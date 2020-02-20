import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../helper/constants';

const Anchor = ({ children, to, color, hovercolor }) => {
  return (
    <StyledLink color={color} to={to} hovercolor={hovercolor}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  &:hover {
    color: ${props => props.hovercolor};
    text-decoration: none;
  }
`;

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  hovercolor: PropTypes.string
};

Anchor.defaultProps = {
  color: colors.starWarsYellow,
  hovercolor: colors.starWarsYellowSecondary
};

export default Anchor;
