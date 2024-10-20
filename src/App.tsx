import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import SignIn from './pages/SignIn/signin';
import Signup from './pages/SignUp/signup';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='content-area'>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/login' Component={SignIn} />
            <Route path='/signup' Component={Signup} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
