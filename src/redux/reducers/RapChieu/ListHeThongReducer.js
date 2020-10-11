import * as actTypes from "../../constants/RapChieu";

let initialState = {
  dsHeThong: [],
  loadingDsHeThong: false,
  errDsHeThong: null,
};

const DanhSachHeThongReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FETCH_LIST_HE_THONG_REQUEST:
      state.dsHeThong = [];
      state.loadingDsHeThong = true;
      state.errDsHeThong = null;
      return { ...state };

    case actTypes.FETCH_LIST_HE_THONG_SUCCESS:
      state.dsHeThong = action.data;
      state.loadingDsHeThong = false;
      state.errDsHeThong = null;
      return { ...state };

    case actTypes.FETCH_LIST_HE_THONG_FAILED:
      state.dsHeThong = [];
      state.loadingDsHeThong = false;
      state.errDsHeThong = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default DanhSachHeThongReducer;
