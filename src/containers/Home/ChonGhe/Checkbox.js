import React, { useState } from "react";
import $ from "jquery";
export default function Checkbox(props) {
  const [isChecked, setChecked] = useState(false);

  const {ghe} = props;

  return (
    <div className="tr">
      <input
        type="checkbox"
        id={props.ghe.maGhe}
        defaultChecked={isChecked}
        onClick={() => {
          setChecked(!isChecked);
          props.getSeatNumber(isChecked,ghe);
        }}
      />
      <label htmlFor={props.ghe.maGhe} className="">
        <i
          id={props.ghe.maGhe}
          className={
            isChecked
              ? "seat-item cl-green"
              : props.ghe.loaiGhe === "Thuong"
              ? "seat-item cl-dark"
              : "seat-item cl-gold"
          }
        ></i>
      </label>
    </div>
  );
}
