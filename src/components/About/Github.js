import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "30px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Notable <strong className="purple">Impact</strong>
      </h1>
      <p style={{ maxWidth: "900px" }}>
        Led an Improvement Platform initiative with a 10-member cross-functional team,
        driving 1,530 hours of targeted automation and enabling 8,600+ hours of
        projected efficiency gains by 2025 while improving lead time and quality.
      </p>
    </Row>
  );
}

export default Github;
