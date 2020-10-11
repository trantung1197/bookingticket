import React, { useState } from "react";
import {
  Collapse,
  Button,
} from "reactstrap";

export default function GioChieuItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const { suatChieu } = props;

  const changeColorName = (text, type) => {
    let indexBr = text.indexOf("-");

    if (type) return text.slice(0, indexBr);
    else return text.slice(indexBr + 1);
  };

  return (
    <li className="card-suat-chieu">
      <Button
        className="suat-chieu"
        color="#fafafa"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        style={{ marginBottom: "5px" }}
      >
        <div className="hinh-anh-rap ">
          <img src="https://s3img.vcdn.vn/123phim/2018/09/cgv-thao-dien-pearl-15380174754715.jpg" />
        </div>

        <div className="suat-chieu__thong-tin-rap">
          <span className={suatChieu.thongTinRap.maHeThongRap}>
            {changeColorName(suatChieu.thongTinRap.tenCumRap, true)}
          </span>

          <span>{changeColorName(suatChieu.thongTinRap.tenCumRap, false)}</span>
        </div>
      </Button>
      <Collapse className="thoi-gian-chieu__container" isOpen={isOpen}>
        <h4>2D Digital</h4>
        <ul className="thoi-gian-chieu__ds ">
          {props.renderSuatChieu(suatChieu.maRap)}
        </ul>
      </Collapse>
    </li>
  );
}
