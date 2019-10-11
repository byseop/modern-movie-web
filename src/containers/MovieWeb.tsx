import React from 'react';
import HeaderContainer from './HeaderContainer';
import '../css/MovieWeb.css';
import MainVisualContainer from './MainVisualContainer';
import ListContainer from './ListContainer';

function MovieWeb() {
  return (
    <>
      <header id="header">
        <div className="header_inner">
          <HeaderContainer />
        </div>
      </header>
      <MainVisualContainer />
      <section className="list_section">
        <ListContainer />
      </section>
    </>
  );
}

export default MovieWeb;
