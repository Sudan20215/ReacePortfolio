import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
function navbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Sudan</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#home">Contact</Nav.Link>
      <Nav.Link href="#home">Portfolio</Nav.Link>
      
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default navbar
