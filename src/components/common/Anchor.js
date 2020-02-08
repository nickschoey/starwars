import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Anchor = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  color: #b6231e;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #8b2338;
  }
`;

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default Anchor;
