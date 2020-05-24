import React, { useState, useEffect } from "react";

import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./ChildData.scss";

const { ipcRenderer } = require("electron");
const { isPeselValid } = require("./../../../../../src/utils/validators");

const ChildData = () => {
  const [schoolTypes, setSchoolTypes] = useState([
    { key: 1, text: "wybierz rodzaj szkoły", value: "" }
  ]);

  const getSchoolType = () => {
    // eslint-disable-next-line no-console
    console.log("Fetching school types from DB");
    ipcRenderer.send("db:schoolType");
    ipcRenderer.on("sendData", (event, result) => {
      setSchoolTypes(
        result.map(school => {
          const schoolData = school.dataValues;
          const schoolLine = {
            key: schoolData.createdAt,
            text: schoolData.name,
            value: schoolData.name
          };
          return schoolLine;
        })
      );
    });
  };

  useEffect(() => {
    getSchoolType();
  }, []);

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
        validator={isPeselValid}
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
        options={schoolTypes}
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
