import React, { useState, useEffect } from "react";

import { TextField, SelectField } from "../FieldWrapper";

import styles from "./ChildData.scss";

const { ipcRenderer } = require("electron");
const { isPeselValid } = require("./../../../../../src/utils/validators");

const ChildData = () => {
  const [schoolTypes, setSchoolTypes] = useState([
    { key: 1, text: "Wybierz rodzaj szkoły", value: "" }
  ]);
  const [schoolList, setSchoolList] = useState([
    {
      key: 1,
      text: "Wybierz szkołę",
      postCode: "",
      postOffice: "",
      street: "",
      schoolTypeName: ""
    }
  ]);

  const getSchoolType = () => {
    // eslint-disable-next-line no-console
    ipcRenderer.send("db:schoolType");
    ipcRenderer.on("sendSchoolTypes", (event, result) => {
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

  const getSchoolList = () => {
    // use as schoolType value selected by user
    const schoolType = "liceum ogólnokształcące";
    ipcRenderer.send("db:schoolList", schoolType);
    ipcRenderer.on("sendSchoolList", (event, result) => {
      setSchoolList([
        ...schoolList,
        ...result.map(school => {
          const schoolData = school.dataValues;
          const schoolLine = {
            key: schoolData.createdAt,
            text: schoolData.name,
            postCode: schoolData.postCode,
            postOffice: schoolData.postOffice,
            street: schoolData.street,
            schoolType: school.schoolTypeName
          };
          return schoolLine;
        })
      ]);
    });
  };

  useEffect(() => {
    getSchoolType();
    getSchoolList();
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
      <SelectField
        name="child.schoolName"
        componentSize="large"
        options={schoolList}
      />
    </div>
  );
};

export default ChildData;
