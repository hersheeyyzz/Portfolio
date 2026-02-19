import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PROFESSIONAL <span className="purple">PROFILE</span>
            </h1>
            <p className="home-about-body">
              Aerospace Engineer with 6+ years of experience in EWIS design,
              integration, and configuration management for large commercial and
              defense aerospace programs.
              <br />
              <br />
              Currently contributing at <b className="purple">AIRBUS India</b>
              {" "}for single-aisle aircraft electrical systems installation,
              physical design and integration.
              <br />
              <br />
              Expertise includes <b className="purple">CATIA V5, ENOVIA, SAP,
              TAKSY, EBAM</b>, and compliance-focused design reviews aligned to
              Airbus standards and EASA frameworks.
              <br />
              <br />
              I enjoy solving complex integration challenges, driving cross-team
              collaboration, and building process improvements that scale quality
              and delivery performance.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
