import React from 'react'
import Navigation from './Navigation'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {

  const style = {
    main: {
      marginRight: "auto",
      marginLeft: 'auto',
    }
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container style={style.main}>
        <Navbar.Brand className='fs-1' href="#home">Daniel Kang</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
        </Container>
    </Navbar>
)
}
export default Header;