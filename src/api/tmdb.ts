import axios from 'axios';

export const API_KEY = 'dc11dbd0605b4d60cc66ce5e8363e063';
export const TMDB_URL = 'https://api.themoviedb.org/3';
export const POSTER_URL_342 = 'https://image.tmdb.org/t/p/w342';
export const POSTER_URL_500 = 'https://image.tmdb.org/t/p/w500';
export const POSTER_URL_780 = 'https://image.tmdb.org/t/p/w780';
export const POSTER_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';

export async function getMovie(param: string, search?: boolean) {
  const response = await axios.get<MovieList>(
    `${TMDB_URL}${search ? '/search' : ''}/movie/${
      search ? '?query=' : ''
    }${param}${search ? '&' : '?'}api_key=${API_KEY}&language=ko-KR&page=1`
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
  name: string;
  original_name: string;
}

export type MovieList = {
  results: [];
};

export async function getTrendMedia(mediaType: string) {
  const response = await axios.get<MovieList>(
    `${TMDB_URL}/trending/${mediaType}/week?api_key=${API_KEY}&language=ko-KR`
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
  id: number;
  results: Video[];
}

export async function getVideo(mediaType: string, id: number) {
  const response = await axios.get<VideoList>(
    `${TMDB_URL}/${mediaType}/${id}/videos?api_key=${API_KEY}&language=ko-KR`
  );
  return response.data;
}

export interface Detail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export async function getDetail(id: string) {
  const response = await axios.get<Detail>(
    `${TMDB_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
  );
  return response.data;
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  name: string;
  order: number;
  profile_path: string;
  id: number;
}
export interface Crew {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
}
export interface Credit {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
export const getCredit = async (id: string | number) => {
  const response = await axios.get<Credit>(
    `${TMDB_URL}/movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`
  );
  return response.data;
};
