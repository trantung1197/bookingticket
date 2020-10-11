import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchListPhongVeAPI } from "../../../redux/actions/DatVe";
import { actFetchListHeThongAPI } from "../../../redux/actions/RapChieu";
import $ from "jquery";
import Checkbox from "./Checkbox";
import { Alert } from "reactstrap";
class ChonGhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGhe: [],
      thanhToan: 0,
      isRenderTicket: false,
      danhSachVe: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPhongVe(id);
  }

  thousandDot = (value) => {
    value = value.toString().replace(/[\,]+/g, "");
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return value;
  };

  removeDot = (value) => {
    return parseInt(value.replace(/[.,]/g, ""));
  };

  renderListSeatVip = () => {
    const { phongVe, dsHeThong } = this.props;
    if (phongVe.danhSachGhe !== null && phongVe.danhSachGhe !== undefined) {
      var tmp = 0;
      return phongVe.danhSachGhe.map((ghe, index) => {
        if (ghe.loaiGhe === "Vip") {
          if (++tmp <= 60)
            return (
              <Checkbox
                ghe={ghe}
                key={index}
                soluong={this.state.listGhe}
                getSeatNumber={this.getSeatNumber}
              />
            );
        }
      });
    }
  };

  renderListSeatThuong = () => {
    const { phongVe, dsHeThong } = this.props;
    if (phongVe.danhSachGhe !== null && phongVe.danhSachGhe !== undefined) {
      var tmp = 0;
      return phongVe.danhSachGhe.map((ghe, index) => {
        if (ghe.loaiGhe === "Thuong") {
          if (++tmp <= 50)
            return (
              <Checkbox
                ghe={ghe}
                key={index}
                soluong={this.state.listGhe}
                getSeatNumber={this.getSeatNumber}
              />
            );
        }
      });
    }
  };

  getSeatNumber = (status, ghe) => {
    if (ghe !== null && ghe !== undefined) {
      var listGhe = [...this.state.listGhe];
      var thanhToan = this.state.thanhToan;
      var danhSachVe = [...this.state.danhSachVe];
      const { maGhe, giaVe, tenGhe } = ghe;

      if (!status) {
        listGhe.push(tenGhe);
        thanhToan += giaVe;
        danhSachVe.push({ maGhe, giaVe });
      } else {
        var index = listGhe.indexOf(tenGhe);
        listGhe.splice(index, 1);
        thanhToan -= giaVe;
      }

      this.setState({
        listGhe,
        thanhToan,
        danhSachVe,
      });

      if (listGhe.length > 0) {
        this.setState({
          isRenderTicket: true,
        });
      } else {
        this.setState({
          isRenderTicket: false,
        });
      }
    }
  };

  renderSoGhe = () => {
    if (this.state.listGhe && this.state.listGhe.length > 0) {
      return this.state.listGhe.map((ghe, index) => {
        return <span key={index}>{ghe}, </span>;
      });
    }
  };

  renderChiTietRap = () => {
    const { phongVe } = this.props;
    if (phongVe.thongTinPhim !== null && phongVe.thongTinPhim !== undefined)
      return (
        <div className="rap__chi-tiet">
          <div className="thong-tin-ve">
            <p className="ten-rap">{phongVe.thongTinPhim.tenCumRap}</p>
            <span>
              Phim: <span>{phongVe.thongTinPhim.tenPhim}</span>{" "}
            </span>
            <span>
              Rạp: <span>{phongVe.thongTinPhim.tenRap}</span>
            </span>
            <span>
              Giờ chiếu: <span>{phongVe.thongTinPhim.gioChieu}</span>
            </span>
            <span className="rap__so-ghe">Số ghế: {this.renderSoGhe()}</span>
          </div>
          <div className="gia-ve">
            <span>Tổng tiền: </span>
            <span className="total">
              {this.thousandDot(this.state.thanhToan)} VNĐ
            </span>
          </div>
        </div>
      );
  };

  getUser = () => {
    return localStorage.getItem("user");
  };

  renderBtnBuy = () => {
    let { isRenderTicket } = this.state;
    let { phongVe } = this.props;
    let taiKhoanNguoiDung = this.getUser();

    let data = {
      maLichChieu: phongVe.maLichChieu,
      danhSachVe: this.state.danhSachVe,
      taiKhoanNguoiDung
    };

    return (
      <button
        type="button"
        className={isRenderTicket ? "btn btn-success" : "btn btn-secondary"}
        disabled={!isRenderTicket}
        onClick={() => {
          if(!data.taiKhoanNguoiDung || data.taiKhoanNguoiDung === ''){
            console.log(data)
          }
          else{
            //dat ve
            alert("dat ve thanh cong")
          }
        }}
      >
        Thanh Toán
      </button>
    );
  };

  render() {
    return (
      <div className="chon-ghe__container">
        <div className="chon-ghe__header">
          <div className="header__tinh-trang">
            <h4>CHỌN GHẾ & THANH TOÁN</h4>
            <h4>KẾT QUẢ ĐẶT VÉ</h4>
          </div>

          <div className="header__thong-tin-user">
            <img src="./img/avatar-1.jpg" width="50px" />
            <span>Tran Tung</span>
          </div>
        </div>

        <div className="chon-ghe__rap">
          <div className="rap__thong-tin">{this.renderChiTietRap()}</div>
          <div className="btn-mua-ve"> {this.renderBtnBuy()}</div>
          <span className="rap__man-hinh-name">Màn hình</span>
          <div className="rap__man-hinh"></div>
        </div>

        <div className="list-seat-container">
          <div className="so-ghe-chu">
            <span></span>
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
            <span>F</span>
            <span>G</span>
            <span>H</span>
            <span>I</span>
            <span>K</span>
            <span>L</span>
          </div>
          <div className="dsGhe">
            <div className="so-ghe-so">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="dsGheThuong">{this.renderListSeatThuong()}</div>
            <div className="dsGheVip">{this.renderListSeatVip()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  phongVe: state.PhongVeReducer.phongVe,
  loadingPV: state.PhongVeReducer.loadingPV,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhongVe: (id) => dispatch(actFetchListPhongVeAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChonGhe);
