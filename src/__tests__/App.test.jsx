import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("HogApp", () => {
  it("renders product dashboard title", () => {
    render(<App />);
    // Check if the "HogWild" title appears
    expect(screen.getByText(/HogWild/i)).toBeInTheDocument();
  });

  it("adds a new hog via the form", () => {
    render(<App />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "Hogzilla" },
    });
    fireEvent.change(screen.getByLabelText(/Specialty/i), {
      target: { value: "Fighter" },
    });
    fireEvent.change(screen.getByLabelText(/Weight/i), {
      target: { value: "300" },
    });
    fireEvent.change(screen.getByLabelText(/Highest Medal/i), {
      target: { value: "Gold" },
    });

    // Simulate the form submission
    fireEvent.click(screen.getByText(/Add Hog/i));

    // Assert that the new hog is displayed
    expect(screen.getByText(/Hogzilla/i)).toBeInTheDocument();
    expect(screen.getByText(/Fighter/i)).toBeInTheDocument();
    expect(screen.getByText(/300/i)).toBeInTheDocument();
    expect(screen.getByText(/Gold/i)).toBeInTheDocument();
  });
});





