import React from "react";
import UsersMenu from "./UsersMenu";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useStyles } from "../utils/styles";

export const CardHead = ({ subheader = "", ...props }) => {
  const classes = useStyles(props.style);
  return (
    <CardHeader
      className={classes.header}
      titleTypographyProps={{ variant: props.varient }}
      title={props.title}
      subheader={subheader}
    />
  );
};

export default function Login() {
  const classes = useStyles();
  return (
    <div>
      <Card variant="outlined" className={classes.card}>
        <CardHead
          style={{ height: "40px", align: "center" }}
          variant="h6"
          title="Welcome to the Would You Rather App!"
          subheader="Please sign in to continue"
        />
        <CardMedia
          className={classes.cardImg}
          component="img"
          image="\images\download.png"
          alt="animals"
        />
        <CardContent className={classes.content}>
          <UsersMenu />
          <Button sx={{ py: 1.5 }} variant="contained">
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
