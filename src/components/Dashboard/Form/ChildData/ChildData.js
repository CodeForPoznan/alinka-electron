import React from "react";
import FieldWrapper from "../FieldWrapper/FieldWrapper";
import styles from "./ChildData.scss";

const ChildData = () => (
  <div className={`FormContent ${styles.ChildData}`}>
    <FieldWrapper name={`child.name`} componentSize="large" component="input" />
    <FieldWrapper
      name={`child.nameGenetive`}
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
    <FieldWrapper name={`child.city`} componentSize="large" component="input" />
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
      component="input"
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

export default ChildData;
