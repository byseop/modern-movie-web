import React from 'react';
import MovieWeb from './containers/MovieWeb';
import './App.css';
import { Route } from 'react-router-dom';
import Detail from './containers/DetailContainer';
import 'swiper/swiper-bundle.css';

const App = () => {
  return (
    <>
      <div className="App">
        <Route path="/" exact component={MovieWeb} />
        <Route path="/detail/:movie_id" component={Detail} />
      </div>
      <footer>
        <div className="copyright">byseop@gmail.com</div>
        <p>Powered by ReactJS</p>
      </footer>
    </>
  );
};

export default App;
