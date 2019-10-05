import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { getMovieListThunk } from '../modules/tmdb';
import { Movie } from '../api/tmdb';
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
  return <Header menuList={menuList} />;
}

export default HeaderContainer;
