import React from "react";
import TeamMembers from "./TeamMembers";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const Team = () => (
  <div className={`FormContent`}>
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
  </div>
);

export default Team;
