import React from "react";
import TeamMembers from "./TeamMembers";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const Team = () => (
  <React.Fragment>
    <FieldWrapper
      name="name"
      componentSize="medium"
      component="input"
      label="Nazwa"
    />
    <FieldWrapper
      name="address"
      componentSize="medium"
      component="input"
      label="Adres"
    />
    <FieldWrapper
      name="post"
      componentSize="medium"
      component="input"
      label="Kod pocztowy"
    />
    <TeamMembers />
  </React.Fragment>
);

export default Team;
