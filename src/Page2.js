import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Page2.css";
import enter from '../src/Images/enter 1.png';
import eye from '../src/Images/eye 1.png';
import loan from '../src/Images/loan 1.png';
import manager from '../src/Images/managers 1.png';
import tap from '../src/Images/tap 1.png';
import shop from '../src/Images/shop 1.png';
import practice from '../src/Images/practice 1.png';
import anoouncement from '../src/Images/announcement 1.png';
import FinalPage from "./FinalPage";

const Page2 = () => {
  return (
    <Container fluid>
      <Row>
        <Container fluid className="contentback">
          <Col>
            <h4 className="content1">
              Our Approach:
              <span style={{ color: "rgba(0, 103, 67, 1)" }}>
                “Collaborative, Creative, Custom” ?
              </span>
            </h4>
            <p className="content2">
              We take a collaborative approach to every project, working closely
              with you to understand your goals, your audience, and your unique
              selling points.
              <br />
              From there, our team of designers and developers leverage their
              expertise to craft a custom solution that not only looks beautiful
              but also delivers
              <br />
              tangible results for your business. Our team is comprised of
              talented designers and developers who are passionate about pushing
              the boundaries of
              <br />
              creativity and innovation. We don't just build websites – we
              create digital experiences that leave a lasting impression.
            </p>
          </Col>
        </Container>
        <h4 className="content3">Our Services</h4>
        <h4 className="content4">
          “User-Centric Design, Responsive Solutions, Tailored Solutions”
        </h4>
      </Row>
      <Row className="allcards">
        <Col>
        <Card className="servicesCards">
            <Card className="insidecard">
            <img className="serviceimages" src={enter}></img>
            </Card>
            <p className="servicecontent">Access to Existing <br/>
                 Customers</p>
        </Card>
        </Col>
        <Col>
        <Card className="servicesCards">
        <Card className="insidecard">
            <img className="serviceimages" src={eye}></img>
            </Card>
            <p className="servicecontent">Brand and <br/>
            Visibility</p>
        </Card>
        </Col>
        <Col>
        <Card className="servicesCards">
        <Card className="insidecard">
            <img className="serviceimages" src={tap}></img>
            </Card>
            <p className="servicecontent">Easy to use Admin<br/> Panel</p>
        </Card>
        </Col>
        <Col>
        <Card className="servicesCards">
        <Card className="insidecard">
            <img className="serviceimages" src={anoouncement}></img>
            </Card>
            <p className="servicecontent">Gain from our digital<br/> marketing initiative</p>
        </Card>
        </Col>
      </Row>
      <Row className="allcardsrow2">
        <Col>
        <Card className="servicesCards">
        <Card className="insidecard">
            <img className="serviceimages" src={manager}></img>
            </Card>
            <p className="servicecontent">Dedicated Success <br/> Executive</p>
        </Card>
        </Col>
        <Col>
        <Card className="servicesCards">
        <Card className="insidecard">
            <img className="serviceimages" src={practice}></img>
            </Card>
            <p className="servicecontent">Training and <br/> guidance</p>
        </Card>
        </Col>
        <Col>
        <Card className="servicesCards">
        <Card className="insidecard">
            <img className="serviceimages" src={shop}></img>
            </Card>
            <p className="servicecontent">Feature at your <br/> service</p>
        </Card>
        </Col>
        <Col>
        <Card className="servicesCards">
        <Card className="insidecard">
            <img className="serviceimages" src={loan}></img>
            </Card>
            <p className="servicecontent">Working capital <br/> support</p>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Page2;
