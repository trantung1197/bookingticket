import * as actTypes from "../../constants/DatVe";
import Axios from "axios";

const URL_API_DAT_VE =
  "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=";

export const actFetchListPhongVeAPI = (id) => {
  return (dispatch) => {
    dispatch(actFetchListPhongVeRequest());
    Axios({
      method: "GET",
      url: URL_API_DAT_VE + id,
    })
      .then((result) => dispatch(actFetchListPhongVeSuccess(result.data)))
      .catch((err) => dispatch(actFetchListPhongVeFailed(err)));
  };
};

const actFetchListPhongVeRequest = () => {
  return {
    type: actTypes.FETCH_LIST_CINEMA_REQUEST,
  };
};
const actFetchListPhongVeSuccess = (data) => {
  return {
    type: actTypes.FETCH_LIST_CINEMA_SUCCESS,
    data,
  };
};
const actFetchListPhongVeFailed = (err) => {
  return {
    type: actTypes.FETCH_LIST_CINEMA_FAILED,
    err,
  };
};
