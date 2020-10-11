import * as actTypes from "./constants";

let initialState = {
  listMovie: [],
  loadingCarousel: false,
  errorCarousel: null,
};

const CarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.GET_CAROUSEL_REQUEST:
      state.listMovie = [];
      state.loadingCarousel = true;
      state.errorCarousel = null;
      return { ...state };
    case actTypes.GET_CAROUSEL_SUCCESS:
    //   console.log("TRong reducer");
      state.listMovie = action.data;
    //   console.log(action.data);
      state.loadingCarousel = false;
      state.errorCarousel = null;
      return { ...state };
    case actTypes.GET_CAROUSEL_FAILED:
      state.listMovie = [];
      state.loadingCarousel = false;
      state.errorCarousel = action.err;
      return { ...state };
    default:
      return { ...state };
  }
};

export default CarouselReducer;
