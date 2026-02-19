import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Engineering <strong className="purple">Projects & Initiatives</strong>
        </h1>
        <p style={{ color: "white" }}>
          Selected work across aerospace design, research and process improvements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={true}
              title="A320 EWIS Harness Integration"
              description="Designed and integrated EWIS harnesses for Airbus A320 family programs with strong focus on precision, compliance, and installation feasibility across design milestones."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Improvement Platform (Airbus)"
              description="Initiated and led a 10-member agile cross-functional team, implementing automation use cases that generated 8,600+ efficiency hours and improved quality outcomes."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="Vorkonstrucktion Mechanik Leadership"
              description="Led an 8-member multifunctional team delivering high-quality preliminary electrical harness drawings used as key inputs for final design dossiers."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={true}
              title="Scramjet Inlet Optimization"
              description="Conducted theoretical optimization of dual-stepped cone inlet configurations to minimize spillage and improve shock-wave strategy at Mach 3-7."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={true}
              title="Scramjet Engine Research"
              description="Performed analytical investigation of combustion chamber performance for dual-mode operation (subsonic/supersonic) using CATIA V5, Ansys Fluent, MATLAB and Excel."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={true}
              title="Micro Gas-Turbine & Biodegradable Composite Studies"
              description="Optimized combustor dilution layout for thermal performance and developed reinforced PLA composite concepts achieving 21% weight reduction versus non-degradable alternatives."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
