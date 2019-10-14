import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Detail } from '../../api/tmdb';
import { AsyncState } from '../../lib/reducerUtils';

export type DetailAction = ActionType<typeof actions>;
export type DetailState = {
    detail: AsyncState<Detail, Error>;
}