import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./FinalPage.css"
import cloudi from "../src/Images/cloudi.png"
const FinalPage = () => {
  return (
    <>
    <Container fluid className='finalbody'>
    <Row className='rowoftitles'>
     <Col xs={12}  lg={3} className='titles'>SERVICES
     <div className='firstcolbox'>
     <p>Web Design</p>
     <p>Web Development</p>
     <p>Digital Marketing</p>
     <p>Mobile Application</p>
     <p>Logo Design</p>
     </div>
     </Col>
     <Col  xs={12}  lg={2} className='titles'>OUR PRODUCTS
     <div className='firstcolbox'>
     <p>E- Commerce</p>
     <p>School Software</p>
     <p>ERP</p>
     <p>CRM</p>
     <p>Lead Management</p>
     </div>
     </Col>
     <Col  xs={12}  lg={2} className='titles'>LEGAL PAGES
     <div className='firstcolbox'>
     <p>Terms and Conditions</p>
     <p>Privacy Policy</p>
     <p>Cancellation Policy</p>
     <p>Customer Policy</p>
     <p>Return Policy</p>
     </div>
     </Col>
     <Col  xs={12} lg={3} className='titles'>COMPANY
    <div className='firstcolbox' >
     <p>About Us</p>
     <p>Blog</p>
     <p> Careers</p>
     <p>Contact Us</p>
     </div>

     </Col>
     <Col  xs={12}  lg={2} className='titles'>NEED SUPPORT
     <div className='firstcolbox'>
     <p>FAQs</p>
     </div>
     </Col>
    </Row>
    <hr style={{color:'white',margin:'60px',marginTop:'80px'}}/>
    <Row>
  <Col xs={12} lg={9}>
  <img className='cloudi' src={cloudi}></img>
  <p className='definition'>We are committed to excellence in everything we do. From the quality <br/>of our work to the level of service we provide, we strive for nothing less<br/> than perfection.</p>
  </Col>
  <Col xs={12}  lg={3}>
  <div className='contentssocial'>
  <p className='socailmedia'>SOCIAL MEDIA</p>
  <p className='contentofsm'>Follow us on social media to find out<br/> the latest updates on our progress</p>
  <div className='socialmediacons'>
    <div>
      <a href='https://www.linkedin.com/company/cloudi5-technologies/'>
  <i style={{color:'white'}}  class="bi bi-linkedin"></i>
  </a>
  </div>
  <div>
    <a href='https://www.facebook.com/cloudi5technologies/'>
  <i style={{color:'white'}} class="bi bi-facebook"></i>
  </a>
  </div>
  <div>
  <a href='https://www.instagram.com/cloudi5technologies/'>
    <i style={{ color: 'white' }} className="bi bi-instagram"></i>
  </a>
</div>
  <div>
    <a href='https://x.com/Cloudi5india'>
  <i style={{color:'white'}} class="bi bi-twitter-x"></i>
  </a>
  </div>
  </div>
  </div>
  </Col>
    </Row>
    </Container>
    <Container fluid className='bottombox'>
  <p className='contentlast'>@Cloudi5 Techologies 2024. All Rights Reserved.</p>
    </Container>
    </>
  )
}

export default FinalPage
