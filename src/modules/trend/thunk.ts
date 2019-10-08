import { getTrendMedia } from '../../api/tmdb';
import { getTrendListAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getTrendListThunk = createAsyncThunk(
  getTrendListAsync,
  getTrendMedia
);
