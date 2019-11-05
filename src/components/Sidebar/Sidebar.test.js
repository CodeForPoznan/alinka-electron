import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("should be created", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render elements in `children` prop", () => {
    const component = renderer.create(
      <Sidebar>
        <span>test</span>
      </Sidebar>
    );
    const subject = component.toJSON();

    expect(subject.children).toHaveLength(1);
    expect(subject.children[0].type).toEqual("span");
    expect(subject.children[0].children).toEqual(["test"]);
  });
});
