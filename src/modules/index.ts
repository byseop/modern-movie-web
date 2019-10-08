import { combineReducers } from 'redux';
import tmdb from './tmdb';
import trend from './trend';

const rootReducer = combineReducers({
  tmdb,
  trend
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
