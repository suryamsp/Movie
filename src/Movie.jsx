import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Counter } from './Counter';

export function Movie({data, id}) {
  // const design={
  //   color:"green"
  //   // backgroundColor="orange"
  // }
  const [show, setshow] = useState(true);
  const navigate = useNavigate();
  return (
    <div className='main-contain'>
      <img className='movie-poster' src={data.poster} alt={data.name} />
      <div className='movie-spec'>
        <h2 style={{ display: show ? "block" : "none" }} className='movie-name'>{data.name}</h2>
        <p style={{ color: data.rating > 8.5 ? "green" : "red" }} className='movie-rating'>⭐{data.rating}</p>

      </div>
      <Counter />
     
      <button onClick={() => navigate(`/movielist/${id}`)}>button</button>
    </div>
  );
}
