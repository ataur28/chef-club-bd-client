import React, { useContext, useState } from 'react';
import './Register.css'
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import {  useNavigate } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')

    const handleRegister = event => {
        // event.preventDefault();
        // setSuccess('');
        // setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        // validate
        // if (!/(?=.*[A-Z])/.test(password)) {
        //     setError('Please add at least one uppercase');
        //     return;
        // }
        // else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
        //     setError('Please add at least two numbers');
        //     return
        // }
        // else if (password.length < 6) {
        //     setError('Please add at least 6 characters in your password')
        //     return;
        // }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess('User Register successfully');
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <div className='w-50 mx-auto mt-5 bg-light p-5'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password at least 6 characters" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted}  type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <p className='text-success'>{success}</p>
                <p className='text-danger'>{error}</p>
            </Form>
        </div>
    );
};

export default Register;