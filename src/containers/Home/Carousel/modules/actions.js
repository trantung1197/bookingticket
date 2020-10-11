import * as actTypes from "./constants";
import Axios from "axios";
const URL_API =
  "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13";

export const actFetchCarouselMovieAPI = () => {
  return (dispatch) => {
    dispatch(actFetchCarouselMovieRequest());
    Axios({
      method: "GET",
      url: URL_API,
    })
      .then((result) => {
        dispatch(actFetchCarouselMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actFetchCarouselMovieFailed(err));
      });
  };
};

export const actFetchCarouselMovieRequest = () => {
  return {
    type: actTypes.GET_CAROUSEL_REQUEST,
  };
};

export const actFetchCarouselMovieSuccess = (data) => {
  return {
    type: actTypes.GET_CAROUSEL_SUCCESS,
    data,
  };
};

export const actFetchCarouselMovieFailed = (err) => {
  return {
    type: actTypes.GET_CAROUSEL_FAILED,
    err,
  };
};
