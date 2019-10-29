import React from "react";
import ReactDOM from "react-dom";
import Team from "./Team";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";

describe("TeamComponent", () => {
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

  it("should be created", () => {
    const div = document.createElement("div");
    ReactDOM.render(formWrapper(<Team />), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
