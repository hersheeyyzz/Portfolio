import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const experience = [
  {
    period: "11/2021 - Present",
    company: "AIRBUS India Pvt Ltd",
    role: "ATA 928 CI Responsible | Electrical Systems Installation (A320 Family)",
    points: [
      "Designed and integrated EWIS harnesses for Airbus A320 family with safety and compliance focus.",
      "Collaborated with teams in Hamburg and Bremen to resolve integration and regulatory issues.",
      "Held A1020 Approver Delegation for ATA92 installation drawings and ensured QC0/QC1/QC2 quality adherence.",
      "Reviewed and approved design dossiers, RDRs and DQNs per SIDP/TDD and Airbus check processes.",
    ],
  },
  {
    period: "09/2019 - 11/2021",
    company: "CYIENT LTD (Client: Boeing Defense, Space & Security)",
    role: "Electrical Design and Analysis Engineer",
    points: [
      "Designed wire harness assembly products and delivered manufacturing inputs to client requirements.",
      "Enhanced component catalogues with electrical/mechanical smart parts using CATIA V5 and ENOVIA.",
      "Career break: 05/2020 - 04/2021 (COVID period).",
    ],
  },
  {
    period: "10/2018 - 08/2019",
    company: "TECH MAHINDRA (Client: Airbus A380 Program)",
    role: "Aerospace Wire Harness Design and Analysis Engineer",
    points: [
      "Designed retrofit solutions for Airbus A380 cabin upgrades with feasibility studies.",
      "Delivered compliant solutions using CATIA EHI and ENOVIA 3DCOM.",
    ],
  },
];

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container style={{ color: "white", paddingTop: "120px", paddingBottom: "40px" }}>
        <h1 className="project-heading">
          Harsha <strong className="purple">Ramireddy</strong>
        </h1>
        <p style={{ textAlign: "center" }}>
          Krishnarajapuram, Bangalore, India · +91 9966061681 · rharshavardhan1@gmail.com
        </p>

        <Row className="mt-4">
          <Col md={12}>
            <h3 className="purple">Professional Summary</h3>
            <p>
              Aerospace Engineer with 6+ years of experience in EWIS design, integration,
              and configuration management. Seeking challenging roles in electrical systems
              design to leverage CATIA V5 expertise, cross-functional collaboration, and
              full-lifecycle product development.
            </p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <h3 className="purple">Work Experience</h3>
            {experience.map((item) => (
              <div key={item.company + item.period} style={{ marginBottom: "20px" }}>
                <h5>{item.role}</h5>
                <p style={{ marginBottom: "8px" }}>
                  <strong>{item.company}</strong> · {item.period}
                </p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <h3 className="purple">Education</h3>
            <p>
              BE in Aeronautical Engineering<br />
              VelTech RR and Dr.SR Institute of Science and Technology (2014-2018)<br />
              CGPA: 8.33/10
            </p>
          </Col>
          <Col md={6}>
            <h3 className="purple">Awards</h3>
            <ul>
              <li>Spot Award (11/2024) - VKM Ownership and EBAM Dashboard creation</li>
              <li>A1020 Approver Delegation for ESI Drawings (10/2023)</li>
              <li>Outstanding Performer - Airbus Upgrade Services (03/2019)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
