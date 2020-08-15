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
            <TextField
              name={`applicant.firstName1`}
              componentSize="large"
              component="input"
              validate=""
            />
            <TextField
              name={`applicant.lastName1`}
              componentSize="large"
              component="input"
            />

            <TextField
              name={`applicant.address1`}
              componentSize="large"
              component="input"
            />
            <TextField
              name={`applicant.postalCode1`}
              componentSize="large"
              component="input"
            />
            <TextField
              name={`applicant.city1`}
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
