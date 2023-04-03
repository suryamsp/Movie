import { Movie } from './Movie';
import { Addmovie } from './Addmovie';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Movielist() {
  const [moviedetails, setmoviedetails] = useState([]);

  const getmovie=()=>{
    fetch("https://642594217ac292e3cf04af7d.mockapi.io/movieapi")
   .then((data) => data.json())
   .then((mvs) => setmoviedetails(mvs));}

useEffect(()=> getmovie(),[]);

   const deletemovie=(id)=>{
    fetch(`https://642594217ac292e3cf04af7d.mockapi.io/movieapi/${id}`,{
      method:"delete",
    }).then(()=> getmovie());
   };
  // const deletemovie= async(id)=>{
  //   await fetch(`https://642594217ac292e3cf04af7d.mockapi.io/movieapi/${id}`,{
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
        deletebutton={<button onClick={()=> deletemovie(mv.id)}>Delete</button>}
        editbutton={<button onClick={()=> navigate(`/movielist/edit/${mv.id}`)}>Edit</button>}
        />))}
        
      </div>
    </div>
  );
}
