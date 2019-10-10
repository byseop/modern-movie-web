import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Video } from '../../api/tmdb';
import { AsyncState } from '../../lib/reducerUtils';

export type VideoAction = ActionType<typeof actions>;
export type VideoState = {
  video: AsyncState<Video, Error>;
};
