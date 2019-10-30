import React from "react";
import TeamMembers from "./TeamMembers";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const Team = () => (
  <div className={`FormContent`}>
    <FieldWrapper
      name={`supportCenter.instituteName`}
      componentSize="medium"
      component="input"
    />
    <FieldWrapper name={`supportCenter.city`} componentSize="medium" component="input" />
    <FieldWrapper
      name={`supportCenter.postalCode`}
      componentSize="medium"
      component="input"
    />
    <TeamMembers />
  </div>
);

export default Team;
