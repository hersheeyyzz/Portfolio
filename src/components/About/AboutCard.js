import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I&apos;m <span className="purple">Harsha Ramireddy</span> based in
            <span className="purple"> Bangalore, India</span>.
            <br />
            I currently work as an <span className="purple">ATA 928 CI Responsible</span>
            {" "}in the Airbus Design Office for the A320 family.
            <br />
            My focus is on <span className="purple">EWIS harness design, installation
            drawings approval, and full-lifecycle integration</span> with strong
            quality and compliance ownership.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Process optimization and lean improvements
            </li>
            <li className="about-activity">
              <ImPointRight /> Cross-cultural collaboration with global teams
            </li>
            <li className="about-activity">
              <ImPointRight /> Knowledge management and team capability building
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Engineer with precision. Deliver with impact."
          </p>
          <footer className="blockquote-footer">Harsha Ramireddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
