import React from "react";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import ChildData from "./ChildData.js";
import renderer from "react-test-renderer";

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
    const component = renderer.create(formWrapper(<ChildData />));
    const subject = component.toJSON();

    expect(subject).not.toBeUndefined();
    expect(subject.type).toBe("div");
    expect(subject.props.className).toBe("FormContent ChildData");
  });
});
