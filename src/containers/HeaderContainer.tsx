import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { getMovieListThunk } from '../modules/tmdb';
import { Movie } from '../api/tmdb';
import Header from '../components/Header';

function HeaderContainer() {
  return <Header />;
}

export default HeaderContainer;
