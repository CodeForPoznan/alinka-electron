import React from "react";
import { Route, NavLink } from "react-router-dom";
import styles from "./Navigation.scss";
import PropTypes from "prop-types";

const Navigation = props => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Panel</NavLink>
        </li>
        <li>
          <NavLink to="/create-document">Utwórz nowy dokument</NavLink>
        </li>
        <li>
          <NavLink to="/children">Wyszukaj dzieci</NavLink>
        </li>
        <li>
          <NavLink to="/documents">Wyszukaj orzeczenie</NavLink>
        </li>
      </ul>
    </nav>
  );
};

// Navigation.propTypes = {

// };

export default Navigation;
