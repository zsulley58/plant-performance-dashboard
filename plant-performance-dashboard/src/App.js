import React from "react";
import "./App.css";
import ChartComponent from "./components/ChartComponent";
import DataTable from "./components/DataTable";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChartComponent />
      <DataTable />
    </div>
  );
}

export default App;
