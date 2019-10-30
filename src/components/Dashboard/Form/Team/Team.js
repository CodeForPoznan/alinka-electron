import React from "react";
import TeamMembers from "./TeamMembers";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const Team = () => (
  <div className={`FormContent`}>
    <FieldWrapper
      name={`team.instituteName`}
      componentSize="medium"
      component="input"
    />
    <FieldWrapper name={`team.city`} componentSize="medium" component="input" />
    <FieldWrapper
      name={`team.postalCode`}
      componentSize="medium"
      component="input"
    />
    <TeamMembers />
  </div>
);

export default Team;
