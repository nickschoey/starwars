import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import VehicleTooltip from './VehicleTooltip';
import { colors } from '../../helper/constants';
import NesContainer from './NesContainer';

const VehiclesContainer = ({ vehicleIds, type, tooltipAlign, title }) => {
  const allVehicles = useSelector(state => state[type].data);
  const vehicles = vehicleIds.map(id => allVehicles[id]);

  const renderVehicles = () => {
    if (vehicles.length === 0) {
      return (
        <p style={{ textAlign: 'center ' }}>
          {`This character has no ${type}`}
        </p>
      );
    }
    return vehicles.map(vehicle => (
      <div key={vehicle.url}>
        <VehicleText data-tip data-for={vehicle.url}>
          {vehicle.name}
        </VehicleText>
        <VehicleTooltip vehicle={vehicle} align={tooltipAlign} />
      </div>
    ));
  };

  return (
    <NesContainer style={{ flexGrow: 1 }} title={title}>
      {renderVehicles()}
    </NesContainer>
  );
};

const VehicleText = styled.p`
  color: ${colors.starWarsRed};
`;

VehiclesContainer.propTypes = {
  vehicleIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
  tooltipAlign: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default VehiclesContainer;
