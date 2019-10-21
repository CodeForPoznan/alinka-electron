import React from "react";
import TeamMembers from "./TeamMembers";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const Team = () => (
  <React.Fragment>
    <FieldWrapper
      name="supportCenter.name"
      componentSize="medium"
      component="input"
    />
    <FieldWrapper
      name="supportCenter.address"
      componentSize="medium"
      component="input"
    />
    <FieldWrapper
      name="supportCenter.post"
      componentSize="medium"
      component="input"
    />
    <TeamMembers />
  </React.Fragment>
);

export default Team;
