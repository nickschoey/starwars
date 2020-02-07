import getAllData from './helper/getAllData';
import extractDigits from './helper/extractId';

export const GET_VEHICLES_REQUEST = 'GET_VEHICLES_REQUEST';
export const GET_VEHICLES_SUCCESS = 'GET_VEHICLES_SUCCESS';
export const GET_VEHICLES_FAILURE = 'GET_VEHICLES_FAILURE';

export const getVehiclesRequest = () => {
  return {
    type: GET_VEHICLES_REQUEST
  };
};

export const getVehiclesSuccess = vehicles => {
  return {
    type: GET_VEHICLES_SUCCESS,
    vehicles
  };
};

export const getVehiclesFailure = error => {
  return {
    type: GET_VEHICLES_FAILURE,
    error
  };
};

function getVehicles() {
  return dispatch => {
    dispatch(getVehiclesRequest());
    getAllData('vehicles')
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        const vehicles = res.reduce((acc, vehicle) => {
          // data normalisation to be used locally
          const vehicleId = extractDigits(vehicle.url);
          acc[vehicleId] = vehicle;
          acc[vehicleId].id = vehicleId;

          acc[vehicleId].films = acc[vehicleId].films.map(film =>
            extractDigits(film)
          );
          acc[vehicleId].pilots = acc[vehicleId].pilots.map(pilot =>
            extractDigits(pilot)
          );

          return acc;
        }, {});
        dispatch(getVehiclesSuccess(vehicles));
        return res;
      })
      .catch(error => {
        dispatch(getVehiclesFailure(error));
      });
  };
}

export default getVehicles;
