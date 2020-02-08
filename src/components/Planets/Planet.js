import React from 'react';
import { useParams } from 'react-router-dom';

const Planet = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Planet;
