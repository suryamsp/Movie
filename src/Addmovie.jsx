import { useState } from 'react';
import TextField from '@mui/material/TextField';

export function Addmovie({ moviedetails, setmoviedetails }) {
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [trailer, settrailer] = useState("");
  return (
    <div className='form-design'>
      <TextField onClick={(event) => setname(event.target.value)} label="Name" variant="outlined" />
      <TextField onClick={(event) => setposter(event.target.value)} label="Poster" variant="outlined" />
      <TextField onClick={(event) => setrating(event.target.value)} label="Rating" variant="outlined" />
      <TextField onClick={(event) => settrailer(event.target.value)} label="Trailer" variant="outlined" />

      <button onClick={() => {
        const newmovie = {
          name: name,
          poster: poster,
          rating: rating,
          trailer: trailer,
        };
        setmoviedetails([...moviedetails, newmovie]);
      }}
      >Add movie</button>
    </div>
  );
}
