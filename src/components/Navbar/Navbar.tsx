import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand='lg' className='bg-light shadow'>
      <Container>
        <Navbar.Brand href='#home' className='navbar-brand'>
          Easygenerator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/' className='nav-link'>
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/login'>
              <Button variant='outline-primary' className='me-2'>
                Login
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to='/signup'>
              <Button variant='primary'>Signup</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
