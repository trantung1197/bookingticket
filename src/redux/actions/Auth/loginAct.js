import * as actTypes from "../../constants/Auth";
import Axios from "axios";
import {getStep} from '../../../method/gobal';

export const postLoginApi = (data, history) => {
  return (dispatch) => {
    dispatch(postLoginRequest());
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data,
    })
      .then((res) => {
        dispatch(postLoginSuccess(res.data));
        if(res.data.maLoaiNguoiDung==='QuanTri'){
            localStorage.setItem("UserAdmin", JSON.stringify(res.data));
            history.push("/dashboard");
        }else{
            localStorage.setItem("User", JSON.stringify(res.data));
            history.push(`${getStep()}`);
        }
       
      })
      .catch((err) => {
        dispatch(postLoginFailed(err));
      });
  };
};

const postLoginRequest = () => {
  return {
    type: actTypes.POST_LOGIN_REQUEST,
  };
};

const postLoginSuccess = (data) => {
  return {
    type: actTypes.POST_LOGIN_SUCCESS,
    data,
  };
};

const postLoginFailed = (err) => {
  return {
    type: actTypes.POST_LOGIN_FAILED,
    err,
  };
};
