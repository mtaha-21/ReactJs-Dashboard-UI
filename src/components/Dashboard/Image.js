import React from "react";
import { Button } from "@mui/material";
import Organization from "./icons8-organization-64.png";
import doctors from "./icons8-doctor-64.png";
import staff from "./icons8-administration-64.png";
// src\components\Dashboard\Organisation.png
function Image() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "0.7rem", color: "#043752" }}>User Logins 10</p>
        {/* <button style={{ marginLeft: "8.5rem", width: "5rem" }}>Button</button> */}
        <Button
          variant="outlined"
          style={{
            color: "#043752",
            marginLeft: "8.5rem",
            width: "5rem",
          }}
          // variant="contained"
        >
          Input
        </Button>
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
          {/* <WorkIcon style={{ height: "120px" }} /> */}
          <img
            src={Organization}
            alt="Organisation"
            style={{ height: "6rem", borderRadius: "1rem" }}
          />
        </div>
        <div>
          <p>Doctor</p>
          {/* <LocalHospitalIcon style={{ height: "120px" }} /> */}
          <img
            src={doctors}
            alt="doctors"
            style={{ height: "6rem", borderRadius: "5rem" }}
          />
        </div>
        <div>
          <p>Staff</p>
          {/* <PeopleIcon style={{ height: "120px" }} /> */}
          <img
            src={staff}
            alt="staff"
            style={{ height: "6rem", borderRadius: "5rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Image;
