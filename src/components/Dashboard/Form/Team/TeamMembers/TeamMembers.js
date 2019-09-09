import React from "react";
import PropTypes from "prop-types";
import DocumentForm from "../../DocumentForm";
import FieldWrapper from "../../FieldWrapper/FieldWrapper";
import styles from "./TeamMembers.scss";

const TeamMembers = ({ numberOfMembers }) => (
  <DocumentForm.Step>
    {new Array(numberOfMembers).fill(0).map((_, index) => (
      <div className={styles.teamMembersContainer}>
        <FieldWrapper
          key={index}
          name={`teamMember${index + 1}`}
          componentSize="medium"
          component="input"
          label={`Członek ${index + 1}`}
        />
        <FieldWrapper
          key={index}
          name={`teamMember${index + 1}Function`}
          componentSize="medium"
          component="input"
          label="Specjalizacja"
        />
      </div>
    ))}
  </DocumentForm.Step>
);

TeamMembers.propTypes = {
  numberOfMembers: PropTypes.number
};

TeamMembers.defaultProps = {
  numberOfMembers: 5
};

export default TeamMembers;
