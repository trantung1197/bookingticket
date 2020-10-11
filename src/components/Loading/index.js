import React, { Component } from "react";
import "./loading.css";
import logocs3 from "./img/logocs3.png";
export default class Loading extends Component {
  render() {
    return (
      <div className="loading_body">
        <img src={logocs3} />
      </div>
    );
  }
}
