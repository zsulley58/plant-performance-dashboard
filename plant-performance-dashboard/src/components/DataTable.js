import React from "react";

const DataTable = () => {
  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{/* Data rows will go here */}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
