import React from "react";
import ReactDOM from "react-dom";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import ChildData from "./ChildData.js";

describe("ChildData", () => {
  let formWrapper;
  beforeEach(() => {
    // eslint-disable-next-line react/display-name
    formWrapper = component => (
      <Form
        onSubmit={() => {}}
        render={() => component}
        mutators={{ ...arrayMutators }}
      />
    );
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(formWrapper(<ChildData />), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
