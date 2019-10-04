import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { MovieList } from '../../api/tmdb';
import { AsyncState } from '../../lib/reducerUtils';

export type MovieListAction = ActionType<typeof actions>;
export type MovieListState = {
  movieList: AsyncState<MovieList, Error>;
};
