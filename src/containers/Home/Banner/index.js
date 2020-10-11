import React from "react";
import Swiper from "react-id-swiper";

export default function Banner() {
  return (
    <section className="appBanner" id="appBanner">
      <div className="col-xs-12 banner-container">
        <div className="appBanner__content row">
          <div className="col-sm-6 content__note">
            <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button type="button" className="btn btn-danger">
              App miễn phí - Tải về ngay
            </button>
            <p>
              DEGO có hai phiên bản <u>IOS</u> và <u>Android</u>
            </p>
          </div>
          <div className="col-sm-6 content__demo">
            <img src="./img/mobile.png" className="img-fluid"  />
            {/* Swiper */}
            <Swiper {...params} className="swiper-container-moblie" >
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide1.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide2.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide3.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide4.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide5.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide6.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide7.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide8.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/slide/slide9.jpg"
                  width="200px"
                  className="demo-img"
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

const params = {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  mousewheel: true,
  keyboard: true,
  cssMode: true,
};
