import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../helper/constants';

const NesButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  color: ${colors.starWarsWhite};
  background-color: #209cee;

  &::after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: '';
    box-shadow: inset -4px -4px #006bb3;
  }

  &:hover {
    color: ${colors.starWarsWhite};
    text-decoration: none;
    background-color: #108de0;

    &::after {
      box-shadow: inset -6px -6px #006bb3;
    }
  }

  &:focus {
    box-shadow: 0 0 0 6px rgba(#006bb3, 0.3);
  }

  &:active:not(.is-disabled)::after {
    box-shadow: inset 4px 4px #006bb3;
  }
`;

NesButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default NesButton;
