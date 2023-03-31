import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Movieurl() {
  const { url } = useParams();
  // const moviepage = moviedetails[url];
  // console.log(moviedetails);

  const [moviepage, setmoviepage] = useState({});
useEffect(()=>{ 
  fetch(`https://642594217ac292e3cf04af7d.mockapi.io/movieapi/${url}`)
   .then((data) => data.json())
   .then((mvs) => setmoviepage(mvs));},[]);

  const navigate = useNavigate();

  return (
    <div className='main-contain-details'>
      <iframe
        width="100%"
        height="650"
        src={moviepage.trailer}

        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='movie-spec'>
        <h2 className='movie-name'>{moviepage.name}</h2>
        <p style={{ color: moviepage.rating > 8.5 ? "green" : "red" }} className='movie-rating'>⭐{moviepage.rating}</p>
        <p>{moviepage.summary}</p>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
