import React from 'react';
import { Detail } from '../api/tmdb';

function DetailView({ data }: {data: Detail }) {
  console.log(data);
  return <div>{data.backdrop_path}</div>;
}

export default DetailView;
