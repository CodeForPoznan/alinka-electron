import React from "react";
import DocumentForm from "../../DocumentForm";
import FieldWrapper from "../../FieldWrapper/FieldWrapper";
import { FieldArray } from "react-final-form-arrays";
import styles from "./TeamMembers.scss";

const TeamMembers = () => (
  <DocumentForm.Step>
    <FieldArray name="members">
      {
        ({ fields }) => (
            <React.Fragment>
              <button 
                onClick={() => {fields.push({name: "", function: ""})}}>
                  Dodaj
              </button>
              {
                fields.map((element, index) => 
                  <div key={index} className={styles.TeamMembersInputWrapper}>
                    <FieldWrapper
                      name={`${element}.name`}
                      component="input"
                      componentSize="medium"
                      label={`Członek ${index + 1}`}
                      />
                    <FieldWrapper
                      name={`${element}.function`}
                      component="input"
                      componentSize="medium"
                      label="Specjalizacja"
                      />
                      <button onClick={() => {fields.remove(index)}}>
                        Usuń
                      </button>
                  </div>
                )
              }
          </React.Fragment>
        )
      }
    </FieldArray>
  </DocumentForm.Step>
);

export default TeamMembers;
