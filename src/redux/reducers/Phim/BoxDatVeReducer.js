import * as actTypes from "../../constants/Phim";

let initailState = {
  listLichChieu: {},
  listMovieDatVe: [],
  errDatVe: null,
};

const BoxDatVeReducer = (state = initailState, action) => {
  switch (action.type) {
    case actTypes.GET_BOX_DAT_VE_SUCCESS:
      state.listMovieDatVe = action.data;
      state.errDatVe = null;
      return { ...state };
    case actTypes.FETCH_LICH_BOX_DAT_VE_SUCCESS:
      state.listLichChieu = action.data;
      state.errDatVe = null;
      return { ...state };

    case actTypes.FETCH_LICH_BOX_DAT_VE_FAILED:
      state.listLichChieu = {};
      state.errDatVe = action.err;
      return { ...state };

    case actTypes.GET_BOX_DAT_VE_FAILED:
      state.listMovieDatVe = [];
      state.errDatVe = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default BoxDatVeReducer;
