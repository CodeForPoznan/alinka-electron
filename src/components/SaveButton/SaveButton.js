import React, { useState } from "react";
import styles from "./SaveButton.scss";

const { ipcRenderer } = require("electron");

const NavBar = () => {
  const [fileName, setFileName] = useState("");

  const handleChange = event => {
    setFileName(event.target.value);
  };

  const handleSubmit = event => {
    ipcRenderer.send("print:value", fileName);
    event.preventDefault();
  };

  return (
    <div className={styles.SaveButton}>
      <form onSubmit={handleSubmit.bind(this)}>
        <label htmlFor="fileName">File name</label>
        <input
          type="text"
          name="fileName"
          value={fileName}
          onChange={handleChange.bind(this)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NavBar;
