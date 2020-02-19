import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.scss";
import routes from "../../routing/routes";

const Navigation = () => {
  const content = {
    home: "Panel",
    createDocument: "Utwórz nowy dokument",
    children: "Wyszukaj dzieci",
    statements: "Wyszukaj orzeczenie"
  };

  return (
    <nav>
      <ul>
        {Object.keys(routes).map(key => (
          <li key={key} className={styles.NavItem}>
            <NavLink
              exact
              to={routes[key].path}
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              {content[routes[key].id]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
