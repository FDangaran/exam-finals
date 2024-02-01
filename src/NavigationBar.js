import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <div className="d-inline justify-content-between" id="navbar">
<Navbar collapseOnSelect expand="md" fixed="top" bg="light" variant="light">
    <Navbar.Brand href="#home">GrabFood</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#bag">Bag</Nav.Link>
            <Nav.Link href="/Login">Logout</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Type your location" className="mr-sm-2" />
        </Form>
    </Navbar.Collapse>
</Navbar>

            </div>
  );
}
    }

    
