import React from "react";
import Chart from "react-apexcharts";
import { Button } from "@mui/material";
import Datepick from "./datepicker";
const StackedBar = (props) => {
  const data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      // title: { text: "Total Order:100" },
      xaxis: {
        categories: ["Oct21", "Nov21", "Dec21", "Jan22"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [50, 100, 30, 30],
      },
      {
        name: "series-2",
        data: [60, 100, 50, 50],
      },
    ],
  };

  return (
    <div className="app">
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "0.7rem", color: "#043752" }}>Total Order:100</p>
        {/* <button style={{ marginLeft: "8.5rem", width: "5rem" }}>Button</button> */}
        {/* <Button
          variant="outlined"
          style={{
            color: "#043752",
            marginLeft: "8.5rem",
            width: "5rem",
          }}
          // variant="contained"
        > */}
        <Datepick />
        {/* </Button> */}
      </div>
      <div className="row">
        <div className="mixed-chart">
          <Chart options={data.options} series={data.series} type="bar" />
        </div>
      </div>
    </div>
  );
};

export default StackedBar;
