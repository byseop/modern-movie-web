import { createReducer } from 'typesafe-actions';
import { DetailState, DetailAction } from './types';
import { asyncState } from '../../lib/reducerUtils';
import {
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_ERROR
} from './actions';

const initialState: DetailState = {
  detail: asyncState.initial()
};

const detail = createReducer<DetailState, DetailAction>(initialState, {
  [GET_DETAIL]: state => ({
    ...state,
    detail: asyncState.load()
  }),
  [GET_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    detail: asyncState.success(action.payload)
  }),
  [GET_DETAIL_ERROR]: (state, action) => ({
    ...state,
    detail: asyncState.error(action.payload)
  })
});

export default detail;
