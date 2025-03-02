import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/logo.png'


const NavBar = () => {
    return (
        <Navbar bg="light" variant="dark" expand="lg" style={{ color: "black", margin: "10px" }}>
        <Container>
       
          <Navbar.Brand as={Link} to="/" style={{ color: "black", margin: "10px" }}> <img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} />Get Ethiopia Tour</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ color: "black", margin: "10px" }}>
              <Nav.Link as={Link} to="/" style={{ color: "black", margin: "10px" }}>HOME</Nav.Link>
              <Nav.Link as={Link} to="/" style={{ color: "black", margin: "10px" }}>DESTNATIONS</Nav.Link>
              <Nav.Link as={Link} to="/" style={{ color: "black", margin: "10px" }}>TRIPS</Nav.Link>
              <Nav.Link as={Link} to="/" style={{ color: "black", margin: "10px" }}>NEWS</Nav.Link>
              <Nav.Link as={Link} to="/" style={{ color: "black", margin: "10px" }}>COMMUNITY</Nav.Link>
              <Nav.Link as={Link} to="/" style={{ color: "black", margin: "10px" }}>SHOP</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: "black", margin: "10px" }}>About</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: "black", margin: "10px" }}>Visite</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: "black", margin: "10px" }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    );
  
}

export default NavBar