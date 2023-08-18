import { SET_CURRENT_MOVIE_DATA, SET_MOVIE_DATA } from "../Actions/ActionType";

const initialState = {
    movies: null,
    current_movie: null
}

const Movie = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_DATA:
            return {
                ...state,
                movies: action.payload
            }
        case SET_CURRENT_MOVIE_DATA:
            return {
                ...state,
                current_movie: action.payload
            }
        default:
            return state;
    }
}

export default Movie 