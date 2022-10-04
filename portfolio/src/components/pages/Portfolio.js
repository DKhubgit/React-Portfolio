import React from 'react'

import Project from '../Project'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Portfolio() {
    return (
    <div>
        <h1 className='text-center mb-5 mt-5'>Portfolio Page!</h1>
        <Container>
            <Row xs={1} md={3}>
                <Col><Project /></Col>
                <Col><Project /></Col>
                <Col><Project /></Col>
            </Row>
            <Row xs={1} md={3}>
                <Col><Project /></Col>
                <Col><Project /></Col>
                <Col><Project /></Col>
            </Row>
        </Container>

    </div>
    )
}

export default Portfolio;