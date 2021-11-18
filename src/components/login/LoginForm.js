import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup'
// import { useHistory } from 'react-router-dom'

const LoginForm = (props) => {
    
const {closeHandler} = props

  const modalBoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "0",
    paddingBottom: "2%",
    width: "350px;",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    p: 3,
  };

  return (
    <Box sx={modalBoxStyle}>
      <h4>Login to your account</h4>
      <Formik
        initialValues={{
          email: 'youremail@gmail.com',
          password: 'yourpassword',
        }}
        validationSchema={
            Yup.object().shape({
                email: Yup.string().email('Must be a valid email address').max(40).required('Email is required'),
                password: Yup.string().min(8, 'Password must be at least 8 characters').max(40).required('Password is required')
            })
        }
          onSubmit={(value, {setErrors, setStatus, setSubmitting}) => {
              try {
                setStatus({success:true})
                setSubmitting(false)
                console.log('Successfully submitted!')
              } catch (err) {
                  console.error(err)
                  setStatus({ success:false })
                  setErrors({submit: err.message })
                  setSubmitting(false)
              } finally {
                  closeHandler()
              }
        }}
      >
        {({ errors, values, handleSubmit, handleBlur, handleChange, isSubmitting, touched }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
            >
              Email
            </TextField>
            <TextField
             error={Boolean(touched.password && errors.password)}
             helperText={touched.password && errors.password}
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
            >
              Password
            </TextField>
            <Button fullWidth size="large" variant="contained" type="submit" disabled={isSubmitting}>
              Log in
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
