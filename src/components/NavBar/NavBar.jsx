// NavBar Component
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="nav-cont">
            <Container>
                <Link to='/' className='nav-link'>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Hot takeout coffee cup logo"
                            src="https://img.icons8.com/dusk/64/null/takeaway-hot-drink.png"
                            width="30px"
                            height="30px"
                            className="d-inline-block align-top"
                        />{' '}
                        Mini Cafe
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/category/Beverages" className='nav-link'>Beverages</NavLink>
                        <NavLink to="/category/Desserts" className='nav-link'>Desserts</NavLink>

                        <Link to='/cart' className='nav-link'>
                            <CartWidget />
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar