import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { SyntheticEvent, useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const message = location.state?.message;

  const navigate = useNavigate();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          username: email,
          password
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      navigate('/', { state: { message: 'You logged in successfully!' } });
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message);
    }
  };

  return (
    <Container className='full-page'>
      <div className='form-container'>
        {message && (
          <Alert variant='success' closeLabel='true'>
            {message}
          </Alert>
        )}
        <h2>Signup</h2>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <Form onSubmit={submit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignIn;
