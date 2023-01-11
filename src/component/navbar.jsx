import {Container, Nav, Navbar} from 'react-bootstrap';

export const NavbarItem = () => {
  return (
    <div>
      <Navbar style={{backgroundColor: "#00b1ee"}} >
        <Container>
          <Navbar.Brand style={{fontWeight: "800", fontSize: "1.6rem", color: "white"}} className="ms-3 mt-2" href="/">Save Water</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-4 mt-2" style={{fontWeight: "700"}}>
              <Nav.Link style={{color: "white"}} href="/">Home</Nav.Link>
              <Nav.Link style={{color: "white"}} href="/contactUs">Contact</Nav.Link>
              <Nav.Link style={{color: "white"}} href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
