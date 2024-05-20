import { useTable } from 'react-table';
import React from 'react';
const Table = ({ data, title }) => {
    // Supongamos que todos los objetos en cada lista tienen las mismas claves y que el primer objeto está presente y es representativo
    const columns = React.useMemo(() => {
      return data[0] ? Object.keys(data[0]).map(key => ({
        Header: key.charAt(0).toUpperCase() + key.slice(1), // Capitalizar la cabecera
        accessor: key
      })) : [];
    }, [data]);
    
    title = title.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data });
  
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start'}}>
        <h2 >{title}</h2>
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  export default Table;