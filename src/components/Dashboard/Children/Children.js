import React from "react";
import { Link } from "react-router-dom";
import Table from "../../ui/Table/Table";
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

const mockData = [
  { firstName: "Jan", lastName: "Kowalski", PESEL: "99080255555" },
  { firstName: "Arnold", lastName: "Biedroń", PESEL: "03211252395" },
  {
    firstName: "Szymon",
    lastName: "Biedraszewski",
    PESEL: "11320757736"
  },
  { firstName: "Adam", lastName: "Szczęsny", PESEL: "11320757736" },
  { firstName: "Marek", lastName: "Admowski", PESEL: "11320757736" },
  { firstName: "Jan", lastName: "Bakłażan", PESEL: "11320757736" },

  { firstName: "Paweł", lastName: "Kowalski", PESEL: "99080255555" },
  { firstName: "Paweł", lastName: "Nowy", PESEL: "03211252395" },
  {
    firstName: "Tomasz",
    lastName: "Nichło",
    PESEL: "11320757736"
  },
  { firstName: "Wiktor", lastName: "Szczęsny", PESEL: "11320757736" },
  { firstName: "Maciej", lastName: "Janowski", PESEL: "11320757736" },
  { firstName: "Rafał", lastName: "Szymański", PESEL: "11320757736" },
  { firstName: "Agata", lastName: "Nowak", PESEL: "99080255555" },
  { firstName: "Stefan", lastName: "Cis", PESEL: "03211252395" },
  {
    firstName: "Paulina",
    lastName: "Markotna",
    PESEL: "11320757736"
  },
  { firstName: "Edyta", lastName: "Agaciak", PESEL: "11320757736" },
  { firstName: "Agata", lastName: "Bizon", PESEL: "11320757736" },
  { firstName: "Jan", lastName: "Sok", PESEL: "11320757736" }
];

const dataWithTranslatedHeader = mockData.map(data => ({
  Imię: data.firstName,
  Nazwisko: data.lastName,
  PESEL: data.PESEL
}));

const additionalCols = [
  {
    header: "Akcje",
    td: data => {
      return (
        <>
          <Link
            to={{
              pathname: "/create-document",
              state: {
                data
              }
            }}
          >
            Przygotuj wniosek
          </Link>
          <Link
            to={{
              pathname: "/",
              state: {
                id: data.PESEL
              }
            }}
          >
            Pokaż orzeczenia
          </Link>
        </>
      );
    }
  }
];

const Children = () => (
  <div className={styles.Children}>
    <ChildrenHeader />
    <Table
      data={dataWithTranslatedHeader}
      additionalCols={additionalCols}
      globalSearch
    />
  </div>
);

export default Children;
