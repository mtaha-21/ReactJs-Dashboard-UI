import React from "react";
import Chart from "react-apexcharts";

const Donut1 = (props) => {
  const value = {
    options: {},
    series: [50, 50],
    labels: ["Walkin Order", "App Order"],
  };
  return (
    <div className="donut">
      <div style={{ display: "flex" }}>
        <p style={{ color: "#043752" }}>Total Order:100</p>
        <button style={{ marginLeft: "7.8rem", width: "5rem" }}>submit</button>
      </div>
      <br />
      <br />
      <Chart options={value.options} series={value.series} type="donut" />
    </div>
  );
};

export default Donut1;
