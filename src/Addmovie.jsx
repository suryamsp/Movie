import { useState} from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";

const formValidation=yup.object({
  name:yup.string().required().min(4),
  poster:yup.string().required(),
  rating:yup.number().required().min(0).max(10),
  trailer:yup.string().required().min(4).url(),
});


export function Addmovie() {
  // const [name, setname] = useState("");
  // const [poster, setposter] = useState("");
  // const [rating, setrating] = useState("");
  // const [trailer, settrailer] = useState("");
  const formik=useFormik({
    initialValues:{ name:"", poster:"", rating:"", trailer:""},
    validationSchema:formValidation,
    // newmovie object create formil so canot manuvally 
    onSubmit: (newmovie) => {
      addmovie(newmovie);
    },
  });

const navigate=useNavigate();

  const addmovie= async (newmovie)=>{ 

 await fetch("https://642594217ac292e3cf04af7d.mockapi.io/movieapi" ,{
    method:"POST",
    body:JSON.stringify(newmovie),
    headers:{"Content-Type":"application/json",},
  });
  navigate("/movielist");
}
 

  return (
    <form onSubmit={formik.handleSubmit}className='form-design'>
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
      value={formik.values.trailer} 
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


      <button type="submit">Add movie</button>
    </form>
  );
}
