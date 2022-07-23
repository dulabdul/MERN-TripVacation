/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import Breadcumb from ".";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];
  const { container } = render(
    <Router>
      <Breadcumb data={breadcrumbList} />
    </Router>
  );
  const breadcrumb = container.querySelector(".breadcrumb");

  return { breadcrumb };
};

test("Should have <ol> with classNmae .breadcrumb and have text Home & House Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
