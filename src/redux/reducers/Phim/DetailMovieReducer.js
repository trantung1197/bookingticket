import * as actTypes from "../../constants/Phim";


let initailState = {
    detailMovie: {},
    loadingDetailMovie: false,
    errDetilMovie: null
}


const DetailMovieReducer = (state = initailState, action) => {
    switch (action.type) {
        case actTypes.FETCH_DETAIL_MOVIE_REQUEST:
            state.detailMovie = {};
            state.loadingDetailMovie = true;
            state.errDetilMovie = null;
            return { ...state };
        case actTypes.FETCH_DETAIL_MOVIE_SUCCESS:
            state.detailMovie = action.data;
            state.loadingDetailMovie = false;
            state.errDetilMovie = null;
            return { ...state };
        case actTypes.FETCH_DETAIL_MOVIE_FAILED:
            state.detailMovie = {};
            state.loadingDetailMovie = false;
            state.errDetilMovie = action.err;
            return { ...state };

        default:
            return { ...state };
    }
}
export default DetailMovieReducer;