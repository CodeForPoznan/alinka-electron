import React from "react";
import TeamMembers from "./TeamMembers/TeamMembers.js";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const Team = () => (
  <div className={`FormContent`}>
    <FieldWrapper
      name={`meeting.date`}
      componentSize="medium"
      component="input"
    />
    <FieldWrapper
      name={`meeting.hour`}
      componentSize="medium"
      component="input"
    />
    <TeamMembers />
  </div>
);

export default Team;
