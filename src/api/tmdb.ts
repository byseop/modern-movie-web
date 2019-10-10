import axios from 'axios';

const API_KEY = 'dc11dbd0605b4d60cc66ce5e8363e063';
const TMDB_URL = 'https://api.themoviedb.org/3';
export const POSTER_URL_342 = 'https://image.tmdb.org/t/p/w342';
export const POSTER_URL_500 = 'https://image.tmdb.org/t/p/w500';
export const POSTER_URL_780 = 'https://image.tmdb.org/t/p/w780';
export const POSTER_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';

export async function getMovie(param: string) {
  const response = await axios.get<MovieList>(
    `${TMDB_URL}/movie/${param}?api_key=${API_KEY}&language=ko-KR&page=1`
  );
  return response.data;
}

export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export type MovieList = {
  results: [];
};

export async function getTrendMedia(mediaType: string, timeWindow: string) {
  const response = await axios.get<MovieList>(
    `${TMDB_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&language=ko-KR`
  );
  return response.data;
}

export interface Media extends Movie {
  media_type: string;
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
export interface VideoList {
  id: number,
  results: Video[]
}

export async function getVideo(mediaType: string, id: number) {
  const response = await axios.get<VideoList>(
    `${TMDB_URL}/${mediaType}/${id}/videos?api_key=${API_KEY}&language=ko-KR`
  );
  return response.data;
}
