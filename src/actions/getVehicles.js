import getAllData from './helper/getAllData';

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
        dispatch(getVehiclesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getVehiclesFailure(error));
      });
  };
}

export default getVehicles;
