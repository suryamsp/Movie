import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const formValidation=yup.object({
  email:yup.string().email().required().min(12),
  password:yup.string().required().min(8),
});



export function Basicform() 
{
  
  const formik=useFormik({
    initialValues:{ email:"", password:""},
    validationSchema:formValidation,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form className="basic-form" onSubmit={formik.handleSubmit}>
      <TextField 
      name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email} 
      type="text" 
      placeholder="name"
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <TextField 
      name="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password} 
      type="text" 
      placeholder="password"
      />
      {formik.touched.password && formik.errors.password ? formik.errorspassword : null}
      <Button type="submit" variant="contained" >submit</Button>
      {/* <pre> {JSON.stringify(formik.values)}</pre>
      <pre> {JSON.stringify(formik.errors)}</pre>
      <pre> {JSON.stringify(formik.touched)}</pre> */}
    </form>
  );
}
