import React from "react";
import Chart from "react-apexcharts";
import { Button } from "@mui/material";
import Datepick from "./datepicker";
const Donut2 = (props) => {
  const value = {
    options: {
      labels: ["Debit card", "Credit card", "Cash", "Others"],
      // title: { text: "Collection" },
    },
    series: [32, 55, 41, 17],
    labels: ["Cash", "DebitCard", "CreditCard", "Others"],
  };
  return (
    <div className="donut">
      <div style={{ display: "flex" }}>
        <p style={{ color: "#043752", fontSize: "0.7rem" }}>Total Collection</p>
        {/* <button style={{ marginLeft: "10rem", width: "5rem" }}>Button </button> */}
        {/* <Button
          variant="outlined"
          style={{
            color: "#043752",
            marginLeft: "8rem",
            width: "8rem",
          }}
          // variant="contained"
        > */}
        <Datepick />
        {/* </Button> */}
      </div>
      <br />
      {/* <br /> */}
      <Chart options={value.options} series={value.series} type="donut" />
    </div>
  );
};

export default Donut2;
