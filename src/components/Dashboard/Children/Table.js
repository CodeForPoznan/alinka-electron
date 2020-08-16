import React from "react";
import PropTypes from "prop-types";
import { useTable, useFilters, usePagination } from "react-table";

import Button from "../../Button/Button";

import styles from "./Children.scss";

export const Filter = ({ column }) => (
  <div>{column.canFilter ? column.render("Filter") : null}</div>
);

export const TextFilter = ({ column: { filterValue, setFilter } }) => (
  <input
    type="text"
    value={filterValue || ""}
    onChange={e => {
      setFilter(e.target.value || undefined);
    }}
  />
);

export const TablePaginator = ({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  pageIndex
}) => (
  <div className="pagination">
    <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {"<<"}
    </Button>{" "}
    <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
      {"<"}
    </Button>{" "}
    <span>
      Stona{" "}
      <strong>
        {pageIndex + 1} z {pageOptions.length}
      </strong>{" "}
    </span>
    <Button onClick={() => nextPage()} disabled={!canNextPage}>
      {">"}
    </Button>{" "}
    <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {">>"}
    </Button>{" "}
  </div>
);

export const Table = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "PESEL",
        accessor: "PESEL",
        disableFilters: true
      },
      {
        Header: "Imie",
        accessor: "firstName",
        Filter: TextFilter
      },
      {
        Header: "Nazwisko",
        accessor: "lastName",
        Filter: TextFilter
      },
      {
        Header: "Akcje",
        Cell: <span>Przygotuj wniosek</span>
      }
    ],
    []
  );
  const tableInstance = useTable({ columns, data }, useFilters, usePagination);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = tableInstance;

  return (
    <>
      <table {...getTableProps()} className={`${styles.ChildrenTable}`}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <Filter column={column} />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td key={cell.id} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <TablePaginator
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        pageIndex={pageIndex}
      />
    </>
  );
};

Filter.propTypes = {
  column: PropTypes.object
};

TextFilter.propTypes = {
  column: PropTypes.shape({
    filterValue: PropTypes.any,
    setFilter: PropTypes.func
  })
};

TablePaginator.propTypes = {
  canPreviousPage: PropTypes.bool,
  canNextPage: PropTypes.bool,
  pageOptions: PropTypes.array,
  pageCount: PropTypes.number,
  gotoPage: PropTypes.func,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  pageIndex: PropTypes.number
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      PESEL: PropTypes.string
    })
  ).isRequired
};
