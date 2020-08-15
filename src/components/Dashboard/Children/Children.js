import React from "react";
import PropTypes from "prop-types";

import Button from "../../Button/Button";
import HeaderIcon from "../../../assets/icons/profile.svg";

import styles from "./Children.scss";


const ChildrenHeader = () => (
  <div className={styles.ChildrenHeader}>
    <HeaderIcon />
    <h2 className={styles.Heading}>
      <span>Wyszukaj dzieci</span>
    </h2>
  </div>
);

const ChildrenTable = ({ children }) => (
  <table className={`${styles.ChildrenTable}`}>
    <thead>
        <tr>
        <th>PESEL</th>
        <th>Imię</th>
        <th>Nazwisko</th>
        <th>Akcje</th>
        </tr>
    </thead>
    {children.map(child => (
      <tr key={child.PESEL}>
        <td>{child.PESEL}</td>
        <td>{child.firstName}</td>
        <td>{child.lastName}</td>
        <td>
            <span>Przygotuj wniosek</span>
        </td>
      </tr>
    ))}
  </table>
);

const Children = () => (
  <div className={`${styles.Children}`}>
    <ChildrenHeader />
    <div className={`${styles.ChildrenFilterContainer}`}>
      <input type="text" name="childName" />
      <Button>Szukaj</Button>
    </div>
    <ChildrenTable>
      {[
        { firstName: "Jan", lastName: "Kowalski", PESEL: "99080255555" },
        { firstName: "Arnold", lastName: "Biedroń", PESEL: "03211252395" },
        { firstName: "Szymon", lastName: "Biedraszewski", PESEL: "11320757736" }
      ]}
    </ChildrenTable>
  </div>
);

ChildrenTable.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      PESEL: PropTypes.string
    })
  ).isRequired
};

export default Children;
