import { combineReducers } from 'redux';
import Movie from './Movie';

const appReducer = combineReducers({
  movie_data: Movie
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
};

export default RootReducer;