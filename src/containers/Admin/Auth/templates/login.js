import React, { useState,useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { postLoginApi } from "../../../../redux/actions/Auth/loginAct";
import  $ from "jquery";
import  {getUser} from "../../../../method/gobal";

const Login = (props) => {
  const [state, setState] = useState({ taiKhoan: '', matKhau: '' });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    state[name] = value;
  };

  const renderError = () => {
    const { errorLogin } = props;
    if (errorLogin !== null) {
      return <span style={{color:"red", margin:'10px'}}>{errorLogin.response.data}</span>;
    }
  };
//12312dsad
//31231234
  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.postLogin(state, props.history);
  };

  // useEffect(()=>{
  //   let user = getUser();
  //   if(user){
  //     console.log(user)
  //     $("input[name='taiKhoan']").val(user.taiKhoan)
  //     $("input[name='matKhau']").val(user.matKhau)
  //   }
  // },[])


  return (
    <div className="wrapper-login fadeInDown">
      <div id="formContent">
        <form onSubmit={handleOnSubmit}>
          <h1 className="login-title">Login</h1>
          {renderError()}
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
          />
        </form>
        {/* Remind Passowrd */}
        <div id="formFooter">
          <Link className="underlineHover" to="/sign-up">
            Register now?
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    loadingLogin: state.LoginReducer.loadingLogin,
    errorLogin: state.LoginReducer.errorLogin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (data, history) => dispatch(postLoginApi(data, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
