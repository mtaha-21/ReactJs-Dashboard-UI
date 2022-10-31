import React from "react";
import Chart from "react-apexcharts";

const Donut2 = (props) => {
  const value = {
    options: {},
    series: [44, 55, 41, 17],
    labels: ["Cash", "DebitCard", "CreditCard", "Others"],
  };
  return (
    <div className="donut">
      <div style={{ display: "flex" }}>
        <p style={{ color: "#043752" }}>Collection</p>
        <button style={{ marginLeft: "10rem", width: "5rem" }}>submit </button>
      </div>
      <br />
      <br />
      <Chart options={value.options} series={value.series} type="donut" />
    </div>
  );
};

export default Donut2;
