// NavBar Component
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="nav-cont">
            <Container>
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#coffee">Coffee</Nav.Link>
                        <Nav.Link href="#tea">Tea</Nav.Link>
                        <Nav.Link href="#desserts">Desserts</Nav.Link>

                        <Nav.Link href="#cart" className="cart">
                            <CartWidget />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar