import React from 'react';
import HeaderContainer from './HeaderContainer';
import '../css/MovieWeb.css';
import MainVisualContainer from './MainVisualContainer';

function MovieWeb() {
  return (
    <>
      <header id="header">
        <div className="header_inner">
          <HeaderContainer />
        </div>
      </header>
      <MainVisualContainer />
    </>
  );
}

export default MovieWeb;
