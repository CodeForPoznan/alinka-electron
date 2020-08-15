import React, { Component } from "react";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicant.scss";
import TextField from "../FieldWrapper/TextField";

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
        <button
          onClick={this.handleButtonClick}
          type="button"
          className={styles.developedDiv}
          id="addSecondAplicant"
        >
          {/* eslint-disable-next-line react */}+
        </button>
        <label
          className={styles.labelForAddApplicantButton}
          htmlFor="addSecondAplicant"
        >
          Dodaj drugiego wnioskodawcę
        </label>
        {this.state.isVisible && (
          <div className={styles.Applicant}>
            <TextField name={`applicant.firstName1`} />
            <TextField name={`applicant.lastName2`} />
            <TextField name={`applicant.address2`} />
            <TextField name={`applicant.postalCode2`} />
            <TextField name={`applicant.city2`} />
          </div>
        )}
      </div>
    );
  }
}

export default Applicant;
