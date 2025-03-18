import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Page3.css";
import points from "../src/Images/Group 1171276721.png";
import img from "../src/Images/f4e19287c77da0381197a0d46b559f81.png";
import one from "../src/Images/Group 1171276895.png";
import two from "../src/Images/Group 1171276894.png";
import three from "../src/Images/Group 1171276893.png";
import four from "../src/Images/Group 1171276892.png";
import five from "../src/Images/Group 1171276889.png";
import line from "../src/Images/Vector 20.png";

const Page3 = () => {
  return (
    <>
      <Container className="aboutbg">
        <Row>
          <Card className="about">
            <Row>
              <h5 className="paraabout">
                Why Choose Cloudi5{" "}
                <span style={{ color: "rgba(0, 103, 67, 1)" }}>
                  for Your Web Design Needs:
                </span>
              </h5>
            </Row>
            <Row className="rowofabout" style={{ paddingLeft: "80px" }}>
              <Col lg={7}>
                <div className="boxofaboutt">
                  <img className="points" src={points} alt="Points"></img>
                  <p className="insidepara">
                    With years of experience in the industry, our team brings a
                    wealth <br /> of expertise to every project.
                  </p>
                </div>
                <div className="boxofaboutt">
                  <img className="pointsss" src={points} alt="Points"></img>
                  <p className="insideparaa">
                    We have successfully designed and developed websites for a
                    diverse <br />
                    range of clients across various industries.
                  </p>
                </div>
                <div className="boxofaboutt">
                  <img className="pointsss" src={points} alt="Points"></img>
                  <p className="insideparaa">
                    From seamless navigation to compelling calls-to-action, we
                    ensure <br />
                    that every aspect of your website is designed with the user
                    in mind.
                  </p>
                </div>
                <div className="boxofaboutt">
                  <img className="pointsss" src={points} alt="Points"></img>
                  <p style={{ marginTop: "20px" }} className="insideparaa">
                    We understand that every business is unique.
                  </p>
                </div>
              </Col>
              <Col lg={5}>
                <img className="img" src={img} alt="About"></img>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
      <Card className="contactustoday">
        <h5 className="contentcon">Ready to elevate your online presence?</h5>
        <h5 className="contentcon2">Let's turn your vision into reality!</h5>
        <p className="contentcon3">
          Contact us today to schedule a consultation and discover our
          exceptional web design services.
        </p>
        <Button className="register">Register now</Button>
      </Card>
      <h5 className="intrestcon">
        Register your interest and wait for callback{" "}
      </h5>
      <p className="intrestcon2">
        You can own a branded licensed website in 5 simple steps
      </p>

      <Container className="laptopview">
        <Row className="steps">
          <Col xs={12} lg={12}>
            <img className="stepsicons" src={one} alt="Step 1" />
            <img className="stepsline" src={line} alt="Line 4" />
            <img className="stepsicons" src={two} alt="Step 2" />
            <img className="stepsline" src={line} alt="Line 1" />
            <img className="stepsicons" src={three} alt="Step 3" />
            <img className="stepsline" src={line} alt="Line 1" />
            <img className="stepsicons" src={four} alt="Step 4" />
            <img className="stepsline" src={line} alt="Line 1" />
            <img className="stepsicons" src={five} alt="Step 5" />
          </Col>
          <Col xs={12} lg={12}>
            <div className="contentsrow">
              <Card className="stepscontents">
                <b className="contentsofsteps">Register Your Interest</b>
              </Card>
              <Card className="stepscontents">
                <b className="contentsofsteps">Team connects with you</b>
              </Card>
              <Card className="stepscontents">
                <b className="contentsofsteps">Submit your proposal</b>
              </Card>
              <Card className="stepscontents">
                <b className="contentsofsteps">Connect with our Agency</b>
              </Card>
              <Card className="stepscontents">
                <b className="contentsofsteps">Start business operation</b>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mobileview">
        <Row>
          <Col xs={12}>
            <img className="stepsicons" src={one} alt="Step 1" />
            <b className="contentsofsteps">Register Your Interest</b>
          </Col>
          <Col xs={12}>
            <img className="stepsicons" src={two} alt="Step 2" />
            <b className="contentsofsteps">Team connects with you</b>
          </Col>
          <Col xs={12}>
            <img className="stepsicons" src={three} alt="Step 3" />
            <b className="contentsofsteps">Submit your proposal</b>
          </Col>
          <Col xs={12}>
            <img className="stepsicons" src={four} alt="Step 4" />
            <b className="contentsofsteps">Connect with our Agency</b>
          </Col>
          <Col xs={12}>
            <img className="stepsicons" src={five} alt="Step 5" />
            <b className="contentsofsteps">Start business operation</b>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
};

export default Page3;
