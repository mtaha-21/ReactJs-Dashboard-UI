import React from "react";

function Image() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "0.8rem", color: "#043752" }}>Patients 12</p>
        <button style={{ marginLeft: "8.5rem", width: "5rem" }}>submit</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <p>Organization</p>
        </div>
        <div>
          <p>Doctor</p>
        </div>
        <div>
          <p>Staff</p>
        </div>
      </div>
    </div>
  );
}

export default Image;
