/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

test("Should have props [value, height,width, spacing]", () => {
  const height = 40,
    width = 40,
    spacing = 4;
  const { container } = render(
    <Star value={3.4} width={width} height={height} spacing={spacing} />
  );
  const starYellow = "div.stars div.star:not(.placeholder)";
  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(starYellow)).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
});
