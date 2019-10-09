import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
    it("should be created", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Sidebar />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('should render elements in `children` prop', () => {
        const subject = (<Sidebar><div>Test</div></Sidebar>);
    })
})
