import React from "react";
import PropTypes from "prop-types";
// import { useTable, useFilters, useGlobalFilter } from "react-table";

import Button from "../../Button/Button";
import HeaderIcon from "../../../assets/icons/profile.svg";
import { Table as ChildrenTable } from "./Table";

import styles from "./Children.scss";

const ChildrenHeader = () => (
  <div className={styles.ChildrenHeader}>
    <HeaderIcon />
    <h2 className={styles.Heading}>
      <span>Wyszukaj dzieci</span>
    </h2>
  </div>
);

// const Filter = ({ column }) => (
//   <div>
//     {column.canFilter ? column.render("Filter") : null}
//   </div>
// );

// const TextFilter = ( {column: {filterValue, setFilter}} ) => (
//   <input
//     type="text"
//     value={filterValue || ""}
//     onChange={e => {setFilter(e.target.value || undefined)}}
//   />
// )

// const ChildrenTable = ({ data }) => {
//   const columns = React.useMemo(() => [
//     {
//       Header: "PESEL",
//       accessor: "PESEL",
//       Filter: TextFilter,
//     },
//     {
//       Header: "Imie",
//       accessor: "firstName",
//       Filter: TextFilter,
//     },
//     {
//       Header: "Nazwisko",
//       accessor: "lastName",
//       Filter: TextFilter,
//     },
//     {
//       Header: "Akcje",
//       filterable: false,
//       Cell: (cellProps) => <span>Przygotuj wniosek</span>,
//     }
//   ], []);
//   const tableInstance = useTable({ columns, data }, useFilters);
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = tableInstance;

//   return (
//     <table {...getTableProps()} className={`${styles.ChildrenTable}`}>
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()}>
//                 {column.render("Header")}
//                 <Filter column={column} />
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map(row => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map(cell => (
//                 <td {...cell.getCellProps()}>
//                   {cell.render("Cell")}
//                 </td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

const data = [
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
]

const Children = () => (
  <div className={`${styles.Children}`}>
    <ChildrenHeader />
    {/* <div className={`${styles.ChildrenFilterContainer}`}>
      <input type="text" name="childName" />
      <Button>Szukaj</Button>
    </div> */}
    <ChildrenTable data={data} />
  </div>
);

ChildrenTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      PESEL: PropTypes.string
    })
  ).isRequired
};

export default Children;
