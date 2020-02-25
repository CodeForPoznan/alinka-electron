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
        {routes.map((route, index) => (
          <li key={index} className={styles.NavItem}>
            <NavLink
              exact
              to={route.path}
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              {content[route.id]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
