import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (name.trim() === '') {
      setErrorMessage('Name cannot be empty.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
        {
          name,
          email,
          password
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      console.log(response);
      navigate('/login', {
        state: { message: 'You Signed up successfully! Please log in.' }
      });
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message);
    }
  };

  return (
    <Container className='full-page'>
      <div className='form-container'>
        <h2>Signup</h2>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <Form onSubmit={submit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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
            Signup
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
