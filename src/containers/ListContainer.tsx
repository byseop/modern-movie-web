import React from 'react';
import List from '../components/List';
import '../css/List.css';
import ListHeaderContainer from './ListHeaderContainer';

function ListContainer() {
  return (
    <div className="list_inner">
      <div className="list_nav">
        <ListHeaderContainer />
      </div>
      <List />
    </div>
  );
}

export default ListContainer;
