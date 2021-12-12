import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {useHistory } from 'react-router-dom'
import {useIdentityContext} from 'react-netlify-identity-gotrue'


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



const SignupForm = (props) => {
    const history = useHistory()
    const handleClose = () => history.push('/')
    const identity = useIdentityContext()
    
    return (
        <Box sx={modalBoxStyle}>
            <h4>Create an Account</h4>
            <Formik
            initialValues={{
                userName: 'Joe Schmoe',
                email: 'email@email.com',
                password: 'Password123',

            }}
            validationSchema={Yup.object().shape({
                userName: Yup.string()
                .min(4, 'Username must be at least 4 characters long')
                .max(25, 'Username must be less than 25 characters')
                .required('Username is required'),
                email: Yup.string()
                .email('Must be a valid email')
                .max(40)
                .required('Email is required'),
                password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .max(40)
                .required('Password is required'),
            })}
            onSubmit={async (value, {setErrors, setStatus, setSubmitting }) => {
                try {
                    setStatus({ success: true })
                    setSubmitting(false)
                    await identity.signup({
                        email: value.email, password: value.password, user_metadata: {
                            full_name: value.userName
                        }
                    }).then(() => {
                        handleClose()
                    })
                } catch (err) {
                    console.error(err)
                    setStatus({ success: false })
                    setErrors({ submit: err.message })
                    setSubmitting(false)
                }
            }}
            >
        {({
            errors,
            values,
            handleSubmit,
            handleBlur,
            handleChange, 
            isSubmitting, 
            touched,
        })=> (
            <form noValidate onSubmit={handleSubmit}>
                 <TextField
                error={Boolean(touched.userName && errors.userName)}
                fullWidth
                helperText={touched.userName && errors.userName}
                label="Username"
                margin="normal"
                name="userName"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.userName}
                />
                
                <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                />
                <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                
                />
                <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                variant="contained"
                type="submit"
                >
                    Sign Up
                    </Button>
            </form>
        )
        }   
        </Formik>     
        </Box>
    )
}

export default SignupForm;

