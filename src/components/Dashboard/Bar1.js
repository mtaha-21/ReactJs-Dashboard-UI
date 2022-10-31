import React from "react";
import Chart from "react-apexcharts";

const Bar1 = (props) => {
  const data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Oct21", "Nov21", "Dec21", "Jan22"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [120, 200, 100, 100],
      },
    ],
  };

  return (
    <div className="app">
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "0.8rem", color: "#043752" }}>Onboarded 200</p>
        <button style={{ marginLeft: "8.5rem", width: "5rem" }}>submit</button>
      </div>
      <div className="row">
        <div className="mixed-chart">
          <Chart options={data.options} series={data.series} type="bar" />
        </div>
      </div>
    </div>
  );
};

export default Bar1;
