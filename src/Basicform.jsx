import { useFormik } from "formik";
import * as yup from "yup";

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
    <form onSubmit={formik.handleSubmit}>
      <input 
      name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email} 
      type="text" 
      placeholder="name"
      ></input>
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input 
      name="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password} 
      type="text" 
      placeholder="password"
      ></input>
      {formik.touched.password && formik.errors.password ? formik.errorspassword : null}
      <button type="submit">submit</button>
      <pre> {JSON.stringify(formik.values)}</pre>
      <pre> {JSON.stringify(formik.errors)}</pre>
      <pre> {JSON.stringify(formik.touched)}</pre>
    </form>
  );
}
