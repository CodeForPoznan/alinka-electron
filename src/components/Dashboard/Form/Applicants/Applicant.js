import React, { Component } from "react";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./Applicant.scss";

class Applicant extends Component {
  state = {
    isVisible: false
  };
  handleOnButton = () => {
    if (this.state.isVisible === false) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };
  render() {
    return (
      <div className={styles.Applicant}>
        <button
          onClick={this.handleOnButton}
          type="button"
          className={styles.developedDiv}
        >
          {" "}
          +{" "}
        </button>
        <label className={styles.labelForAdd}>
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
