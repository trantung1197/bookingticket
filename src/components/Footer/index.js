import React, { useEffect } from "react";
import LogoImg from "./logocs3.png";
import { actFetchListHeThongAPI } from "../../redux/actions/RapChieu";
import { connect } from "react-redux";
function Footer(props) {
  useEffect(() => {
    props.getListPartner();
  }, []);
  const renderListPartner = () => {
    const {listPartner} = props;
    if(listPartner){
        return listPartner.map(item=>{
            return <a key={item.maHeThongRap} >
                <img src={item.logo}/>
            </a>
        })
    }
  };
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-social">
          <p className="title">Social</p>
          <div className="list-social">
            <a>
              <i className="fab fa-facebook-square"></i>
            </a>
            <a>
              <i className="fab fa-google-plus-square"></i>
            </a>
            <a>
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
        <div className="footer-partner">
          <p className="title">Đối tác</p>
          <div className="list-partner">{renderListPartner()}</div>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={LogoImg}></img>
        <p>CyberMovie - Sản phẩm của công ty CyberCompany</p>
        <p>
          <span>Địa chỉ: </span>
          <span>Đường 1, Khu phố 2, Phường 3, Quận 4, Tp.Hồ Chí Minh</span>
        </p>
        <p>
          <span>Số điện thoại: </span>
          <span>0123456789</span>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listPartner: state.DanhSachHeThongReducer.dsHeThong,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListPartner: () => {
      dispatch(actFetchListHeThongAPI());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
