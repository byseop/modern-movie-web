import { combineReducers } from 'redux';
import tmdb from './tmdb';
import trend from './trend';
import video from './video'

const rootReducer = combineReducers({
  tmdb,
  trend,
  video
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
