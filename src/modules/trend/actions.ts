import { createAsyncAction } from 'typesafe-actions';
import { MovieList } from '../../api/tmdb';
import { AxiosError } from 'axios';

// 액션타입
export const GET_TREND_LIST = 'trend/GET_TREND_LIST';
export const GET_TREND_LIST_SUCCESS = 'trend/GET_TREND_LIST_SUCCESS';
export const GET_TREND_LIST_ERROR = 'trend/GET_TREND_LIST_ERROR';

// 액션 생성함수
export const getTrendListAsync = createAsyncAction(
  GET_TREND_LIST,
  GET_TREND_LIST_SUCCESS,
  GET_TREND_LIST_ERROR
)<undefined, MovieList, AxiosError>();
