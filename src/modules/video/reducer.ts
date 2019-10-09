import { createReducer } from 'typesafe-actions';
import { VideoState, VideoAction } from './types';
import { asyncState } from '../../lib/reducerUtils';
import { GET_VIDEO, GET_VIDEO_SUCCESS, GET_VIDEO_ERROR } from './actions';

const initialState: VideoState = {
  trendList: asyncState.initial()
};

const trend = createReducer<VideoState, VideoAction>(initialState, {
  [GET_VIDEO]: state => ({
    ...state,
    trendList: asyncState.load()
  }),
  [GET_VIDEO_SUCCESS]: (state, action) => ({
    ...state,
    trendList: asyncState.success(action.payload)
  }),
  [GET_VIDEO_ERROR]: (state, action) => ({
    ...state,
    trendList: asyncState.error(action.payload)
  })
});

export default trend;
