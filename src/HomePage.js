import React from 'react'
import cloudilogo from '../src/Images/cloudi.png'
import frame from "../src/Images/Frame 1171275837.png"
import './HomePage.css'
import {  Col, Container, Row } from 'react-bootstrap'

const HomePage = () => {
    return (
        <Container fluid className="Homepage">
            <img className='cloudilogo' src={cloudilogo} alt="Cloudi Logo" />
            <Row >
                <Col xs={12} md={10} lg={8} className="text-center para">
                    <Container className='heading1'>
                        <h1  className="line">Crafting Digital Experiences,</h1>
                        <h1  className="line"> One Pixel at a Time.</h1>
                    </Container>
                    <img className='frame1' src={frame} alt="Frame" />
                    <button className='buttonreg'>Register Now</button>
                    </Col>
            </Row>
        </Container>
    );   
}

export default HomePage
