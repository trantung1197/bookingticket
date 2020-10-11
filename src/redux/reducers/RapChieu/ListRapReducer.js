import * as actTypes from "../../constants/RapChieu";

let initialState = {
  listRap: [],
  loadingRap: false,
  errLoadRap: null,
};

const DanhSachRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FETCH_RAP_REQUEST:
      state.listRap = [];
      state.loadingRap = true;
      state.errLoadRap = null;
      return { ...state };
    case actTypes.FETCH_RAP_SUCCESS:
      state.listRap = action.data;
      state.loadingRap = false;
      state.errLoadRap = null;
      return { ...state };
    case actTypes.FETCH_RAP_FAILED:
      state.listRap = [];
      state.loadingRap = false;
      state.errLoadRap = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default DanhSachRapReducer;
