import React, { useEffect, useState } from "react";
import { actFetchListHeThongAPI } from "../../../../redux/actions/RapChieu";
import { connect } from "react-redux";
import { setStep, getUser } from "../../../../method/gobal";
import GioChieuItem from "./cpnSuatChieu";
import { Link } from "react-router-dom";

function LichChieuTheoPhim(props) {
  const [maRapTemp, setIdRapTemp] = useState(0);
  var tmp = 0;

  useEffect(() => {
    props.fetchListHeThong();
  }, []);

  const renderDsHeThongRap = () => {
    const { listHeThong } = props;
    if (listHeThong && listHeThong.length > 0) {
      return listHeThong.map((heThong) => {
        return (
          <li key={heThong.maHeThongRap}>
            <img src={heThong.logo} />
            <span>{heThong.tenHeThongRap}</span>
          </li>
        );
      });
    }
  };

  const getDayOfWeek = (date) => {
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

  const renderDsNgayChieu = () => {
    const { lichChieu } = props.detailMovie;
    if (lichChieu && lichChieu.length > 0) {
      var dateF = new Date(lichChieu[0].ngayChieuGioChieu).toLocaleDateString();

      return lichChieu.map((suatChieu, index) => {
        var dateTime = new Date(suatChieu.ngayChieuGioChieu);
        var datettt = new Date(
          suatChieu.ngayChieuGioChieu
        ).toLocaleDateString();

        if (datettt !== dateF || index === 0) {
          dateF = datettt;
          var day = getDayOfWeek(suatChieu.ngayChieuGioChieu);
          return (
            <li key={suatChieu.maLichChieu}>
              <span>{day}</span>
              <span>{datettt}</span>
            </li>
          );
        }
      });
    }
  };

  const renderListRapChieu = () => {
    const { lichChieu } = props.detailMovie;

    if (lichChieu && lichChieu.length > 0) {
      tmp = lichChieu[0].maRap;
      return lichChieu.map((suatChieu, i) => {
        if (suatChieu.maRap != tmp || i == 0) {
          tmp = suatChieu.maRap;
          // console.log(tmp);
          return (
            <GioChieuItem
              key={suatChieu.maLichChieu}
              suatChieu={suatChieu}
              renderSuatChieu={renderSuatChieu}
            />
          );
        }
      });
    }
    else {
      return (
        <div>
          <h3 style={{ margin: "40px auto" }}>Hiện tại không có suất chiếu.</h3>
          <Link to="/" className="back-home-link btn btn-success">
            Back to home
        </Link>
        </div>
      );
    }
  };

  const renderSuatChieu = (idMaRap) => {
    const { lichChieu } = props.detailMovie;
    if (lichChieu && lichChieu.length > 0) {
      return lichChieu.map((suatChieu) => {
        if (suatChieu.maRap == idMaRap) {
          var time =
            new Date(suatChieu.ngayChieuGioChieu).getHours() +
            ":" +
            new Date(suatChieu.ngayChieuGioChieu).getMinutes();

          return (
            <li key={suatChieu.maLichChieu} className="thoi-gian-chieu__item">
              <Link
                to={getUser() ? `/chon-ghe/${suatChieu.maLichChieu}` : "/login"}
                onClick={() => {
                  setStep(`/chon-ghe/${suatChieu.maLichChieu}`);
                }}
              >
                {time}
              </Link>
            </li>
          );
        }
      });
    }
    console.log(idMaRap);
  };

  return (
    <div className="detail-movie__showLichChieu row" id="suat-chieu-detail">
      <div className="detail-movie__showHeThong col-3">
        <ul className="detail-movie__dsHeThong">{renderDsHeThongRap()}</ul>
      </div>
      <div className="detail-movie__showSuatChieu col-9 flex-column">
        <ul className="detail-movie__dsDate row-2">{renderDsNgayChieu()}</ul>

        <ul className="detail-movie__dsSuatChieu row-10">
          {renderListRapChieu()}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listHeThong: state.DanhSachHeThongReducer.dsHeThong,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListHeThong: () => {
      dispatch(actFetchListHeThongAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LichChieuTheoPhim);
