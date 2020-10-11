import React, { Component } from "react";
import "./HomePage.css";
import Carousel from "../Carousel";
import BoxDatVe from "../../../components/BoxDatVe";
import LichChieuTheoRap from "../../../components/LichChieuTheoRap";
import Banner from "../Banner";
import DangChieu from "../DangChieu";
import HeaderNav from "../../../components/NavBar";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <BoxDatVe />
        <DangChieu />
        <LichChieuTheoRap />
        <Banner />
      </div>
    );
  }
}
