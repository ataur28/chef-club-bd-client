import React, { useContext, useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebases.config';

const Login = () => {
     const [user, setUser] = useState(null);
     const auth = getAuth(app);
     const provider = new GoogleAuthProvider();

    const handleGoogleSingIn = (event) => {
        event.preventDefault();
        signInWithPopup(auth, provider)
        // googleSignIn(auth, provider)
            .then(result => {
                const LoggedInUser = result.user;
                console.log(LoggedInUser)
                navigate(from, { replace: true })
                setUser(LoggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }



    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                // Navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className='w-50 mx-auto mt-5 bg-light p-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Button onClick={handleGoogleSingIn} variant="primary" className='ms-3 me-3' >
                    Google Login
                </Button>
                <Button variant="primary" >
                    GitHub Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;