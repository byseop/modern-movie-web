import { combineReducers } from 'redux';
import tmdb from './tmdb';

const rootReducer = combineReducers({
  tmdb
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
