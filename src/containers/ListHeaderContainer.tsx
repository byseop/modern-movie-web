import React from 'react';
import Header from '../components/Header';
import { useDispatch } from 'react-redux'
import { getMovieListThunk } from '../modules/tmdb'

export type MenuList = {
  id: string;
  label: string;
  isOn: boolean;
};

const menuList: MenuList[] = [
  {
    id: 'now_playing',
    label: '현재 상영중',
    isOn: true
  },
  {
    id: 'popular',
    label: '인기순',
    isOn: false
  },
  {
    id: 'top_rated',
    label: '평점순',
    isOn: false
  },
  {
    id: 'latest',
    label: '개봉순',
    isOn: false
  },
  {
    id: 'upcoming',
    label: '개봉예정',
    isOn: false
  }
];

function ListHeaderContainer() {
  const dispatch = useDispatch();
  const loadMovieList = (param: string) => {
    dispatch(getMovieListThunk(param))
  }
  const initialParam = 'now_playing'
  return <Header menuList={menuList} load={loadMovieList} initialParam={initialParam} />;
}

export default ListHeaderContainer;
