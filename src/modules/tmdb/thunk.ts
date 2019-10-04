import { getMovie } from '../../api/tmdb';
import { getMovieListAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getMovieListThunk = createAsyncThunk(
  getMovieListAsync,
  getMovie
);
