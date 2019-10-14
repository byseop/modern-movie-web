import { createAsyncAction } from 'typesafe-actions';
import { Detail } from '../../api/tmdb';
import { AxiosError } from 'axios';

// 액션타입
export const GET_DETAIL = 'detail/GET_DETAIL';
export const GET_DETAIL_SUCCESS = 'detail/GET_DETAIL_SUCCESS';
export const GET_DETAIL_ERROR = 'detailtrend/GET_DETAIL_ERROR';

// 액션 생성함수
export const getDetailAsync = createAsyncAction(
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_ERROR
)<undefined, Detail, AxiosError>();
