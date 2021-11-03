import React from "react";
import UsersMenu from "./UsersMenu";
import {
  Card,
  CardMedia,
  TextField,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useStyles } from "../utils/styles";
import { CardHead } from "./Login";
import { height } from "@mui/system";

export default function NewPoll() {
  const classes = useStyles();
  return (
    <div>
      <Card variant="outlined" className={classes.card}>
        <CardHead
          style={{ height: "15px", align: "start" }}
          variant="h1"
          title="Create a New Poll"
        />

        <CardContent className={classes.content}>
          <Typography variant="h5" align="left">
            Complete the question :{" "}
          </Typography>
          <Typography variant="h6" align="left">
            Would you rather...
          </Typography>
          <TextField
            margin="normal"
            id="outlined-basic"
            placeholder="Enter option one .."
            variant="outlined"
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className={classes.hrSpan}></span>
            <Typography>OR</Typography>
            <span className={classes.hrSpan}></span>
          </div>
          <TextField
            margin="normal"
            id="outlined-basic"
            placeholder="Enter option tow"
            variant="outlined"
          />
          <Button sx={{ py: 1.5, my: 1 }} variant="contained">
            Answer Poll
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
