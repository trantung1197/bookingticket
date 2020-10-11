import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actFetchListHeThongAPI,
  actFetchRapAPI,
  actFetchListSuatChieuAPI,
} from "../../redux/actions/RapChieu";
import SuatChieu from "./ListSuatChieu";

class LichChieuTheoRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heThongActive: `BHDStar`,
      cumRapActive: ``,
    };
  }

  componentDidMount() {
    this.props.fetchListHeThong();
  }

  changeColorName = (text, type) => {
    let indexBr = text.indexOf("-");

    if (type) return text.slice(0, indexBr);
    else return text.slice(indexBr + 1);
  };

  addOrRemoveActiveClass = (id, index) => {
    var li = document.querySelectorAll(id);
    li.forEach((item, i) => {
      item.classList.remove("active");

      if (i == index) {
        item.classList.add("active");
      }
    });
  };

  findIdItemClassActive = (idd) => {
    var li = document.querySelector(idd);
    if (li !== null) {
      return li.id;
    }
  };

  renderDanhSachHeThong = () => {
    let { danhSachHeThong } = this.props;

    if (danhSachHeThong && danhSachHeThong.length > 0) {
      return danhSachHeThong.map((heThong, index) => {
        return (
          <li
            className={index === 0 ? "active" : ""}
            key={heThong.maHeThongRap}
            id={heThong.maHeThongRap}
            onClick={() => {
              this.addOrRemoveActiveClass("ul.ds_he_thong  li", index);
              this.props.fetchListRap(heThong.maHeThongRap);
              this.setState({
                heThongActive: heThong.maHeThongRap,
              });
            }}
          >
            <img src={heThong.logo} />
          </li>
        );
      });
    }
  };

  renderDanhSachRap = () => {
    let { listRap } = this.props;
    if (listRap && listRap.length > 0) {
      return listRap.map((rap, index) => {
        return (
          <li
            className={index === 0 ? "active" : ""}
            key={index}
            onClick={() => {
              this.addOrRemoveActiveClass("ul.ds_rap  li", index);
              this.props.fetchListSuatChieuTheoHeThong(
                this.state.heThongActive,
                rap.maCumRap
              );
              this.setState({
                cumRapActive: rap.maCumRap,
              });
            }}
          >
            <img src="./img/rapchieuphim.jpg" />
            <div className="rapchieu-content">
              <span className={this.state.heThongActive}>
                {this.changeColorName(rap.tenCumRap, true)}
              </span>
              <span>{this.changeColorName(rap.tenCumRap, false)}</span>
              <span>{rap.diaChi}</span>
            </div>
          </li>
        );
      });
    }
  };

  renderDanhSachSuatChieu = () => {
    const { listSuatChieu } = this.props;

    if (listSuatChieu.danhSachPhim && listSuatChieu.danhSachPhim.length > 0) {
      return listSuatChieu.danhSachPhim.map((phim) => {
        return <SuatChieu phim={phim} key={phim.maPhim} />;
      });
    }
  };

  render() {
    return (
      <div id="cum-rap-cyber-movie">

        <div className="cumrap-container">
          <div className="cumrap-item cumrap-hethong">
            <ul className="ds_he_thong">
              {this.renderDanhSachHeThong()}
            </ul>
          </div>

          <div className="cumrap-item cumrap-rap ">
            <ul className="ds_rap">
              {this.renderDanhSachRap()}
            </ul>
          </div>

          <div className="cumrap-item cumrap-suatchieu">
            <ul className="ds_suatchieu">
              {this.renderDanhSachSuatChieu()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    danhSachHeThong: state.DanhSachHeThongReducer.dsHeThong,
    listRap: state.DanhSachRapReducer.listRap,
    listSuatChieu: state.DanhSachSuatChieuTheoHeThong.listSuatChieu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListHeThong: () => {
      dispatch(actFetchListHeThongAPI());
    },
    fetchListRap: (id) => {
      dispatch(actFetchRapAPI(id));
    },
    fetchListSuatChieuTheoHeThong: (maHeThong, maRap) => {
      dispatch(actFetchListSuatChieuAPI(maHeThong, maRap));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LichChieuTheoRap);
