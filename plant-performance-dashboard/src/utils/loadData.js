import Papa from "papaparse";

export function loadData(callback) {
  const file = "/plant_performance_data"; // Update with the correct path
  fetch(file)
    .then((response) => response.text())
    .then((csvData) => {
      Papa.parse(csvData, {
        header: true,
        complete: (results) => {
          callback(results.data);
        },
      });
    });
}
