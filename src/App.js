// React import
import React from 'react';
import ReactDOM from 'react-dom';
// CSS import
import './main.css';

// Components import
import Header from './components/Header'
import SaveButton from './components/SaveButton'



// Render and Inject components into the html element tree
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<SaveButton />, document.getElementById('save-button'));
