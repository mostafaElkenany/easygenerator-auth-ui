import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HomeStyles.css';

const Home = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/home`,
          {
            withCredentials: true
          }
        );

        setMessage(response.data.message);
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          navigate('/login');
        } else {
          console.error('An error occurred:', error);
        }
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className='main-screen'>
      <div className='main-content'>
        <h1>{message}</h1>
        <h1>Welcome to Our Application</h1>
        <p>This is the application home page.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
