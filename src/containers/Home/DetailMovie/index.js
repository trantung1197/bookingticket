import React, { Component } from "react";
import "./detailmovie.css";
import ModalVideo from "react-modal-video";
import { connect } from "react-redux";
// import { actFetchDetailMovieAPI } from "./modules/actions";
import { actFetchDetailMovieAPI } from "../../../redux/actions/Phim";
import Loading from "../../../components/Loading";
import LichChieuPhim from "./LichChieuTheoPhim";

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      idVid: "",
    };
  }

  renderDetailMovie = () => {
    const { loadingDetailMovie, detailMovie } = this.props;
    let thoiLuong = ``;
    const lichChieu = detailMovie.lichChieu;

    if (lichChieu && lichChieu.length > 0) {
      thoiLuong = lichChieu[0].thoiLuong;
    }
    if (detailMovie)
      return (
        <div className="DetailMovie">
          <div
            className="detail_movie-mobile"
            style={{
              backgroundImage: "url(" + `${detailMovie.hinhAnh}` + ")",
            }}
          >
            <div className="detail_movie-mobile-img">
              <button
                className="btn-play-moblie"
                onClick={() => {
                  this.setState({
                    isOpen:true,
                    idVid: `${detailMovie.trailer}`.split("embed/")[1],
                  });
                }}
              >
                <i className="fa fa-play"></i>
              </button>
            </div>
            <div className="detail_movie-mobile-content">
              <h2 className="ten_phim">{detailMovie.tenPhim}</h2>
              <p className="chi-tiet">
                {thoiLuong} phút - {detailMovie.danhGia} IMDb
              </p>
            </div>
            <a className="btn btn-mua-ve-mobile" href="#suat-chieu-detail">
              Mua vé{" "}
            </a>
          </div>

          <div className="blur-bg"></div>

          <div className="DetailMovie-container row">
            <div className="DetailMovie-item col-sm-4">
              <img src={detailMovie.hinhAnh}></img>
              <button
                className="btn-play"
                onClick={() => {
                  this.setState({
                    isOpen:true,
                    idVid: `${detailMovie.trailer}`.split("embed/")[1],
                  });
                }}
              >
                <i className="fa fa-play"></i>
              </button>
              <div className="blur-bg"></div>
            </div>
            <div className="DetailMovie-item col-sm-5">
              <p className="chi-tiet">
                {new Date(detailMovie.ngayKhoiChieu).toLocaleDateString()}
              </p>
              <h2 className="ten_phim">{detailMovie.tenPhim}</h2>
              <p className="chi-tiet">
                {thoiLuong} phút - {detailMovie.danhGia} IMDb
              </p>
              <a className="btn btn-mua-ve" href="#suat-chieu-detail">
                Mua vé{" "}
              </a>
            </div>
            <div className="DetailMovie-item box-diem col-3">
              <div className="box">
                <svg>
                  <circle
                    className=" cc_track cc1"
                    cx="50%"
                    cy="50%"
                    r="70px"
                  ></circle>

                  <circle
                    className="cc_thumb cc2"
                    cx="50%"
                    cy="50%"
                    r="70px"
                    style={{
                      strokeDashoffset: `calc(440 - (440 * ${detailMovie.danhGia})/10)`,
                    }}
                  ></circle>
                </svg>
                <h2>{detailMovie.danhGia}</h2>
                <span>IMDb</span>
              </div>
            </div>
          </div>
        </div>
      );
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.fetchMovie(id);
  }

  render() {
    const { loadingDetailMovie, detailMovie } = this.props;

    if (loadingDetailMovie) return <Loading />;
    return (
      <div
        className="detail-movie__noidung"
        style={{ backgroundImage: "url(" + `${detailMovie.hinhAnh}` + ")" }}
      >
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.idVid}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        />
        {this.renderDetailMovie()}
        <LichChieuPhim detailMovie={this.props.detailMovie} />
        <div className="blur-bg"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailMovie: state.DetailMovieReducer.detailMovie,
    loadingDetailMovie: state.DetailMovieReducer.loadingDetailMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (id) => {
      dispatch(actFetchDetailMovieAPI(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
