import React from "react";
import PropTypes from "prop-types";
import ReactFlexyTable from "react-flexy-table";

import "react-flexy-table/dist/index.css";
import styles from "./Table.scss";

const Table = ({ data, additionalCols, globalSearch }) => (
  <div className={styles.Table}>
    <ReactFlexyTable
      data={data}
      additionalCols={additionalCols}
      globalSearch={globalSearch}
    />
  </div>
);

Table.defaultProps = {
  additionalCols: {},
  globalSearch: false
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  additionalCols: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      td: PropTypes.func
    })
  ),
  globalSearch: PropTypes.bool
};

export default Table;
