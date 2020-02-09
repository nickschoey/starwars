import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import state from '../../data';
import VehicleTooltip from './VehicleTooltip';

const VehiclesContainer = ({ vehicleIds, type, tooltipAlign }) => {
  const allVehicles = state[type].data;
  const vehicles = vehicleIds.map(id => allVehicles[id]);

  const renderVehicles = () => {
    return vehicles.map(vehicle => (
      <VehicleElement key={vehicle.url}>
        <p data-tip data-for={vehicle.url}>
          {vehicle.name}
        </p>
        <VehicleTooltip vehicle={vehicle} align={tooltipAlign} />
      </VehicleElement>
    ));
  };

  return <StyledContainer title="Vehicles">{renderVehicles()}</StyledContainer>;
};

const StyledContainer = styled(Container)`
  flex-grow: 1;
`;

const VehicleElement = styled.div`
  display: flex;
`;

VehiclesContainer.propTypes = {
  vehicleIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
  tooltipAlign: PropTypes.string.isRequired
};

export default VehiclesContainer;
