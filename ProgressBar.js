import React, { Component } from "react";
import styles from "./ProgressBar.scss";

class ProgressBar extends Component {
  
isActive=(stepNumber)=>{
  if(this.props.pageCounter>=stepNumber){
    console.log(this.props.pageCounter)
    return styles.active
  }
}
    render() {

    return (
    
      <div className={styles.ProgressBar}>git
      <ul className={styles.ProgressBar__list}>
        <li className={this.isActive(0)}>Dane </li>
        <li className={this.isActive(1)}>Wnioskodawcy</li>
        <li className={this.isActive(2)}>Zespół</li>
       </ul>
    </div>
    );
  }
}

export default ProgressBar;
