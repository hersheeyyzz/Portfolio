import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero name", () => {
  render(<App />);
  const heading = screen.getByText(/harsha ramireddy/i);
  expect(heading).toBeInTheDocument();
});
