import React from "react";
import Applicant from "./Applicant";
import ReactDOM from "react-dom";

describe("Applicant", () => {
  it("should be created", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Applicant />, div);
  });
});
