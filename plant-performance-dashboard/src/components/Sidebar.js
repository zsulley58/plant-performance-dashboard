import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>Overview</div>
      <div>Inlet Particulate Filter</div>
      <div>Outlet Coalescer Filter</div>
      <div>Compressors</div>
      <div className="view-filters">
        <h3>View Filters</h3>
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
        <button>Quarter</button>
        <button>Year</button>
      </div>
    </div>
  );
}
export default Sidebar;
