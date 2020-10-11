import { combineReducers } from "redux";
import CarouselReducer from "../../containers/Home/Carousel/modules/reducer";

import BoxDatVeReducer from "./Phim/BoxDatVeReducer";

import DetailMovieReducer from "./Phim/DetailMovieReducer";
import DanhSachHeThongReducer from "./RapChieu/ListHeThongReducer";
import DanhSachRapReducer from "./RapChieu/ListRapReducer";
import DanhSachSuatChieuTheoHeThong from "./RapChieu/ListSuatChieuReducer";
import PhongVeReducer from "./DatVe/PhongVeReducer";
import SignUpReducer from "./Auth/signUpReducer";
import LoginReducer from "./Auth/loginReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  DetailMovieReducer,
  BoxDatVeReducer,
  DanhSachHeThongReducer,
  DanhSachRapReducer,
  DanhSachSuatChieuTheoHeThong,
  PhongVeReducer,
  LoginReducer,
  SignUpReducer,
});
export default rootReducer;
