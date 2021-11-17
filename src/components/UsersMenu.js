import * as React from "react";
import {
  Button,
  Menu,
  MenuItem,
  Fade,
  FormControl,
  InputLabel,
  Select,
  ListItemIcon,
} from "@mui/material";

export default function UsersMenu({ users }) {
  const [userId, setUserId] = React.useState("");

  // const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <>
      <FormControl>
        <InputLabel id="menu">Select User</InputLabel>

        <Select
          value={userId}
          labelId="menu"
          label="Select User"
          onChange={handleChange}
        >
          {users.map((user) => (
            <MenuItem value={user.id} key={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
