import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// Greet should render the text hello and if a name is passed into the  Component
// it should render hello followed by the name

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Kaium" />);
    const textElement = screen.getByText("Hello Kaium");
    expect(textElement).toBeInTheDocument();
  });
});
