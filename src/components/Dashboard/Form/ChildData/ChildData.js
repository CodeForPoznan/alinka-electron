import React, { useState, useEffect } from "react";

import { TextField, SelectField } from "../FieldWrapper";

import styles from "./ChildData.scss";

const { ipcRenderer } = require("electron");
const { isPeselValid } = require("./../../../../../src/utils/validators");

const ChildData = () => {
  const [schoolTypes, setSchoolTypes] = useState([
    { key: 1, text: "Wybierz rodzaj szkoły", value: "" }
  ]);

  const getSchoolType = () => {
    // eslint-disable-next-line no-console
    console.log("Fetching school types from DB");
    ipcRenderer.send("db:schoolType");
    ipcRenderer.on("sendData", (event, result) => {
      setSchoolTypes([
        ...schoolTypes,
        ...result.map(school => {
          const schoolData = school.dataValues;
          const schoolLine = {
            key: schoolData.createdAt,
            text: schoolData.name,
            value: schoolData.name
          };
          return schoolLine;
        })
      ]);
    });
  };

  useEffect(() => {
    getSchoolType();
  }, []);

  return (
    <div className={`FormContent ${styles.ChildData}`}>
      <TextField name="child.firstName" />
      <TextField name="child.lastName" />
      <TextField name="child.birthPlace" />
      <TextField
        name="child.pesel"
        validator={isPeselValid}
        componentSize="medium"
      />
      <TextField name="child.city" />
      <TextField name="child.postalCode" componentSize="medium" />
      <TextField name="child.address" />
      <SelectField name="child.schoolType" options={schoolTypes} />
      <TextField name="child.profession" componentSize="medium" />
      <TextField name="child.class" componentSize="small" />
      <TextField name="child.schoolName" componentSize="extraLarge" />
    </div>
  );
};

export default ChildData;
