import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { getTrendListThunk } from '../modules/trend';

export type MenuList = {
  id: string;
  label: string;
  isOn: boolean;
};

const menuList: MenuList[] = [
  {
    id: 'movie',
    label: '영화 트렌드',
    isOn: true
  },
  {
    id: 'tv',
    label: 'TV 트렌드',
    isOn: false
  }
];

function HeaderContainer() {
  const dispatch = useDispatch();
  const loadTrendMediaList = (id: string) => {
    dispatch(getTrendListThunk(id))
  }
  const initialParam = 'movie'

  return (
    <>
      <h2 className="head_title">이번 주 트렌드</h2>
      <Header menuList={menuList} load={loadTrendMediaList} initialParam={initialParam} />
    </>
  );
}

export default HeaderContainer;
