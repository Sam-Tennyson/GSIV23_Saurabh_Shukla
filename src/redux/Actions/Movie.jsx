import { SET_CURRENT_MOVIE_DATA, SET_MOVIE_DATA } from "./ActionType"

export const setMovieData = (payload) => {
    return {
        type: SET_MOVIE_DATA,
        payload
    }
}

export const setCurrentMovieData = (payload) => {
    return {
        type: SET_CURRENT_MOVIE_DATA,
        payload
    }
}