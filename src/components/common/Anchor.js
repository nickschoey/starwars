import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../helper/constants';

const Anchor = ({ children, to, color }) => {
  return (
    <StyledLink color={color} to={to}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  &:hover {
    color: ${colors.starWarsYellowSecondary};
    text-decoration: none;
  }
`;

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string
};

Anchor.defaultProps = {
  color: colors.starWarsYellow
};

export default Anchor;
