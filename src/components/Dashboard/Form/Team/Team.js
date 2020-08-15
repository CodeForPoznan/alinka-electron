import React from "react";
import TeamMembers from "./TeamMembers/TeamMembers.js";
import TextField from "../FieldWrapper/TextField";

const Team = () => (
  <div className={`FormContent`}>
    <TextField name={`meeting.date`} />
    <TextField name={`meeting.hour`} />
    <TeamMembers />
  </div>
);

export default Team;
