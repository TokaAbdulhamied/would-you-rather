import * as React from "react";
import {
  Button,
  Menu,
  MenuItem,
  Fade,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

export default function UsersMenu() {
  const [value, setValue] = React.useState("");
  // const open = Boolean(anchorEl);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FormControl>
        <InputLabel id="menu">Select User</InputLabel>

        <Select
          value={value}
          labelId="menu"
          label="Select User  "
          onChange={handleChange}
        >
          <MenuItem value="Profile">Profile</MenuItem>
          <MenuItem value="My account">My account</MenuItem>
          <MenuItem value="Logout">Logout</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
