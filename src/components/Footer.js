import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed for Harsha Ramireddy</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="mailto:rharshavardhan1@gmail.com" style={{ color: "white" }}>
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a href="tel:+919966061681" style={{ color: "white" }}>
                <AiOutlinePhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://maps.google.com/?q=Krishnarajapuram+Bangalore+India"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
