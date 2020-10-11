import React, { Component } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import {
  getUser,
  getStep,
  setStep,
  setUser,
  removeLocalItem,
} from "../../method/gobal";
import LogoImg from "./img/logocs3.png";
import ImgDef from "./img/avatarDef.jpg";
class HeaderNav extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 70;
      if (!isTop) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  renderBtnLogin = () => {
    let { scrolled } = this.state;
    let user = getUser();

    if (!user) {
      return (
        <Link
          className={scrolled ? "btn-login btn-crolled" : "btn-login "}
          type="submit"
          to="/login"
          style={{ width: "100%" }}
          onClick={() => {
            setStep(`/`);
          }}
        >
          <img src={ImgDef} id="avatar-login" />
          <span>Đăng Nhập</span>
        </Link>
      );
    } else {
      return (
        <Link
          className={scrolled ? "btn-login btn-crolled" : "btn-login "}
          type="submit"
          to="/"
        >
          <img src={ImgDef} id="avatar-login" />
          <span style={{ textTransform: "capitalize" }}>{user.hoTen}</span>
        </Link>
      );
    }
  };

  renderBtnLogOut = () => {
    const { scrolled } = this.state;
    return (
      <div className="d-inline-block">
        <button
          className={scrolled ? "btn-diaDiem btn-crolled" : "btn-diaDiem"}
          onClick={() => {
            removeLocalItem("User");
            removeLocalItem("UserAdmin");
            this.forceUpdate();
          }}
        >
          Log Out
        </button>
      </div>
    );
  };

  render() {
    let { scrolled } = this.state;
    return (
      <header
        className={scrolled ? "movieHeader header-croller" : "movieHeader "}
      >
        <nav
          className={
            scrolled
              ? "navbar navbar-expand-md navbar-dark movieHeader__navbar"
              : "navbar navbar-expand-md navbar-light movieHeader__navbar"
          }
        >
          <Link className="navbar-brand header__logo" to="/">
            <img
              src={LogoImg}
              width="50px"
              className="img-fluid"
              alt="logoMv"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse collapse-header"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className={scrolled ? "nav-item a-crolled" : "nav-item "}>
                <button className="btn-login-moblie nav-link" type="submit">
                  <span>ĐĂNG NHẬP</span>
                </button>
              </li>
              <li className={scrolled ? "nav-item a-crolled" : "nav-item "}>
                <NavLink
                  exact
                  className="nav-link"
                  to="/"
                  onClick={() => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li className={scrolled ? "nav-item a-crolled" : "nav-item "}>
                <a className="nav-link" href="#lich-chieu-home">
                  CHỌN PHIM
                </a>
              </li>
              <li className={scrolled ? "nav-item a-crolled" : "nav-item "}>
                <a className="nav-link" href="#cum-rap-cyber-movie">
                  CỤM RẠP
                </a>
              </li>
              <li className={scrolled ? "nav-item a-crolled" : "nav-item "}>
                <a className="nav-link" to="/tintuc">
                  TIN TỨC
                </a>
              </li>
              <li className={scrolled ? "nav-item a-crolled" : "nav-item "}>
                <a className="nav-link" href="#appBanner">
                  ỨNG DỤNG
                </a>
              </li>
            </ul>

            <div className="header__login  my-2 my-lg-0">
              {this.renderBtnLogin()}
              <span className={getUser() ? "header__vach" : ""} />
              {getUser() ? this.renderBtnLogOut() : ""}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderNav;
