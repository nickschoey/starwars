import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Character = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

Character.propTypes = {};

export default Character;
