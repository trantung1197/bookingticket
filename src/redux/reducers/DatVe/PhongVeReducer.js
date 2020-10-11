import * as actTypes from "../../constants/DatVe";

let initialState = {
  phongVe: {},
  loadingPV: false,
  errorPV: null,
};

const PhongVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FETCH_LIST_CINEMA_REQUEST:
        state.phongVe = {};
        state.loadingPV = true;
        state.errorPV = null;
      return { ...state };
    case actTypes.FETCH_LIST_CINEMA_SUCCESS:
        state.phongVe = action.data;
        state.loadingPV = false;
        state.errorPV = null;
      return { ...state };
    case actTypes.FETCH_LIST_CINEMA_FAILED:
        state.phongVe = {};
        state.loadingPV = false;
        state.errorPV = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default PhongVeReducer;
