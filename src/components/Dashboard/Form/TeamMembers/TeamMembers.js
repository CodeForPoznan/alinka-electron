import React from "react";
import PropTypes from "prop-types";
import DocumentForm from "../DocumentForm";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const TeamMembers = ({ numberOfMembers }) => (
  <DocumentForm.Step>
    {new Array(numberOfMembers).fill(0).map((_, index) => (
      <FieldWrapper
        key={index}
        name={`teamMember${index + 1}`}
        componentSize="large"
        component="input"
        label={`Członek ${index + 1}`}
      />
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
