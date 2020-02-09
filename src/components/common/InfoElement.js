import React from 'react';
import PropTypes from 'prop-types';

const InfoElement = ({ title, data }) => {
  return (
    <p>
      <strong>{`${title}`}</strong>
      {data}
    </p>
  );
};

InfoElement.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.node.isRequired
};

export default InfoElement;
