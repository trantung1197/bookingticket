import React, { useState } from "react";
import $ from "jquery";
import { Collapse, Button } from "reactstrap";
export default function (props) {
  const [open, setOpen] = useState(false);

  const renderDanhSachGioChieu = (listphim) => {
    if (listphim && listphim.length > 0) {
      return listphim.map((gioChieu, index) => {
        var time = new Date(gioChieu.ngayChieuGioChieu).toLocaleTimeString();
        var timeLg = time.length;

        return (
          <li
            key={index}
            onClick={() => {
              console.log(gioChieu.maLichChieu);
            }}
            className="gioChieu"
          >
            <span>{time.slice(0, timeLg - 6)}</span>
          </li>
        );
      });
    }
  };

  return (
    <li
      key={props.phim.maPhim}
      id={`cinema${props.phim.maPhim}cll`}
      className="suat_chieu"
      style={{
        backgroundImage: "url(" + `${props.phim.hinhAnh}` + ")",
      }}
    >
      <div className="blur-bg-sc"></div>
      <Button
        color="none"
        className="suat_chieu-chitiet_phim"
        onClick={() => setOpen(!open)}
      >
        <img src={props.phim.hinhAnh} />

        <span>{props.phim.tenPhim}</span>
      </Button>
      <Collapse isOpen={open}>
        <ul
          className="suat_chieu-danh_sach_suat "
          id={`cinema${props.phim.maPhim}cll`}
        >
          {renderDanhSachGioChieu(props.phim.lstLichChieuTheoPhim)}
        </ul>
      </Collapse>
    </li>
  );
}
