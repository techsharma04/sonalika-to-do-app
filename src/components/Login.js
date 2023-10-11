import "./../styles/Login.css";
import { Formik, Form, Field } from 'formik';
import { useState } from "react";
import * as Yup from "yup";
import loginDetails from "./LoginDetails.json";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    username: Yup.string().email('Invalid username')
    .required('Username is required!')
    .min(3, "Too short")
    .max(30, "Too long"),

    userpass: Yup.string('Wrong Password')
    .required('Password is required!')
    .min(3, "Too short")
    .max(30, "Too long"),
})

function Login() {
    
    let navigate = useNavigate();
    const [initialFormValues] = useState({
        username: "sonalikanikku@gmail.com",
        userpass: "12345",
    });

    const handleFormSubmission = async (values) => {
        if(loginDetails.username === initialFormValues.username && loginDetails.password === initialFormValues.userpass){
            navigate(`/home/${initialFormValues.username}`, true);
        }
    }

    return (
        <div className="login-container">
            
            <div className="right-section">
                <h1>Todo List Login</h1>
                <Formik validationSchema={LoginSchema} initialValues={initialFormValues} onSubmit={handleFormSubmission}>
                    {({errors, touched}) => (
                        <Form className="login-form">
                            <label>Email: {errors.username && touched.username ? (<small style={{color:"red"}}>{errors.username} </small>): null}
                                <Field type="email" name="username" />
                            </label>
                            
                            <label>Password:{errors.userpass && touched.userpass ? (<small style={{color:"red"}}>{errors.userpass} </small>): null}
                                <Field type="password" name="userpass" />
                            </label>
                            
                            <button type="submit">Login</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )

}

export default Login;