import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'nes-react';
import styled from 'styled-components';
import state from '../../data';
import VehicleTooltip from './VehicleTooltip';
import { colors } from '../../helper/constants';

const VehiclesContainer = ({ vehicleIds, type, tooltipAlign, title }) => {
  const allVehicles = state[type].data;
  const vehicles = vehicleIds.map(id => allVehicles[id]);

  const renderVehicles = () => {
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
    <Container style={{ flexGrow: 1 }} dark title={title}>
      {renderVehicles()}
    </Container>
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
