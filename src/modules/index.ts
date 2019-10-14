import { combineReducers } from 'redux';
import tmdb from './tmdb';
import trend from './trend';
import video from './video';
import detail from './detail';

const rootReducer = combineReducers({
  tmdb,
  trend,
  video,
  detail
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
