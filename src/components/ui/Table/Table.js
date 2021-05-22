import React from "react";
import PropTypes from "prop-types";
import ReactFlexyTable from "react-flexy-table";

import styles from "./Table.scss";

const Table = ({ data, columnRenderer, globalSearch }) => (
  <div className={styles.Table}>
    <ReactFlexyTable
      data={data}
      columns={columnRenderer(data)}
      globalSearch={globalSearch}
      previousText="Wstecz"
      nextText="Dalej"
      pageText="Strona"
      ofText="z"
      filteredDataText="Znaleziono: "
      searchText="Wyszukaj"
      pageSize={10}
    />
  </div>
);

Table.defaultProps = {
  globalSearch: false
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  columnRenderer: PropTypes.func.isRequired,
  globalSearch: PropTypes.bool
};

export default Table;
