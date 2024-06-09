import React, { useEffect, useState } from "react";
import { loadData } from "../utils/loadData";
import Card from "./Card";
import Graph from "./Graph";

function MainContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData(setData);
  }, []);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  // Assume data contains keys such as 'pressure', 'temperature', and 'flow'
  return (
    <div className="main-content">
      <Card title="Average Pressure" value={`${data[0].pressure} bar`} />
      <Card title="Average Temperature" value={`${data[0].temperature} °C`} />
      <Card title="Average Flow" value={`${data[0].flow} mmscfd`} />
      <Graph type="line" data={data} dataKey="pressure" />
      <Graph type="bar" data={data} dataKey="temperature" />
    </div>
  );
}

export default MainContent;
