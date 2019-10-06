import React from 'react';
import { useDispatch } from 'react-redux';
import { getMovieListThunk } from '../modules/tmdb';
import Header from '../components/Header';

export type MenuList = {
  id: string;
  label: string;
  isOn: boolean;
};

const menuList: MenuList[] = [
  {
    id: 'now_playing',
    label: '현재 상영중',
    isOn: false
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

function HeaderContainer() {
  const dispatch = useDispatch();

  const loadMovieList = (id: string) => {
    dispatch(getMovieListThunk(id));
  };

  return <Header menuList={menuList} loadMovieList={loadMovieList} />;
}

export default HeaderContainer;
