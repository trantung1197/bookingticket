import React, { Component } from "react";
import "./css/boxdatve.css";
import "./css/icons.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actGetListMovieBoxDatVeAPI,
  actFetchLichChieuAPI,
} from "../../redux/actions/Phim/boxVe";
import {getUser, setStep  } from '../../method/gobal';

class BoxDatVe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rapChieu: {},
      ngayChieu: ``,
      maSuatChieu: ``,
      isSelectedBtnChonPhim: false,
      textChonPhim: ``,
      isSelectedBtnChonRap: false,
      textChonRap: ``,
      isSelectedBtnChonNgay: false,
      textChonNgay: ``,
      isSelectedBtnChonSuat: false,
      textChonSuat: ``,
    };
  }

  componentDidMount() {
    this.props.getlistmovie();
  }
  componentDidUpdate() {}
  componentWillUpdate() {}

  getDayOfWeek = (date) => {
    var dateOfWeak = new Date(date);
    var nameOfWeakDay = new Array(7);
    nameOfWeakDay[0] = "Thứ Hai";
    nameOfWeakDay[1] = "Thứ Ba";
    nameOfWeakDay[2] = "Thứ Tư";
    nameOfWeakDay[3] = "Thứ Năm";
    nameOfWeakDay[4] = "Thứ Sáu";
    nameOfWeakDay[5] = "Thứ Bảy";
    nameOfWeakDay[6] = "Chủ Nhật";

    var day = nameOfWeakDay[dateOfWeak.getDay()];
    return day;
  };

  renderButton = (idbtn, textB, textA, status, icon) => {
    if (!status) {
      return (
        <button
          className="btn"
          type="button"
          id={idbtn}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#fafafa",
            color: "#393e46",
          }}
        >
          <span>
            {textB}
            <i className="fas fa-chevron-down" />
          </span>
        </button>
      );
    } else {
      return (
        <button
          className="btn"
          type="button"
          id={idbtn}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#04b962",
            color: "#fafafa",
          }}
        >
          <span>
            {textA}
            <i className={icon} />
          </span>
        </button>
      );
    }
  };

  renderRapChieu = () => {
    let { listLichChieu } = this.props;
    if (this.state.isSelectedBtnChonPhim)
      if (listLichChieu) {
        var listHeThongRap = listLichChieu.heThongRapChieu;
        if (listHeThongRap && listHeThongRap.length > 0) {
          return listHeThongRap.map((heThongRap) => {
            var cumRap = heThongRap.cumRapChieu;

            if (cumRap && cumRap.length > 0) {
              return cumRap.map((rap) => {
                return (
                  <li
                    key={rap.maCumRap}
                    id={rap.maCumRap}
                    onClick={() => {
                      this.setState({
                        rapChieu: rap,
                        isSelectedBtnChonNgay: false,
                        isSelectedBtnChonSuat: false,
                        isSelectedBtnChonRap: true,
                        textChonRap: `${rap.tenCumRap}`,
                      });
                    }}
                  >
                    {rap.tenCumRap} <i className="icon-popcorn"></i>
                  </li>
                );
              });
            }
          });
        }
        // return ()
      }
  };

  renderListMovie = () => {
    let { listMovieDatVe } = this.props;
    if (listMovieDatVe && listMovieDatVe.length > 0) {
      return listMovieDatVe.map((item) => {
        return (
          <li
            key={item.maPhim}
            id={item.maPhim}
            onClick={() => {
              this.props.fetchLichChieu(`${item.maPhim}`);

              this.setState({
                isSelectedBtnChonRap: false,
                isSelectedBtnChonSuat: false,
                isSelectedBtnChonNgay: false,
                isSelectedBtnChonPhim: true,
                textChonPhim: `${item.tenPhim}`,
              });
            }}
          >
            {item.tenPhim}
            <i className="fas fa-film"></i>
          </li>
        );
      });
    }
  };

  renderCalendar = () => {
    let { rapChieu } = this.state;
    var ngayChieu = ``;
    var lichChieu = rapChieu.lichChieuPhim;
    if (this.state.isSelectedBtnChonPhim && this.state.isSelectedBtnChonRap)
      if (lichChieu && lichChieu.length > 0) {
        return lichChieu.map((item) => {
          if (
            new Date(item.ngayChieuGioChieu).toLocaleDateString() !== ngayChieu
          ) {
            ngayChieu = new Date(item.ngayChieuGioChieu).toLocaleDateString();
            var dow = this.getDayOfWeek(ngayChieu);

            return (
              <li
                key={item.maLichChieu}
                onClick={() => {
                  this.setState({
                    ngayChieu,
                    isSelectedBtnChonNgay: true,
                    textChonNgay: `${dow}: ${ngayChieu}`,
                    isSelectedBtnChonSuat: false,
                    textChonSuat: `Chọn Suất`,
                  });
                }}
              >
                <span>
                  {dow}: {ngayChieu}
                </span>
                <i className="far fa-calendar-check"></i>
              </li>
            );
          }
        });
      }
  };

  renderSuatChieu = () => {
    let { ngayChieu, rapChieu } = this.state;

    let suatChieu = rapChieu.lichChieuPhim;
    if (
      this.state.isSelectedBtnChonPhim &&
      this.state.isSelectedBtnChonRap &&
      this.state.isSelectedBtnChonNgay
    )
      if (ngayChieu !== "" && suatChieu && suatChieu.length > 0) {
        return suatChieu.map((suat) => {
          if (
            new Date(suat.ngayChieuGioChieu).toLocaleDateString() == ngayChieu
          ) {
            var gioChieu = new Date(
              suat.ngayChieuGioChieu
            ).toLocaleTimeString();
            return (
              <li
                key={suat.maLichChieu}
                onClick={() => {
                  this.setState({
                    isReady: true,
                    maSuatChieu: suat.maLichChieu,
                    isSelectedBtnChonSuat: true,
                    textChonSuat: `${gioChieu}`,
                  });
                }}
              >
                <span>{gioChieu}</span> <i className="far fa-clock"></i>
              </li>
            );
          }
        });
      }
  };

  render() {
    return (
      <div className="datve_box-container">
        <div className="datve_box-item">
          <div className="dropdown">
            {this.renderButton(
              "datve-dropdown-chonphim",
              "Chọn Phim",
              this.state.textChonPhim,
              this.state.isSelectedBtnChonPhim,
              "fas fa-film"
            )}
            <ul
              className="dropdown-menu"
              id="datve-phim"
              aria-labelledby="datve-dropdown-chonphim"
            >
              {this.renderListMovie()}
            </ul>
          </div>
        </div>
        <div className="datve_box-item">
          <div className="dropdown">
            {this.renderButton(
              "datve-dropdown-chonrap",
              "Chọn Rạp",
              this.state.textChonRap,
              this.state.isSelectedBtnChonRap,
              "icon-popcorn"
            )}
            <ul
              className="dropdown-menu"
              id="datve-phim"
              aria-labelledby="datve-dropdown-chonrap"
            >
              <li
                style={
                  this.state.isSelectedBtnChonPhim
                    ? { display: "none" }
                    : { justifyContent: "center" }
                }
              >
                Vui lòng chọn phim trước
              </li>
              {this.renderRapChieu()}
            </ul>
          </div>
        </div>
        <div className="datve_box-item">
          <div className="dropdown">
            {this.renderButton(
              "datve-dropdown-chonngay",
              "Ngày Xem",
              this.state.textChonNgay,
              this.state.isSelectedBtnChonNgay,
              "far fa-calendar-check"
            )}
            <ul
              className="dropdown-menu"
              id="datve-phim"
              aria-labelledby="datve-dropdown-chonngay"
            >
              <li
                style={
                  this.state.isSelectedBtnChonRap
                    ? { display: "none" }
                    : { justifyContent: "center" }
                }
              >
                Vui lòng chọn rạp trước
              </li>
              {this.renderCalendar()}
            </ul>
          </div>
        </div>
        <div className="datve_box-item">
          <div className="dropdown">
            {this.renderButton(
              "datve-dropdown-chonsuatchieu",
              "Chọn Suất",
              this.state.textChonSuat,
              this.state.isSelectedBtnChonSuat,
              "far fa-clock"
            )}
            <ul
              className="dropdown-menu"
              id="datve-phim"
              aria-labelledby="datve-dropdown-chonsuatchieu"
            >
              <li
                style={
                  this.state.isSelectedBtnChonNgay
                    ? { display: "none" }
                    : { justifyContent: "center" }
                }
              >
                Vui lòng chọn ngày trước
              </li>
              {this.renderSuatChieu()}
            </ul>
          </div>
        </div>
        <div className="datve_box-btn">
          <Link
            className={
              this.state.isSelectedBtnChonSuat &&
              this.state.isSelectedBtnChonNgay &&
              this.state.isSelectedBtnChonRap &&
              this.state.isSelectedBtnChonPhim
                ? "datve-handle btn btn-buy"
                : "datve-handle btn btn-secondary"
            }
            disabled={!this.state.isSelectedBtnChonSuat}
            to={
              getUser() ? `/chon-ghe/${this.state.maSuatChieu}` : `/login`
            }
            onClick={() => {
              setStep(`/chon-ghe/${this.state.maSuatChieu}`);
            }}
          >
            Mua vé ngay
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovieDatVe: state.BoxDatVeReducer.listMovieDatVe,
    listLichChieu: state.BoxDatVeReducer.listLichChieu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getlistmovie: () => {
      dispatch(actGetListMovieBoxDatVeAPI());
    },
    fetchLichChieu: (id) => {
      dispatch(actFetchLichChieuAPI(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxDatVe);
