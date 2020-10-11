import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./Carousel.css";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { actFetchCarouselMovieAPI } from "./modules/actions";
import Loading from "../../../components/Loading";
import {setStep} from "../../../method/gobal";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      idVid: "",
    };
    // this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovie();
  }

  renderModalVideo = (idVid) => {
    this.setState({
      isOpen: true,
      idVid,
    });
  };

  render() {
    const { loading } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <section className="movie-carousel">
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.idVid}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        />
        <Swiper {...params}>
          <div className="slide-carousel">
            <Link
              className="carousel-btn-play"
              to="/detailmovie/3046"
              onClick={() => {
                setStep('/detailmovie/3046')
              }}
            >
              <img
                width="100%"
                src="./img/carousel.jpg"
                className="img-fluid "
              />
            </Link>
            <button
              className="btn-play"
              onClick={() => {
                this.renderModalVideo("lidO3bXELzU");
              }}
            >
              <i className="fa fa-play"></i>
            </button>
          </div>
          <div className="slide-carousel">
            <Link
              className="carousel-btn-play"
              to="/detailmovie/2966"
              onClick={() => {
                setStep('/detailmovie/2966')
              }}
            >
              <img
                width="100%"
                src="./img/carousel2.png"
                className="img-fluid"
              />
            </Link>
            <button
              className="btn-play"
              onClick={() => {
                this.renderModalVideo("vOUVVDWdXbo");
              }}
            >
              <i className="fa fa-play"></i>
            </button>
          </div>
          <div className="slide-carousel">
            <Link
              className="carousel-btn-play"
              to="/detailmovie/1382"
              onClick={() => {
                setStep('/detailmovie/1382')
              }}
            >
              <img
                width="100%"
                src="./img/carousel3.png"
                className="img-fluid"
              />
            </Link>
            <button
              className="btn-play"
              onClick={() => {
                this.renderModalVideo("ETEwlI7c32w");
              }}
            >
              <i className="fa fa-play"></i>
            </button>
          </div>
          <div className="slide-carousel">
            <Link
              className="carousel-btn-play"
              to="/detailmovie/3050"
              onClick={() => {
                setStep('/detailmovie/3050')
              }}
            >
              <img
                width="100%"
                src="./img/carousel4.png"
                className="img-fluid "
              />
            </Link>
            <button
              className="btn-play"
              onClick={() => {
                this.renderModalVideo("OkWqL0zhMPk");
              }}
            >
              <i className="fa fa-play"></i>
            </button>
          </div>
        </Swiper>
      </section>
    );
  }
}

const params = {
  slidesPerView: 1,
  spaceBetween: 0,

  autoplay: {
    delay: 7000,
  },
  mousewheel: true,
  keyboard: true,
  cssMode: true,
  speed: 500,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const mapStateToProps = (state) => {
  return {
    ListMovie: state.CarouselReducer.listMovie,
    loading: state.CarouselReducer.loadingCarousel,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    fetchMovie: () => {
      dispatch(actFetchCarouselMovieAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Carousel);
