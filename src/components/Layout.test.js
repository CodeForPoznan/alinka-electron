import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout.js";

// eslint-disable-next-line no-undef
describe("Layout", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Layout />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
