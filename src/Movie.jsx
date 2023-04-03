import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Counter } from './Counter';
import { Editmovie } from './Editmovie';

export function Movie({data, id, deletebutton ,editbutton}) {
  // const design={
  //   color:"green"
  //   // backgroundColor="orange"
  // }


  const navigate = useNavigate();
  return (
    <div className='main-contain'>
      <img className='movie-poster' src={data.poster} alt={data.name} />
      <div className='movie-spec'>
        <h2 className='movie-name'>{data.name}</h2>
        <p style={{ color: data.rating > 8.5 ? "green" : "red" }} className='movie-rating'>⭐{data.rating}</p>

      </div>
      <Counter /> {deletebutton} {editbutton}
     
      <button onClick={() => navigate(`/movielist/${id}`)}>button</button>
    </div>
  );
}
