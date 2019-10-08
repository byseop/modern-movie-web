import { createReducer } from 'typesafe-actions';
import { TrendListState, TrendListAction } from './types';
import { asyncState } from '../../lib/reducerUtils';
import {
  GET_TREND_LIST,
  GET_TREND_LIST_SUCCESS,
  GET_TREND_LIST_ERROR
} from './actions';

const initialState: TrendListState = {
  trendList: asyncState.initial()
};

const trend = createReducer<TrendListState, TrendListAction>(initialState, {
  [GET_TREND_LIST]: state => ({
    ...state,
    trendList: asyncState.load()
  }),
  [GET_TREND_LIST_SUCCESS]: (state, action) => ({
    ...state,
    trendList: asyncState.success(action.payload)
  }),
  [GET_TREND_LIST_ERROR]: (state, action) => ({
    ...state,
    trendList: asyncState.error(action.payload)
  })
});

export default trend;
