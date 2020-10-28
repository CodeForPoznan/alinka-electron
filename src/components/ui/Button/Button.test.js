import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Button", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should render elements in `children` props", () => {
    const component = renderer.create(
      <Button>
        <span>test</span>
      </Button>
    );
    const subject = component.toJSON();
    expect(subject.children).toHaveLength(1);
    expect(subject.children[0].type).toEqual("span");
    expect(subject.children[0].children).toEqual(["test"]);
  });
});
