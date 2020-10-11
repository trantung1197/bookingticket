import * as actTypes from "../../constants/Phim";
import Axios from "axios";
const URL_API = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=`;

export const actFetchDetailMovieAPI = (id) => {
  return (dispatch) => {
    dispatch(actFetchDetailMovieRequest());
    Axios({
      method: "GET",
      url: URL_API + id,
    })
      .then((result) => {
        // console.log(result);
        dispatch(actFetchDetailMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actFetchDetailMovieFailed(err));
      });
  };
};

const actFetchDetailMovieRequest = () => {
  return {
    type: actTypes.FETCH_DETAIL_MOVIE_REQUEST,
  };
};
const actFetchDetailMovieSuccess = (data) => {
  return {
    type: actTypes.FETCH_DETAIL_MOVIE_SUCCESS,
    data,
  };
};
const actFetchDetailMovieFailed = (err) => {
  return {
    type: actTypes.FETCH_DETAIL_MOVIE_FAILED,
    err,
  };
};
