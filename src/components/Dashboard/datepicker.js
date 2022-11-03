import React, { useState } from "react";

function Datepick() {
  const [date, setDate] = useState();
  console.log("Date", date);
  return (
    <>
      <input
        style={{
          fontSize: "11px",
          backgroundColor: "rgb(213, 216, 222)",
          marginLeft: "10rem",
        }}
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
    </>
  );
}

export default Datepick;
