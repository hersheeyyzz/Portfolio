import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aerospace Engineer",
          "EWIS Design Specialist",
          "Electrical Systems Integrator",
          "CATIA V5 Practitioner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
