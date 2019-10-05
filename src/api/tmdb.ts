import axios from 'axios';

const API_KEY = 'dc11dbd0605b4d60cc66ce5e8363e063';
const TMDB_URL = 'https://api.themoviedb.org/3';

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