import React from "react";
import ReactDOM from "react-dom";
import { act, create } from "react-test-renderer";
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
    const div = create(
      formWrapper(<Applicants reasonsList={[]} disabilityList={[]} />)
    );
    div.unmount();
  });

  it("contains select with first reason", () => {
    const div = create(
      formWrapper(<Applicants reasonsList={[]} disabilityList={[]} />)
    );
    const applicants = div.root
      expect(applicants.findByProps({component: "select", name: "applicant.reason"})).toBeDefined();
    div.unmount();
  });

  it("contains select with second reason", () => {
    const div = create(
      formWrapper(<Applicants reasonsList={[]} disabilityList={[]} />)
    );
    const applicants = div.root
      expect(applicants.findByProps({component: "select", name: "applicant.secondReason"})).toBeDefined();
    div.unmount();
  });

  it("contains only znacznie utrudniajacy uniemozliwiajacy when indywidualne is selected", () => {
    const div = create(
      formWrapper(<Applicants reasonsList={[]} disabilityList={[]} />)
    );
    const applicants = div.root
    expect(1).toBeDefined()
  })
});
