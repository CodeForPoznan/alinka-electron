import React from "react";
import ReactDOM from "react-dom";
import TeamMembers from "./TeamMembers";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";

describe("TeamMembersComponent", () => {
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
    ReactDOM.render(formWrapper(<TeamMembers />), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
