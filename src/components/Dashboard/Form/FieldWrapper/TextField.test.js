import React from "react";
import { Form } from "react-final-form";
import { render } from "@testing-library/react";
import TextField from "./TextField";

describe("TextField", () => {
  let formWrapper;
  beforeEach(() => {
    // eslint-disable-next-line react/display-name
    formWrapper = component => (
      <Form onSubmit={() => {}} render={() => component} />
    );
  });

  it("should be rendered without crashing", () => {
    const component = render(formWrapper(<TextField name="child.firstName" />));

    expect(component.getByTestId("textField")).toBeInTheDocument();
  });

  it("should has a class based on `componentSize` prop", () => {
    const component = render(
      formWrapper(<TextField name="child.firstName" componentSize="medium" />)
    );

    expect(component.getByTestId("textField")).toBeInTheDocument();
  });

  it("should use passed as prop", () => {
    const mockFunction = jest.fn();
    const component = render(
      formWrapper(<TextField name="child.firstName" validator={mockFunction} />)
    );

    expect(component.getByTestId("textField")).toBeInTheDocument();
  });
});
