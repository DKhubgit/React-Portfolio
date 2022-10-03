import React from 'react'
import Navigation from './Navigation'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='fs-1' href="#home">Daniel Kang</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navigation />
      </Container>
    </Navbar>
)
}
export default Header;