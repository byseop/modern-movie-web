import { createReducer } from 'typesafe-actions';
import { MovieListState, MovieListAction } from './types';
import { asyncState } from '../../lib/reducerUtils';
import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR
} from './actions';

const initialState: MovieListState = {
  movieList: asyncState.initial()
};

const tmdb = createReducer<MovieListState, MovieListAction>(initialState, {
  [GET_MOVIE_LIST]: state => ({
    ...state,
    movieList: asyncState.load()
  }),
  [GET_MOVIE_LIST_SUCCESS]: (state, action) => ({
    ...state,
    movieList: asyncState.success(action.payload)
  }),
  [GET_MOVIE_LIST_ERROR]: (state, action) => ({
    ...state,
    movieList: asyncState.error(action.payload)
  })
});

export default tmdb;
