import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Movieurl() {
  const { url } = useParams();
  // const moviepage = moviedetails[url];
  // console.log(moviedetails);

  const [moviepage, setmoviepage] = useState({});
useEffect(()=>{ 
  fetch(`https://642594217ac292e3cf04af7d.mockapi.io/movieapi/${url}`)
   .then((data) => data.json())
   .then((mvs) => setmoviepage(mvs));},[url]);

  const navigate = useNavigate();

  return (
    <div className='trailer-details'>
        <div className='main-contain-details'>
        <iframe
          width="800"
          height="400"
          src={moviepage.trailer}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      <div>
            <div className='movie-spec'>
              <h2 className='movie-names'>{moviepage.name}</h2>
              {/* <p className='movie-spec'>⭐{moviepage.rating}</p> */}
            </div>
                <div className='movie-speci'>
                <p className='summary-spec'>{moviepage.summary}</p>
                </div>
                  <div className='backbtn' >
                  <Button variant='contained' onClick={() => navigate(-1)}><ArrowBackIcon />Back</Button>
                  </div> 
       </div>
   
    </div>
   
  );
}
