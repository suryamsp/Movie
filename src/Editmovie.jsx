import { useState , useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const formValidation=yup.object({
  name:yup.string().required().min(4),
  poster:yup.string().required(),
  rating:yup.number().required().min(0).max(10),
  trailer:yup.string().required().min(4).url(),
});


export function Editmovie() {

  const { url } = useParams();
  // const moviepage = moviedetails[url];
  // console.log(moviedetails);

  const [moviepage, setmoviepage] = useState(null);
useEffect(()=>{ 
  fetch(`https://642594217ac292e3cf04af7d.mockapi.io/movieapi/${url}`)
   .then((data) => data.json())
   .then((mvs) => setmoviepage(mvs));},[]);

  //  console.log(moviepage);
   return moviepage ? <Editmovieform moviepage={moviepage} /> : <img className='loading' src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"/>;
  
function Editmovieform({moviepage}){
  const formik=useFormik({
    initialValues:{ 
    name:moviepage.name, 
    poster:moviepage.poster, 
    rating:moviepage.rating, 
    trailer:moviepage.trailer,
  },
    validationSchema:formValidation,
    // newmovie object create formil so canot manuvally 
    onSubmit: (savemovie) => {
      updatemovie(savemovie);
    },
  });

const navigate=useNavigate();

  const updatemovie= async (savemovie)=>{ 

 await fetch(`https://642594217ac292e3cf04af7d.mockapi.io/movieapi/${moviepage.id}` ,{
    method:"PUT",
    body:JSON.stringify(savemovie),
    headers:{"Content-Type":"application/json",},
  });
  navigate("/movielist");
}
 

  return (
    
    <div className="edit-form"  onSubmit={formik.handleSubmit} >
      <TextField 
      name="name"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name} 
      label="Name" 
      variant="outlined" 
      error={formik.touched.name && formik.errors.name}
      helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
/>
      {/* {formik.touched.name && formik.errors.name ? formik.errors.name : null} */}


      <TextField 
      name="poster"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.poster}    
      label="Poster" 
      variant="outlined" 
      error={formik.touched.poster && formik.errors.poster}
      helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}
      />

      <TextField 
      name="rating"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.rating} 
      label="Rating" 
      variant="outlined"
      error={formik.touched.rating && formik.errors.rating}
      helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating: null}

      />
      {/* {formik.touched.rating && formik.errors.rating ? formik.errors.rating : null} */}

      <TextField 
      name="trailer"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.trailer} 
      label="Trailer" 
      variant="outlined" 
      error={formik.touched.trailer && formik.errors.trailer}
      helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}

      />
      {/* {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null} */}


      <Button type="submit" variant="contained" >Update movie</Button>
      <Button variant='contained' onClick={() => navigate(-1)}><ArrowBackIcon />Back</Button>

      </div>
  );
}
}