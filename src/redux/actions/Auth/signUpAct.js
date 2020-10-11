import * as actTypes from "../../constants/Auth";
import Axios from "axios";
import {getUser, setUser} from '../../../method/gobal';

export const postSignUpApi = (data,history) => {
  return (dispatch) => {
    dispatch(postSignUpRequest());
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    })
      .then((res) => {
        dispatch(postSignUpSuccess(res.data));
        let user ={
          taiKhoan: res.data.taiKhoan,
          matKhau: res.data.matKhau
        }
        setUser(JSON.stringify(user));
        history.push("/login");
      })
      .catch((err) => {
        dispatch(postSignUpFailed(err));
      });
  };
};

const postSignUpRequest = () => {
  return {
    type: actTypes.POST_SIGNUP_REQUEST,
  };
};

const postSignUpSuccess = (data) => {
  return {
    type: actTypes.POST_SIGNUP_SUCCESS,
    data,
  };
};

const postSignUpFailed = (err) => {
  return {
    type: actTypes.POST_SIGNUP_FAILED,
    err,
  };
};
