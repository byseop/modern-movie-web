import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { MovieList } from '../../api/tmdb';
import { AsyncState } from '../../lib/reducerUtils';

export type TrendListAction = ActionType<typeof actions>;
export type TrendListState = {
    trendList: AsyncState<MovieList, Error>;
}