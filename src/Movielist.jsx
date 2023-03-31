import { Movie } from './Movie';
import { Addmovie } from './Addmovie';

export function Movielist({moviedetails , setmoviedetails}) {
  return (
    <div>
      <div className='movie-data'>
        {moviedetails.map((mv, index) => (<Movie key={index} data={mv} id={index}/>))}
      </div>
    </div>
  );
}
