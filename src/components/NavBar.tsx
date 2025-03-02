import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/">DESTNATIONS</Nav.Link>
              <Nav.Link as={Link} to="/">TRIPS</Nav.Link>
              <Nav.Link as={Link} to="/">NEWS</Nav.Link>
              <Nav.Link as={Link} to="/">COMMUNITY</Nav.Link>
              <Nav.Link as={Link} to="/">SHOP</Nav.Link>





              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/about">Visite</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    );
  
}

export default NavBar