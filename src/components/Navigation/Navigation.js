import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.scss";
import PropTypes from "prop-types";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Panel
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-document">Utwórz nowy dokument</NavLink>
        </li>
        <li>
          <NavLink to="/children">Wyszukaj dzieci</NavLink>
        </li>
        <li>
          <NavLink to="/statements">Wyszukaj orzeczenie</NavLink>
        </li>
      </ul>
    </nav>
  );
};

// Navigation.propTypes = {

// };

export default Navigation;
