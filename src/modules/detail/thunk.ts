import { getDetail } from '../../api/tmdb';
import { getDetailAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getMovieThunk = createAsyncThunk(
  getDetailAsync,
  getDetail
);
