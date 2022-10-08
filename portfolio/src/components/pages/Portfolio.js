import React from 'react'

import Project from '../Project'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../../images/Fat-Birds-screenshot.PNG'
import img2 from '../../images/JATE-screenshot.PNG'
import img3 from '../../images/note-taker-ss1.PNG'
import img4 from '../../images/ORM-screenshot1.PNG'
import img5 from '../../images/Project1-screenshot.PNG'
import img6 from '../../images/SocialNetwork-API-Screenshot.PNG'

const content = [
    {
        project: img1,
        src: "https://fat-birds-wing-bar.herokuapp.com/"
    },
    {
        project: img2,
        src: "https://my-jate.herokuapp.com/"
    },
    {
        project: img3,
        src: "https://notes-express-app.herokuapp.com/"
    },
    {
        project: img4,
        src: "https://github.com/DKhubgit/ORM-E-Commerce-BackEnd"
    },
    {
        project: img5,
        src: "https://github.com/DKhubgit/Roadtrip-project"
    },
    {
        project: img6,
        src: "https://github.com/DKhubgit/Social-Network-API"
    },
]
function Portfolio() {

    return (
    <div>
        <h1 className='text-center mb-5 mt-5'>Portfolio Page!</h1>
        <Container>
            <Row xs={1} md={1} lg={3}>
                <Col className="d-flex justify-content-center"><Project content={content[0]}/></Col>
                <Col className="d-flex justify-content-center"><Project content={content[1]}/></Col>
                <Col className="d-flex justify-content-center"><Project content={content[2]}/></Col>
            </Row>
            <Row xs={1} md={1} lg={3}>
                <Col className="d-flex justify-content-center"><Project content={content[3]}/></Col>
                <Col className="d-flex justify-content-center"><Project content={content[4]}/></Col>
                <Col className="d-flex justify-content-center"><Project content={content[5]}/></Col>
            </Row>
        </Container>

    </div>
    )
}

export default Portfolio;