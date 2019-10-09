import { getVideo } from '../../api/tmdb';
import { getVideoAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getVideoThunk = createAsyncThunk(getVideoAsync, getVideo);
