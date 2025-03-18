import React, { useEffect, useState } from "react";
import { Accordion,  Container } from "react-bootstrap";
import "./Faq.css";
import axios from "axios";
const Faq = () => {
  const [showdata, setShowdata] = useState([]);
  console.log("response");

  const showFaq = async () => {
    try {
      const response = await axios.get("http://cloudibackend.sanjaysanju.tech/faq/getall");
  
      console.log("response.data:", response.data); 
  
      if (Array.isArray(response.data.data)) {
        setShowdata(response.data.data);
      } else {
        setShowdata([response.data.data]);
      }
    } catch (error) {
      console.log("Error fetching FAQ data:", error);
    }
  };
  

  useEffect(() => {
    showFaq();
  }, []);
  return (
    <Container fluid className="faqcont">
    <h4 className="faqhead">Frequently Asked Questions</h4>
    <h6 className="faqobs">(FAQ’s)</h6>

    <Accordion  >
      {showdata?.map((faq, index) => (
        <Accordion.Item style={{background:'rgba(249, 249, 249, 1)'}}  className="contentsfaq" eventKey={index.toString()} key={index}>
          <Accordion.Header ><b  className="faqques">{faq?.question}</b></Accordion.Header>
          <Accordion.Body >
            <p className="faqans">{faq?.answer}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>

  </Container>
  );
};

export default Faq;
