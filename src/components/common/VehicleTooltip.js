import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import renderNumber from '../../helper/renderNumber';
import { colors } from '../../helper/constants';
import capitalize from '../../helper/capitalize';

const VehicleTooltip = ({ vehicle, align }) => {
  return (
    <ReactTooltip id={vehicle.url} place={align}>
      <div>{vehicle.name}</div>
      <p>{`${vehicle.manufacturer}`}</p>
      <li>
        {`Class: ${capitalize(vehicle.vehicle_class) ||
          vehicle.starship_class}`}
      </li>
      <li>
        {`Max Speed: ${renderNumber(vehicle.max_atmosphering_speed, 'kph')}`}
      </li>
      {vehicle.hyperdrive_rating && (
        <li>{`Hyperdrive Rating: ${vehicle.hyperdrive_rating}`}</li>
      )}
      <li>{`Crew: ${renderNumber(vehicle.crew)}`}</li>
      <li>{`Passengers: ${renderNumber(vehicle.passengers)}`}</li>
      <li>{`Cargo: ${renderNumber(vehicle.cargo_capacity, ' tons')}`}</li>
      <div style={{ padding: '8px', color: colors.starWarsYellow }}>
        {renderNumber(vehicle.cost_in_credits, ' credits', 'Unknown Cost')}
      </div>
    </ReactTooltip>
  );
};

VehicleTooltip.propTypes = {
  vehicle: PropTypes.objectOf({
    url: PropTypes.string,
    name: PropTypes.string,
    manufacturer: PropTypes.string,
    vehicle_class: PropTypes.string,
    max_atmosphering_speed: PropTypes.string,
    crew: PropTypes.string,
    passengers: PropTypes.string,
    cargo_capacity: PropTypes.string,
    costi_in_credits: PropTypes.string
  }).isRequired,
  align: PropTypes.string.isRequired
};

export default VehicleTooltip;
