import { IconButton } from '@mui/material';
import { Movie } from './Movie';
// import { Addmovie } from './Addmovie';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {API} from "./global";

export function Movielist() {
  const [moviedetails, setmoviedetails] = useState([]);

  const getmovie=()=>{
    fetch(`${API}`)
   .then((data) => data.json())
   .then((mvs) => setmoviedetails(mvs));}
useEffect(()=> getmovie(),[]);

   const deletemovie=(id)=>{
    fetch(`${API}/${id}`,{
      method:"delete",
    }).then(()=> getmovie());
   };
  // const deletemovie= async(id)=>{
  //   await fetch(`${API}//${id}`,{
  //     method:"DELETE",
  //   })
  //    getmovie();
  //  };

  const navigate=useNavigate();

  return (
    <div>
      <div className='movie-data'>
        {moviedetails.map((mv, index) => (<Movie 
        key={mv.id} 
        data={mv} 
        id={mv.id}
      
        deletebutton={<IconButton sx={{ marginLeft: "auto" }}color="error" onClick={()=> deletemovie(mv.id)}><DeleteIcon/></IconButton>}
        editbutton={<IconButton color="primary" onClick={()=> navigate(`/movielist/edit/${mv.id}`)}><EditIcon/></IconButton>}
        />))}
        
      </div>
    </div>
  );
}
