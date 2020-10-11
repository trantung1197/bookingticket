import * as actTypes from "../../constants/RapChieu";


let initialState = {
  listSuatChieu: {},
  loadingSuatChieu: false,
  errLoadSuatChieu: null,
};

const DanhSachSuatChieuTheoHeThong = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.FETCH_LIST_SUAT_CHIEU_REQUEST:
      state.listSuatChieu = [];
      state.loadingSuatChieu = true;
      state.errLoadSuatChieu = null;
      return { ...state };
    case actTypes.FETCH_LIST_SUAT_CHIEU_SUCCESS:
      state.listSuatChieu = action.data;
      state.loadingSuatChieu = false;
      state.errLoadSuatChieu = null;
      return { ...state };
    case actTypes.FETCH_LIST_SUAT_CHIEU_FAILED:
      state.listSuatChieu = [];
      state.loadingSuatChieu = false;
      state.errLoadSuatChieu = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default DanhSachSuatChieuTheoHeThong;
