import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postSignUpApi } from "../../../../redux/actions/Auth/signUpAct";

function Signup(props) {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
    maLoaiNguoiDung: "",
    maNhom: "",
  });
  const renderError = () => {
    const { error } = props;
    console.log(error);
    if (error !== null) {
      return (
        <span style={{ color: "red", margin: "10px" }}>
          {error.response.data}
        </span>
      );
    }
  };
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    state[name] = value;
    state.maLoaiNguoiDung = "KhachHang";
    state.maNhom = "GP01";
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.postSignUpApi(state, props.history);
  };
  
  return (
    <div className="wrapper-login fadeInDown">
      <div id="formContent">
        <form onSubmit={handleOnSubmit}>
          <h1 className="login-title">Sign Up</h1>
          {renderError()}
          <input
            type="text"
            id="hoTen"
            className="fadeIn second login-input"
            name="hoTen"
            placeholder="Full name"
            onChange={handleOnChange}
          />
          <input
            type="text"
            id="email"
            className="fadeIn second login-input"
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          <input
            type="tel"
            id="soDt"
            className="fadeIn second login-input"
            name="soDt"
            placeholder="Phone number"
            onChange={handleOnChange}
          />
          <input
            type="text"
            id="taiKhoan"
            className="fadeIn second login-input"
            name="taiKhoan"
            placeholder="Username"
            onChange={handleOnChange}
          />
          <input
            type="password"
            id="matKhau"
            className="fadeIn third login-input"
            name="matKhau"
            placeholder="Password"
            onChange={handleOnChange}
          />
          <input
            type="submit"
            className="fadeIn fourth btn-login"
            defaultValue="Log In"
            value="Register"
          />
        </form>
        {/* Remind Passowrd */}
        <div id="formFooter">
          <Link className="underlineHover" to="/login">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.SignUpReducer.loadingSignUp,
  error: state.SignUpReducer.errorSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  postSignUpApi: (data, history) => dispatch(postSignUpApi(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
