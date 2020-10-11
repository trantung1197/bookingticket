import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actFetchCarouselMovieAPI } from "../Carousel/modules/actions";
import { actFetchDetailMovieAPI } from "../../../redux/actions/Phim/index";
import Swiper from "react-id-swiper";
import { Link, Route, Redirect } from "react-router-dom";
import ModalVideo from "react-modal-video";

function DanhSachDangChieu(props) {
  const [isOpen, setOpen] = useState(false);
  const [idVid, setIdVid] = useState("");

  useEffect(() => {
    props.fetchListMovie();
  }, []);

  const { listMovie } = props;

  const renderMovieItem = () => {
    if (listMovie && listMovie.length > 0) {
      return (
        <Swiper {...params}>
          {listMovie.map((movie) => {
            return (
              <div className="movie-item" key={movie.maPhim}>
                <div className="card-item">
                  <Link
                    className="movie-item-top"
                    to={"/detailmovie/" + `${movie.maPhim}/`}
                  >
                    <img src={movie.hinhAnh} />
                    <div className="overplay-card-movie"></div>
                    <button
                      className="btn-play-card"
                      onClick={() => {
                        var urlId = `${movie.trailer}`.split("embed/")[1];
                        setIdVid(urlId);
                        setOpen(true);
                      }}
                    >
                      <i className="fa fa-play"></i>
                    </button>
                    <div className="imdb-movie">
                      <span>{movie.danhGia}</span>
                      <span>IMDb</span>
                    </div>
                  </Link>
                  <div className="movie-item-body">
                    <div className="body-content">
                      <h5 className="card-title">{movie.tenPhim}</h5>
                      <p className="card-text">120 phút</p>
                    </div>
                    <Link
                      className="btn btn-mua-ve-movie"
                      to={`/detailmovie/${movie.maPhim}`}
                      role="button"
                    >
                      Mua Vé
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Swiper>
      );
    }
  };

  return (
    <div className="list-movie-home" id="lich-chieu-home"> 
      <ModalVideo
        // channel="youtube"
        isOpen={isOpen}
        videoId={idVid}
        onClose={() => {
          setOpen(false);
          setIdVid("");
        }}
      />
      {renderMovieItem()}
    </div>
  );
}

const params = {
  spaceBetween: 0,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchCarouselMovieAPI());
    },
    fetchDetailMovie: () => {
      dispatch(actFetchDetailMovieAPI());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    listMovie: state.CarouselReducer.listMovie,
    detailMovie: state.DetailMovieReducer.detailMovie,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachDangChieu);
