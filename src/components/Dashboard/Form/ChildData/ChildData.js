import React, { useState } from "react";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./ChildData.scss";

const { ipcRenderer } = require("electron");

const ChildData = () => {
  const [childDataState, setChildDataState] = useState({
    schoolTypes: [{ key: 1, text: "wybierz rodzaj szkoły", value: "" }]
  });

  const getSchoolType = () => {
    ipcRenderer.send("db:schoolType");
    ipcRenderer.on("sendData", (event, result) => {
      setChildDataState({
        schoolTypes: result.map(school => {
          const schoolData = school.dataValues;
          const schoolLine = {
            key: schoolData.id,
            text: schoolData.schoolType,
            value: schoolData.schoolType
          };
          return schoolLine;
        })
      });
    });
  };

  return (
    <div className={`FormContent ${styles.ChildData}`}>
      <FieldWrapper
        name={`child.name`}
        componentSize="large"
        component="input"
      />
      <FieldWrapper
        name={`child.birthPlace`}
        componentSize="large"
        component="input"
      />
      <FieldWrapper
        name={`child.pesel`}
        componentSize="medium"
        component="input"
      />
      <FieldWrapper
        name={`child.city`}
        componentSize="large"
        component="input"
      />
      <FieldWrapper
        name={`child.postalCode`}
        componentSize="medium"
        component="input"
      />
      <FieldWrapper
        name={`child.street`}
        componentSize="large"
        component="input"
      />
      <FieldWrapper
        name={`child.houseNumber`}
        componentSize="medium"
        component="input"
      />
      <FieldWrapper
        name={`child.schoolType`}
        componentSize="large"
        component="select"
        options={childDataState.schoolTypes}
        onFocus={getSchoolType}
      />
      <FieldWrapper
        name={`child.profession`}
        componentSize="medium"
        component="input"
      />
      <FieldWrapper
        name={`child.class`}
        componentSize="small"
        component="input"
      />
      <FieldWrapper
        name={`child.schoolName`}
        componentSize="extraLarge"
        component="input"
      />
    </div>
  );
};

export default ChildData;
