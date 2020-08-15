import React from "react";
import PropTypes from "prop-types";
import { useTable, useFilters, usePagination} from "react-table";

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
  <div class="pagination">
  <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        Stona {' '}
        <strong>
          {pageIndex + 1} z {pageOptions.length}
        </strong>{' '}
      </span>
  </div>
) 

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
        Cell: cellProps => <span>Przygotuj wniosek</span>
      }
    ],
    []
  );
  const tableInstance = useTable({ columns, data }, useFilters, usePagination);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,


    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = tableInstance;

  return (
    <>
    <table {...getTableProps()} className={`${styles.ChildrenTable}`}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                <Filter column={column} />
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      PESEL: PropTypes.string
    })
  ).isRequired
};
