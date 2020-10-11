import * as actTypes from "../../constants/Phim";
import Axios from "axios";

const URL_API =
  "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13";

const URL_API_LICHCHIEU = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=`;

export const actGetListMovieBoxDatVeAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: URL_API,
    })
      .then((result) => {
        dispatch(actGetListMovieBoxDatVeSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetListMovieBoxDatVeFailed(err));
      });
  };
};



const actGetListMovieBoxDatVeSuccess = (data) => {
  return {
    type: actTypes.GET_BOX_DAT_VE_SUCCESS,
    data,
  };
};

const actGetListMovieBoxDatVeFailed = (err) => {
  return {
    type: actTypes.GET_BOX_DAT_VE_FAILED,
    err,
  };
};

export const actFetchLichChieuAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: URL_API_LICHCHIEU + id,
    })
      .then((result) => {
        
        dispatch(actFetchLichChieuSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actFetchLichChieuFailed(err));
      });
  };
};

const actFetchLichChieuSuccess = (data) => {
  return {
    type: actTypes.FETCH_LICH_BOX_DAT_VE_SUCCESS,
    data,
  };
};

const actFetchLichChieuFailed = (err) => {
  return {
    type: actTypes.FETCH_LICH_BOX_DAT_VE_FAILED,
    err,
  };
};
