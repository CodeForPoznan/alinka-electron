import React, { Component } from "react";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicant.scss";

class Applicant extends Component {
  state = {
    isVisible: false
  };
  handleButtonClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div className={styles.Applicant}>
        {/*<Button onClick={this.handleButtonClick}>+</Button>*/}
        <button
          onClick={this.handleButtonClick}
          type="button"
          className={styles.developedDiv}
        >
          {" + "}
        </button>
        <label className={styles.labelForAddApplicantButton}>
          Dodaj drugiego wnioskodawcę
        </label>
        {this.state.isVisible && (
          <div className={styles.Applicant}>
            <FieldWrapper
              name={`applicant.name2`}
              componentSize="large"
              component="input"
              validate=""
            />
            <FieldWrapper
              name={`applicant.lastName2`}
              componentSize="large"
              component="input"
            />

            <FieldWrapper
              name={`applicant.street2`}
              componentSize="large"
              component="input"
            />
            <FieldWrapper
              name={`applicant.postalCode2`}
              componentSize="large"
              component="input"
            />
            <FieldWrapper
              name={`applicant.city2`}
              componentSize="large"
              component="input"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Applicant;
