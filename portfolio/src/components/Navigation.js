import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(props) {

    return (
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link 
                href="#about-me" 
                onClick={() => props.handlePageChange('about')}
                className={props.currentPage === 'about' ? 'nav-link active' : 'nav-link'}
                >About Me</Nav.Link>

                <Nav.Link 
                href="#portfolio" 
                onClick={() => props.handlePageChange('portfolio')}
                className={props.currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</Nav.Link>

                <Nav.Link 
                href="#contact" 
                onClick={() => props.handlePageChange('contact')}
                className={props.currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                >Contact</Nav.Link>

                <Nav.Link 
                href="#resume" 
                onClick={() => props.handlePageChange('resume')}
                className={props.currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
                >Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    )
}

export default Navigation;