import { createAsyncAction } from 'typesafe-actions';
import { MovieList } from '../../api/tmdb';
import { AxiosError } from 'axios';

// 액션타입
export const GET_MOVIE_LIST = 'tmdb/GET_MOVIE_LIST';
export const GET_MOVIE_LIST_SUCCESS = 'tmdb/GET_MOVIE_LIST_SUCCESS';
export const GET_MOVIE_LIST_ERROR = 'tmdb/GET_MOVIE_LIST_ERROR';

// 액션생성함수
export const getMovieListAsync = createAsyncAction(
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR
)<undefined, MovieList, AxiosError>();
