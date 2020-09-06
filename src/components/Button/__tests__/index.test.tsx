import React from "react";
import { render } from "@testing-library/react";
import Button from "../index";
import "@testing-library/jest-dom/extend-expect";

describe("test button", () => {
  it("render default button", () => {
    const { getByText } = render(<Button>default</Button>);
    const defaultButton = getByText("default");
    expect(defaultButton).toHaveClass('picasso-btn picasso-btn-primary picasso-btn-middle')
  });
});
