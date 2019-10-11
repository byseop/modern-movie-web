import { createAsyncAction } from 'typesafe-actions';
import { Video } from '../../api/tmdb';
import { AxiosError } from 'axios';

// 액션타입
export const GET_VIDEO = 'trend/GET_VIDEO';
export const GET_VIDEO_SUCCESS = 'trend/GET_VIDEO_SUCCESS';
export const GET_VIDEO_ERROR = 'trend/GET_VIDEO_LIST_ERROR';

// 액션 생성함수
export const getVideoAsync = createAsyncAction(
  GET_VIDEO,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_ERROR
)<undefined, Video, AxiosError>();
