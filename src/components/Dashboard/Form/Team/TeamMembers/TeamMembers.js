import React from "react";
import FieldWrapper from "../../FieldWrapper/FieldWrapper";
import { FieldArray } from "react-final-form-arrays";
import Button from "../../../../Button/Button";

import styles from "./TeamMembers.scss";

const TeamMembers = () => (
  <FieldArray name="meeting.members">
    {({ fields }) => (
      <React.Fragment>
        <Button
          onClick={() => {
            fields.push({ name: "", function: "" });
          }}
        >
          Dodaj
        </Button>
        {fields.map((element, index) => (
          <div key={index} className={styles.TeamMembersInputWrapper}>
            <FieldWrapper
              name={`${element}.name`}
              component="input"
              componentSize="medium"
              label="Imię i nazwisko"
            />
            <FieldWrapper
              name={`${element}.function`}
              component="input"
              componentSize="medium"
              label="Funkcja"
            />
            <Button
              onClick={() => {
                fields.remove(index);
              }}
            >
              Usuń
            </Button>
          </div>
        ))}
      </React.Fragment>
    )}
  </FieldArray>
);

export default TeamMembers;
