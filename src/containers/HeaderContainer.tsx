import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { getTrendListThunk } from '../modules/trend';

export type MenuList = {
  id: string;
  label: string;
  isOn: boolean;
};

// const menuList: MenuList[] = [
//   {
//     id: 'now_playing',
//     label: '현재 상영중',
//     isOn: true
//   },
//   {
//     id: 'popular',
//     label: '인기순',
//     isOn: false
//   },
//   {
//     id: 'top_rated',
//     label: '평점순',
//     isOn: false
//   },
//   {
//     id: 'latest',
//     label: '개봉순',
//     isOn: false
//   },
//   {
//     id: 'upcoming',
//     label: '개봉예정',
//     isOn: false
//   }
// ];
const menuList: MenuList[] = [
  {
    id: 'movie',
    label: '영화',
    isOn: true
  },
  {
    id: 'tv',
    label: 'TV',
    isOn: false
  }
];

function HeaderContainer() {
  const dispatch = useDispatch();

  // const loadMovieList = (id: string) => {
  //   dispatch(getMovieListThunk(id));
  // };
  const loadTrendMediaList = (id: string) => {
    dispatch(getTrendListThunk(id, 'week'))
  }

  return <Header menuList={menuList} loadTrendMediaList={loadTrendMediaList} />;
}

export default HeaderContainer;
