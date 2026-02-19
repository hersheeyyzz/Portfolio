import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <strong className="main-name"> HARSHA RAMIREDDY</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="aerospace engineering portfolio"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Open to roles in <span className="purple">electrical systems design</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="mailto:rharshavardhan1@gmail.com" className="icon-colour home-social-icons">
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a href="tel:+919966061681" className="icon-colour home-social-icons">
                  <AiOutlinePhone />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://maps.google.com/?q=Krishnarajapuram+Bangalore+India" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaMapMarkerAlt />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
