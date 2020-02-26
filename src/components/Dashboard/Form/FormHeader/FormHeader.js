import React from "react";
import styles from "./FormHeader.scss";
import PropTypes from "prop-types";
import HeaderIcon from "../../../../assets/icons/profile.svg";

const switchHeading = page => {
  let heading = "";
  switch (page) {
    case 0:
      heading = "Dane Dziecka";
      return heading;
    case 1:
      heading = "Wnioskodawcy";
      return heading;
    case 2:
      heading = "Zespół";
      return heading;
    case 3:
      heading = "Podsumowanie";
      return heading;
    default:
      heading = "Dane Dziecka";
      return heading;
  }
};

const FormHeader = ({ page }) => {
  const heading = switchHeading(page);
  return (
    <div className={styles.FormHeader}>
      <HeaderIcon />
      <h2 className={styles.Heading}>
        <span className={styles.Underline}>{heading}</span>
      </h2>
    </div>
  );
};

FormHeader.propTypes = {
  page: PropTypes.number
};

export default FormHeader;
