import React from "react";
import TeamMembers from "./TeamMembers/TeamMembers.js";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import { DateField } from "../FieldWrapper";

const Team = () => (
  <div className={`FormContent`}>
    <DateField name="meeting.date" />
    {/* <FieldWrapper
      name={`meeting.date`}
      componentSize="medium"
      component="input"
    /> */}
    <FieldWrapper
      name={`meeting.hour`}
      componentSize="medium"
      component="input"
    />
    <TeamMembers />
  </div>
);

export default Team;
