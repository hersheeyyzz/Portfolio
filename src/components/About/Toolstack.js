import React from "react";
import { Col, Row } from "react-bootstrap";

const toolset = [
  "EASA Part 21J",
  "CS-25 (Subpart H)",
  "Export Control Compliance",
  "QC0 / QC1 / QC2",
  "SIDP / TDD Checks",
  "Design Dossier Reviews",
  "RDR & DQN Approval",
  "Agile Team Collaboration",
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolset.map((item) => (
        <Col xs={6} md={3} className="tech-icons" key={item}>
          <div className="tech-icons-text">{item}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
