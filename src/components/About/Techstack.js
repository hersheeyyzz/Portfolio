import React from "react";
import { Col, Row } from "react-bootstrap";

const skills = [
  "CATIA V5",
  "ENOVIA",
  "SAP",
  "TAKSY",
  "EBAM Dashboards",
  "CIRCE",
  "CoreElec",
  "Grounding & Bonding",
  "EMI/EMC",
  "EWIS Integration",
  "Electrical Load Validation",
  "Configuration Management",
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <Col xs={6} md={3} className="tech-icons" key={skill}>
          <div className="tech-icons-text">{skill}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
