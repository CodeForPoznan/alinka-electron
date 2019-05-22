import React from 'react';
import './SaveButton.css';

const { ipcRenderer } = require('electron');



export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    ipcRenderer.send('print:value', this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="fileName">File name</label>
            <input type="text" name="fileName" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}