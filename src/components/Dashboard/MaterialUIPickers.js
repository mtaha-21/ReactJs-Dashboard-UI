import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    // <div
    //   style={{
    //     width: "6rem",
    //     // height: "3rem",
    //     marginLeft: "8rem",
    //     border: "solid 1px",
    //   }}
    // >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <Stack spacing={1}> */}
      <div
        style={{
          marginLeft: "8rem",
          border: "solid 1px",
        }}
      >
        <DesktopDatePicker
          // label="Date desktop"
          // sx={{ width: 150 }}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      {/* </Stack> */}
    </LocalizationProvider>
    // </div>
  );
}
