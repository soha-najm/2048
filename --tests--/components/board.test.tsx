import { render } from "@testing-library/react";
import Board from "../../components/board";
import React from "react";

describe("Board", () => {
  it("should render a board with 16 cells", () => {
    const { container } = render(<Board />);
    const cellElements = container.querySelectorAll(".cell");
    expect(cellElements.length).toEqual(16);
  });
});
