import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";

import Applicants from "./Applicants";

describe("Applicants", () => {
  let formWrapper;
  beforeEach(() => {
    // eslint-disable-next-line react/display-name
    formWrapper = component => (
      <Form
        onSubmit={() => {}}
        render={() => component}
        mutators={{ ...arrayMutators }}
        initialValues={{ applicant: { reason: "mock_state_name" } }}
      />
    );
  });

  it("renders without crashing", () => {
    const div = renderer.create(
      formWrapper(<Applicants reasonsList={[]} disabilityList={[]} />)
    );
    div.unmount();
  });

  it("contains select with first reason", () => {
    const div = renderer.create(
      formWrapper(<Applicants reasonsList={[]} disabilityList={[]} />)
    );
    const applicants = div.root
      expect(applicants.findByProps({component: "select", name: "applicant.reason"})).toBeDefined();
    div.unmount();
  });
});
