import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="app" data-js="app-main">
        <img src="test-image.jpg" height="200" width="400" />
        <h1>testing</h1>
      </div>
    );
  }
}
