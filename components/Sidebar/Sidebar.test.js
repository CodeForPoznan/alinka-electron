import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import { shallow } from "enzyme";

describe("Sidebar", () => {
    it("should be created", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Sidebar />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('should render elements in `childer` prop', () => {
        // const subject = (<Sidebar><div>Test</div></Sidebar>).render()
        shallow(<Sidebar/>)
    })
})
