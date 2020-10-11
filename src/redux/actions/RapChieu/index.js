import * as actTypes from "../../constants/RapChieu";
import Axios from "axios";

const URL_QUAN_LY_RAP_API = "http://movie0706.cybersoft.edu.vn/api/QuanLyRap";


let heThongTmp = {};
let raptmp = {};
//   Lay toan bo danh sach he thong rap chieu
export const actFetchListHeThongAPI = () => {
  return (dispatch) => {
    dispatch(actFetchListHeThongRequest());
    Axios({
      url: URL_QUAN_LY_RAP_API + "/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        heThongTmp = result.data[0];
        dispatch(actFetchListHeThongSuccess(result.data));
        dispatch(actFetchRapAPI(result.data[0].maHeThongRap));
      })
      .catch((err) => {
        dispatch(actFetchListHeThongFailed(err));
      });
  };
};

const actFetchListHeThongRequest = () => {
  return {
    type: actTypes.FETCH_LIST_HE_THONG_REQUEST,
  };
};
const actFetchListHeThongSuccess = (data) => {
  return {
    type: actTypes.FETCH_LIST_HE_THONG_SUCCESS,
    data,
  };
};
const actFetchListHeThongFailed = (err) => {
  return {
    type: actTypes.FETCH_LIST_HE_THONG_FAILED,
    err,
  };
};

//
//
//
// Lay thong tin rap theo id cua he thong
export const actFetchRapAPI = (id) => {
  return (dispatch) => {
    dispatch(actFetchListRapRequest());
    Axios({
      url:
        URL_QUAN_LY_RAP_API +
        "/LayThongTinCumRapTheoHeThong?maHeThongRap=" +
        id,
      method: "GET",
    })
      .then((result) => {
        dispatch(actFetchListRapSuccess(result.data));
        dispatch(
          actFetchListSuatChieuAPI(
            heThongTmp.maHeThongRap,
            result.data[0].maCumRap
          )
        );
      })
      .catch((err) => dispatch(actFetchListRapFailed(err)));
  };
};

const actFetchListRapRequest = () => {
  return {
    type: actTypes.FETCH_RAP_REQUEST,
  };
};
const actFetchListRapSuccess = (data) => {
  return {
    type: actTypes.FETCH_RAP_SUCCESS,
    data,
  };
};
const actFetchListRapFailed = (err) => {
  return {
    type: actTypes.FETCH_RAP_FAILED,
    err,
  };
};

//
//
//
// Lay thong tin suat chieu theo id hoac tat ca
export const actFetchListSuatChieuAPI = (maHeThong, maRap) => {
  return (dispatch) => {
    dispatch(actFetchListSuatChieuRequest());
    Axios({
      url:
        URL_QUAN_LY_RAP_API +
        `/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThong}&maNhom=GP13`,

      method: "GET",
    })
      .then((result) => {
        result.data.map((dsCumRap) => {
          dsCumRap.lstCumRap.map((rap) => {
            if (rap.maCumRap == maRap) {
              dispatch(actFetchListSuatChieuSuccess(rap));
            }
          });
        });
      })
      .catch((err) => dispatch(actFetchListSuatChieuFailed(err)));
  };
};

const actFetchListSuatChieuRequest = () => {
  return {
    type: actTypes.FETCH_LIST_SUAT_CHIEU_REQUEST,
  };
};
const actFetchListSuatChieuSuccess = (data) => {
  return {
    type: actTypes.FETCH_LIST_SUAT_CHIEU_SUCCESS,
    data,
  };
};
const actFetchListSuatChieuFailed = (err) => {
  return {
    type: actTypes.FETCH_LIST_SUAT_CHIEU_FAILED,
    err,
  };
};
