import React from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
